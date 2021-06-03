import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TimHelperService } from 'ngx-tencent-im';
import { genTestUserSig } from '../tim-config/GenerateTestUserSig';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  listOfUser: Array<{ label: string; value: string; }> = [];;

  constructor(
    private fb: FormBuilder,
    private timHelperService: TimHelperService
  ) {
    const children: Array<{ label: string; value: string; }> = [];
    for (let i = 0; i < 10; i++) {
      children.push({ label: 'user' + i, value: 'user' + i });
    }
    this.listOfUser = children;
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.timHelperService.login(this.validateForm.value.userName, genTestUserSig(this.validateForm.value.userName).userSig);
  }

}
