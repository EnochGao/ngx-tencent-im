<div align="center">
<!-- <img class="mx-auto center-block d-block" src="https://valor-software.com/ngx-bootstrap/assets/images/logos/ngx-bootstrap-logo.svg" alt="ngx-bootstrap" width="200" height="200"> -->
    <h1>ngx-tencent-im</h1>
</div>

<p align="center">
用于<a href="https://angular.io/">Angular</a>框架的腾讯即时通信包
</p>

[English](README.md) | 简体中文

## 使用 & Demo

应用案例在这:
[https://github.com/EnochGao/ngx-tencent-im/](https://github.com/EnochGao/ngx-tencent-im).

## 安装

```bash
npm install ngx-tencent-im --save
```

将 TencentTimModule 包导入到使用的 NgModule:

```ts
import { TencentTimModule } from 'ngx-tencent-im';

@NgModule({
  ...
    TencentTimModule.forRoot({
      level: 4,
      sdkAppId: xxxxxxx
    }),
  ...
})
```

将组件应用到 html:

```html
<ngx-tencent-tim (message)="messageTip($event)"></ngx-tencent-tim>
```

需要将相应的 css 文件到导入到 angular.json:

- `angular.json`

```json
            "assets": [
              ...
              {
                "glob": "**/*",
                "input": "./node_modules/@ant-design/icons-angular/src/inline-svg/",
                "output": "/assets/"
              }
            ],
            "styles": [
              ...
              "node_modules/ng-zorro-antd/ng-zorro-antd.min.css",
              "node_modules/ngx-tencent-im/assets/icon/iconfont.css",
              "node_modules/ngx-tencent-im/assets/icon/tim.css"
            ],
```

### 如何构建并运行

首先:

```bash
git clone https://github.com/enochgao/ngx-tencent-im.git
cd ngx-tencent-im
npm install
ng build ngx-tencent-im
npm start
```

## 兼容性

包依赖了 [Angular](https://angular.io) 、 [
ng-zorro-antd](https://ng.ant.design/)和[NGRX](https://ngrx.io/)
下面是版本情况:

| ngx-tencent-im | Angular         | NG-ZORRO | ngrx    |
| -------------- | --------------- | -------- | ------- |
| 0.0.1          | 11.x.x - 12.x.x | ^11.4.1  | ^12.0.0 |

## 贡献

欢迎大家贡献源代码! 贡献不只是 PRs 和代码，任何帮助文档或帮助其他开发人员解决问题的帮助都是非常感谢的! 提前谢谢!

## 其他

其他功能整在完善中，目前实现单聊群聊...
