<div align="center">
<!-- <img class="mx-auto center-block d-block" src="https://valor-software.com/ngx-bootstrap/assets/images/logos/ngx-bootstrap-logo.svg" alt="ngx-bootstrap" width="200" height="200"> -->
    <h1>ngx-tencent-im</h1>
</div>

<p align="center">
Tencent instant messaging for <a href="https://angular.io/">Angular</a>
</p>

English | [简体中文](README-zh_CN.md)

## Usage & Demo

demos could be found here:
[https://github.com/EnochGao/ngx-tencent-im/](https://github.com/EnochGao/ngx-tencent-im).

## Installation

```bash
npm install ngx-tencent-im --save
```

Add package to NgModule imports:

```ts
import { TencentTimModule } from 'ngx-tencent-im';

@NgModule({
  ...
    TencentTimModule.forRoot({
      level: 4,
      sdkAppId: xxxxxxx // <--- your im app id
    }),
  ...
})
```

Add component to your page:

```html
<ngx-tencent-tim (message)="messageTip($event)"></ngx-tencent-tim>
```

You will need to add css in angular.json:

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

### How to build lib for development

First time:

```bash
git clone https://github.com/enochgao/ngx-tencent-im.git
cd ngx-tencent-im
npm install
ng build ngx-tencent-im
npm start
```

## Compatibility

The only three dependencies are [Angular](https://angular.io) , [
ng-zorro-antd](https://ng.ant.design/)and [NGRX](https://ngrx.io/).
Here is the versions compatibility list:

| ngx-tencent-im | Angular         | NG-ZORRO | ngrx    |
| -------------- | --------------- | -------- | ------- |
| 0.0.1          | 11.x.x - 12.x.x | ^11.4.1  | ^12.0.0 |

## Contribution

All contributions very welcome! And remember, contribution is not only PRs and code, but any help with docs or helping other developers to solve issues are very appreciated! Thanks in advance!

## Other

Function is improving the development, the current implementation of single chat, group chat...
