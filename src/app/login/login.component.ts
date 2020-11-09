import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    { value: 'user2', label: 'user2' },
    { value: 'user3', label: 'user3' },
    { value: 'user4', label: 'user4' },
  ];

  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private timHelperService: TimHelperService
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      user: ['user0', [Validators.required]],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.timHelperService.login(this.validateForm.value.user);
  }

}
