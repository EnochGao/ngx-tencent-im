import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TencentTimModule } from 'ngx-tencent-im';
import { LazyTestComponent } from './lazy-test/lazy-test.component';
import { RouterModule } from '@angular/router';
import { extModules } from 'src/environments/environment';

@NgModule({
  declarations: [
    LazyTestComponent
  ],
  imports: [
    CommonModule,
    TencentTimModule.forRoot({
      level: 4,
      sdkAppId: 1400440675
    }),
    extModules,
    RouterModule.forChild([
      { path: '', component: LazyTestComponent }
    ])
  ]
})
export class LazyModule { }
