import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NzFormModule } from 'ng-zorro-antd/form';

import { NzMessageModule } from 'ng-zorro-antd/message';
import { TencentTimModule } from 'ngx-tencent-im';
import { extModules } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

import { ImTestComponent } from './im-test/im-test.component';

registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ImTestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzSelectModule,
    NzButtonModule,
    NzMessageModule,
    NzButtonModule,
    NzAvatarModule,
    NzBadgeModule,
    TencentTimModule.forRoot({
      level: 4,
      sdkAppId: 1400440675,
      oversea: true,
      minimized: true
    }),
    extModules,
    AppRoutingModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
