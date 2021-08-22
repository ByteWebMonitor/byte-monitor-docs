<p align="center"><img src="https://s2.ax1x.com/2020/02/04/1DsmTO.png" height = "100" /></p>
<h2 align="center">Byte-VitePress-CLI</h2>

# 介绍

`由于vitepress一些未知的错误，请暂时使用vitepress@0.13.2的模板来编写你的静态页面。`

这是一个轻量级的vitepress脚手架，初始化项目时你可以通过参数选取语言模板，其特色是可以一键部署到字节跳动旗下的云产品————[轻服务](https://qingfuwu.cn/)，以及支持[Byte-Web-Monitor](https://byte-web-monitor.vansin.top/)的页面监控服务。

## 安装

```
$ npm install byte-vitepress-cli -g
```

## 使用

在控制台输入以下命令生成中文模板:

```
$ byte-vitepress-cli init myproject
```

在控制台输入以下命令生成多语言支持（中英）的模板:

```
$ byte-vitepress-cli init myproject -e
```

## 命令与参数

### init 

通过该命令初始化你的vitepress项目

```
$ byte-vitepress-cli init myproject 
or 
$ byte-vitepress-cli init myproject -e
```

### upgrade

检查是否有版本更新

```
$ byte-vitepress-cli upgrade
```

### service <service_ID> \<credentials>

通过该指令生成你的云服务配置信息。

你可以在你个人的[轻服务](https://qingfuwu.cn/)控制台设置中查看到对应的service_ID。

个人凭证的申请可以参考如下链接: [personal_ credentials](https://qingfuwu.cn/docs/openapi/personaltoken2.html)

```
$ byte-vitepress-cli service aaabbb abcdefxyz
```

### monitor <APP_ID>

添加页面监控的app_id信息

你可以在[Byte-Web-Monitor](https://byte-web-monitor.vansin.top/)中申请一个app_id，并通过命令配置你的监控信息。

```
$ byte-vitepress-cli monitor example123
```

### addMonitor 

为你的项目增加页面监控功能，由[Byte-Web-Monitor](https://byte-web-monitor.vansin.top/)提供监控支持。

在增加该配置之前，请确保你已通过`monitor`指令配置了你的监控配置信息。

除此之外，你还得运行 `npm run build` 指令将你的项目打包后，方可进行监控配置。

注意，若要使用该功能，请在**页面部署前**在你的命令行中输入该命令。

```
$ byte-vitepress-cli addMonitor
```

### deploy

将你的项目部署到字节跳动旗下产品————[轻服务](https://qingfuwu.cn/)上。

在部署之前，请确保你已通过`service`指令配置了你的云服务配置信息。

除此之外，你还得运行 `npm run build` 指令将你的项目打包后，方可进行部署。

```
$ byte-vitepress-cli deploy
```

### mirror <TEMPLATE_MIRROR>

你可以替换模板的下载位置如下指令：

```
$ byte-vitepress-cli mirror https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/template/
```

**注意**  
你可以自己定制模板的镜像下载地址，但请确保该地址下拥有两种模板，模板的名字必须是 `template.zip` 或 `template-en.zip`, 并且镜像链接应以 `/` 结尾，否则将会出现模板下载的情况。  
举个例子，你的镜像地址为 `https://example.com/mirror/template.zip` 或 `https://example.com/mirror/template-en.zip`。
镜像配置的时候应当输入 `https://example.com/mirror/`  

当你修改了镜像后，最初的模板也会随之删除，若你仍需要最初的模板，你可以到如下链接中下载：[byte-vitepress-cli](https://github.com/YoungX99/byte-vitepress-cli). 

