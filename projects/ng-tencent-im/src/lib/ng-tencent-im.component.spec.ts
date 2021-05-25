import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgTencentImComponent } from './ng-tencent-im.component';

describe('NgTencentImComponent', () => {
  let component: NgTencentImComponent;
  let fixture: ComponentFixture<NgTencentImComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTencentImComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTencentImComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
