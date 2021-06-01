import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { TencentTimModule } from 'projects/ng-tencent-im/src/tencent-tim.module';
import { NzMessageModule } from 'ng-zorro-antd/message';



registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NzMessageModule,

    TencentTimModule.forRoot({
      account: 'user1',
      level: 4,
      sdkAppId: 1400440675
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
