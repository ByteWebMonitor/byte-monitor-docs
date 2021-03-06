# GitHub Live feishu robot message alerts

使用GitHub WebHook功能与字节轻服务平台实现GitHub仓库内的各类操作自动由飞书机器人推送至群内。

## 消息提醒

在敏捷开发模式下，我们会非常频繁地修改我们的需求，在团队协作时，人员之间的工作进度同步与交流十分繁琐，浪费大量时间。为解决此类问题，我们组采用了GitHub WebHook配合字节轻服务向飞书机器人推送提醒。只需简单的配置后，每当我们对GitHub远程仓库进行操作时，GitHub WebHook会触发字节轻服务云函数，最终向群内的飞书机器人进行推送，组内成员便能方便快捷地得知组内项目的最新开发动态，便于快速响应、降低沟通成本、减少无意义的等待、提升协作效率，将更多的精力投入到生产中。



## 动态可视化

### 组内仓库push动态推送

![](https://pan.ponder.fun/api/v3/share/preview/PjUz)
![](https://s3.bmp.ovh/imgs/2021/08/ac2e2c2c7033b584.png)
在发生push事件后，机器人会展示该push的发起人、所在仓库、所在分支，并附加该push内所含的所有Commit内容，可以直接点击相应的Commit超链接前往对应的Commit页面。



### 组内仓库其他动态推送

![](https://s3.bmp.ovh/imgs/2021/08/6a908bee7ac4d4e9.png)
在发生其他事件后，机器人会展示该事件类型、发起人、所在仓库，可以直接点击附加的超链接前往对应的仓库查看详情。
