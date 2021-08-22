# 字节监控前端JSSDK

## 确定需求
1. 错误监控：监控```jsError, resourceError, promiseError, ajaxError, consoleError```，报错数据要尽可能详细
1. 性能监控：通过```performance```API获得用户加载页面时的白屏时间
1. 设备监控：通过```navigator```API获得用户的运行环境如浏览器、分辨率等
1. 上报策略：默认延迟到在用户关闭页面时，将三项监控数据post到后端。

例如：
```js
new Monitor({
	vue: Vue,
	app_id:"abcdabcdabcdabcd123",
});
```
即可运行

5. 使用策略：无侵入式。用户提供一个事先发放的```app_id```对即可使用，```app_id```用来唯一标识一个web应用。

# 开发落地

## 如何实现前端监控
前端监控项目，我们首要目的就是检测页面中的错误并上报，一般我们能想到的报错来源主要有JavaScript错误、静态资源错误、Promise异常、Ajax请求异常，以及Vue、React等框架的异常。  
### JavaScript异常
静态资源异常和JavaScript异常都会抛出```error```，所以我们可以通过```addEventListener('error')```或者```window.onerror```来捕获它们。  
但是，```addEventListener```无法获得JavaScript异常返回的详细堆栈信息，那我们只用```window.onerror```统一捕获他们就可以啊。然而，**静态资源异常的Error事件不会向上冒泡到window**，所以我们只能通过```addEventListener```在静态资源Error的捕获阶段将其拦下而非冒泡阶段。  

这样一来我们便明确了静态资源异常由```addEventListener(handler, true)```处理，JavaScript错误由```window.onerror```处理。JavaScript异常同时会被两者捕捉到，因此我们还要在```addEventListener```捕获阶段将此种类型剔除掉，以便使其顺利通过冒泡阶段处理。

仅保留资源加载错误可以用如下方法：
```js
window.addEventListener('error', (event)=>{
    let target = event.target
    var isElementTarget = target instanceof HTMLScriptElement || target instanceof HTMLLinkElement || target instanceof HTMLImageElement;
    if(isElementTarget){
        ...
    }
```
### Ajax异常
我们都知道Ajax是通过构造*XMLHttpRequest*实例来实现的，一个典型的POST请求如下
```js
   let xhr = new XMLHttpRequest();
   xhr.open("POST", url, true);
   xhr.setRequestHeader(..);
   xhr.send(JSON.stringify(defaults.data));// send的参数是请求体；
   xhr.onreadystatechange = function () {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
         success(JSON.parse(xhr.responseText))
   }
```
可以看到一个完整的xhr请求调用了原型上的```.open()```、```.send()```方法，所以我们只需要改写函数来增加监听，并在最后执行旧方法即可
```js
let origin = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function() {
         this.addEventListener('error', _handleEvent);
         this.addEventListener('load', _handleEvent);
         this.addEventListener('abort', _handleEvent);
         return origin.apply(this, arguments)
};
```
### Hash去重
设想工程中有这么一段代码，
```js
var obj = {}
while(obj.num++){
    ...
}
```
那么监控系统就会不间断上报数据完全一样的信息，所以```hash去重```必不可少。  
我们先为错误对象内部增加```hash```和```amount```字段，  
接着只需要调用md5库输入```错误描述 + 错误url```并输出一小串摘要```hash```，如果当前错误队列里有对应```hash```值的对象，就把它的```amount```加一，反之把对象入队。
### 性能检测
使用Performance Timing API来进行性能检测，纯调参。```performance```是window的一个对象。
```js
var performance = {  
    timing: {
        navigationStart: 1441112691935,
        ...
        // load 事件的回调函数执行完毕的时间
        loadEventEnd: 1441112693215
    }
};
```
```performance.timing```对象内部有大量加载的时刻，对时刻相减处理就可以获得某些内容的加载时间
### 访问量统计
访问量一般有PV、UV、IP三种，我们主要关注前两种——```PV```意为Page Visitor，页面点一次就算一个访问量；而```UV```意为Unique Visitor，相同的客户端在一天之内仅计算一个访问量。  
可以看出```PV```比较简单，而```UV```则需要对浏览器进行标识——我们使用```localStorage```在用户首次进入页面时生成一个随机字符串```mark_uv```来标识用户，同时生成一个```mark_time```来记录其生成的时间。如果某次触发中发现```Date.now()```是```mark_time```的下一天，我们便再次生成一个全新的```mark_uv```。由此便完成了PV和UV的统计。
## 类结构设计
### 明确目前需求：
* 页面错误存在```ajaxError, jsError, promiseError, resourceError, vueError```，他们又存在公共的数据和方法，因此将他们各自设计成类
* 错误消息队列，错误数据上报是上文页面错误共享的数据区和方法，页面错误又有大量属于自己的相似字段，因此设计一个基类```Base```和基类中的```static```方法来实现
* 性能和设备监听，这两个方法没有复杂关系
* 
### 设计类：  
综上，需要一个入口类接收配置，并构造出以上三者，因此设计```Monitor```类来统一注册监听错误、触发上报的时机，UML图如下
```js
class Monitor {
    constructor(options) {
                // 如果配置存在，就注册监听此类错误
    		options.ajaxError && new AjaxError(options).registerError();
		options.jsError && new jsError(options).registerError();
                ...
                // 关闭页面时上报数据
		window.addEventListener("beforeunload", () => {
			new Perfomance(options).record();
		});
	}
}
export default Monitor;
```
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a33b011f7dd94640985bb844f5184487~tplv-k3u1fbpfcp-watermark.image)
## 打包与发布
### 明确功能调用，拆分文件
首先，进行webpack打包的意义，更多在于方便script标签直接引入```index.min.js```。像支持ES6或者AMD规范的前端工程我们可以直接用import, require使用。所以：
* 若ES6, AMD规范引入，则不需要额外处理 
* 若script标签引入，需要额外暴露接口给global，因此webpack打包入口文件要进行拆分
为了实现后者，我们单独创建一个```entry.js```文件用于暴露外部接口。这样既不影响前者全局变量，又为webpack打包创建了入口：
```js
// entry.js
import Monitor from './index'
window.Monitor = Monitor;
```
### webpack打包

为了生成```index.min.js```文件，我们先为package.json添加快捷调用的脚本
```json
  "scripts": {
    "pack": "npx  webpack  --config  ./monitor/webpack.config.js"
  },
```
然后编写```webpack.config.js```
```js
const path = require("path");
module.exports = {
	//生成模式下压缩脚本
	mode: "production",
	entry: "./monitor/entry.js",
	output: {
		// filename:指定打包后js文件的名字
		filename: "index.min.js",
		//path:指定打包后的文件放在那里
		path: path.resolve(__dirname, ""),
	},
 ...
```
最后执行```npm run pack```脚本就可以得到打包后的单个js文件  
### npm发布
打包后我们就可以发布到npm上，
1. 首先编写根目录下的```package.json```，
```json
{
  "name": "byte-monitor-jssdk", //名字
  "version": "0.1.0",
  "private": false,
  "description": "Monitor errors in front-end", //描述
  "main": "./monitor/dist/index.js",
  "readmeFilename": "./monitor/README.md",
  "dependencies": {
    "js-md5": "^0.7.3"
  },
  ...
```
里面的```main```字段很重要——它用于引用npm包后从node_modules中寻找入口文件，所以指定到目录下的入口```index.js```即可  

2. npm包有版本的概念，但```index.min.js```本身没有任何版本记录信息，而且由于npm镜像可能存在延迟，导致发布的包不会立即被下载，所以甄别版本间的问题和差异显得很重要——我们通过打包时在文件名中携带版本号来解决，例如```index.min.js```名字变为```jssdk-0.1.2.min.js```
```js
const {version} = require('../package.json')
module.exports = {
        ...
	output: {
		filename: `jssdk-${version}.min.js`,
	},
```
3. 创建```.npmignore```文件，配置和Github的```.gitignore```类似，发布时忽略指定文件
4. 编写```README.md```，接着登录后```npm publish```就完成了

## 还可以做更多
