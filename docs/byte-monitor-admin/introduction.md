# 字节前端监控管理员后台

初步使用vue-admin-element进行开发

## 持续部署

在敏捷开发模式下，我们会非常频繁地修改我们的需求，我们总要重复一遍遍以下的动作：修改代码、打包、登录服务器、上传打包文件。这个时候，自动化部署就派上用场了。我们组采用了GitHub Actions作为我们项目持续部署的工具。写好配置文件后，每当我们push代码到远程仓库时，GitHub Actions 会触发一系列的事件，帮助我们检查代码规范、打包、zip压缩、推送到轻服务的文件托管中，解放我们的双手，将更多的精力投入到生产中。



## 数据可视化

### 每日每小时访问量可视化

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210820113625.png)



### 某段时间内省级访问热力图

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210820114119.png)

### 浏览器版本和操作系统版本占比统计

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210820114248.png)
