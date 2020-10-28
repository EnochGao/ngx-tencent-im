import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginAction } from 'src/store/actions';
import { LoginState } from 'src/store/reducer/login.reducer';
import { CreateTim } from 'src/tim/tim';

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

  login$ = this.store.select((item => { return item.isLogin; }));

  constructor(
    private fb: FormBuilder,
    private store: Store<LoginState>
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      user: ['user0', [Validators.required]],
    });

    const tim = CreateTim();

    console.log('tim:::', tim);

    this.login$.subscribe(res => {
      console.log('wwww', res);
    }, err => console.log('err::', err));

  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    this.store.dispatch(loginAction());
  }

}
