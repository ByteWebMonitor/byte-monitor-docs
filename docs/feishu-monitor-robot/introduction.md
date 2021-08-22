## 飞书监控示警机器人
## 环境
* node: 10.18.0以上
* npm: 6.13.4以上
 
## 链接
[Github仓库源码](https://github.com/ByteWebMonitor/byte-monitor-feishu-robot/tree/master)

## 安装
```bash
$ npm i byte-monitor-feishu-robot
```

## 快速开始
```js
const webhook = "你的机器人码"//机器人webhook码
```

## 配置参数
```js
const Rebot = require('byte-monitor-feishu-robot/index')({ webhook });
```
* [option.webhook](#webhook参数获取方式) (必填): webhook地址，类型是URL。例如：webhook: https://open.feishu.cn/xxxxxx
* [option.secret](#webhook参数获取方式) (选填): 如果飞书安全设置为签名校验则需要填写此项。类型是string，例如： secret: '123456'

## API说明
* Rebot.sendImg(img: string{二进流}) 发送文本信息
* Rebot.sendRickText(title: string, texts[][], lang?:string) 发送富文本信息， texts是二维数组，每个元素代表一行数据。格式需要和[飞书格式](https://open.feishu.cn/document/ukTMukTMukTM/uMDMxEjLzATMx4yMwETM#c48c9c2a)匹配
* Rebot.send(data: object) 支持所有消息，格式需要飞书匹配。

## webhook参数获取方式（**多图预警**）
1. 随便在哪一个飞书群聊里，点击设置

![Image text](https://raw.githubusercontent.com/ByteWebMonitor/byte-monitor-feishu-robot/main/img/1.png)

2. 点击群机器人

![Image text](https://raw.githubusercontent.com/ByteWebMonitor/byte-monitor-feishu-robot/main/img/2.png)

3. 添加机器人

![Image text](https://raw.githubusercontent.com/ByteWebMonitor/byte-monitor-feishu-robot/main/img/3.png)

4. 选择添加自定义机器人（通过webhook将自定义服务的消息推送至飞书）

![Image text](https://raw.githubusercontent.com/ByteWebMonitor/byte-monitor-feishu-robot/main/img/4.png)

5. 设置机器人名称、描述，点击下一步,然后点击复制获取webhook地址，点击签名校验复制secret。点击完成

![Image text](https://raw.githubusercontent.com/ByteWebMonitor/byte-monitor-feishu-robot/main/img/5.png)
## 效果图
1. 在post请求，输入想要进行机器人警报的app_id

![Image text](https://github.com/ByteWebMonitor/byte-monitor-feishu-robot/blob/master/img/6.png)

2. 效果实现图

![Image text](https://github.com/ByteWebMonitor/byte-monitor-feishu-robot/blob/master/img/7.png)
## 尾言
欢迎大家给个小⭐嗷
## License
[MIT](LICENSE)
