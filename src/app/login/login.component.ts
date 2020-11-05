import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import { getLogin } from 'src/store/selectors/login.selector';

import { TimHelperService } from '../tencent-tim/tim-helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  userList = [
    { value: 'user0', label: 'user0' },
    { value: 'user1', label: 'user1' },
  ];

  validateForm!: FormGroup;
  @Output() isLogin = new EventEmitter<boolean>();
  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private timHelperService: TimHelperService
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      user: ['user0', [Validators.required]],
    });

    const login$ = this.store.pipe(select(getLogin));
    login$.subscribe(res => {

      this.isLogin.emit(res);
    }, err => console.error('err::', err));
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    this.timHelperService.login(this.validateForm.value.user);
  }

}
