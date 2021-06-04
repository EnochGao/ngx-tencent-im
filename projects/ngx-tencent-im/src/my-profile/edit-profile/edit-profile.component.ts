import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { UserProfile } from '../../im.type';
import { MESSAGE_STATUS, TIM } from '../../shared.data';
import { showAction } from '../../store/actions';
import { TimHelperService } from '../../tim-helper.service';

@Component({
  selector: 'im-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProfileComponent implements OnInit {
  @Input() userProfile: UserProfile;

  form: FormGroup;

  radioOption = [
    { label: '男', value: TIM.TYPES.GENDER_MALE },
    { label: '女', value: TIM.TYPES.GENDER_FEMALE },
    { label: '不显示', value: TIM.TYPES.GENDER_UNKNOWN },
  ];

  constructor(
    private fb: FormBuilder,
    public modalRef: NzModalRef,
    private store: Store,
    private timHelperService: TimHelperService

  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      avatar: [this.userProfile.avatar],
      nick: [this.userProfile.nick],
      gender: [this.userProfile.gender]
    });
  }

  submitForm() {
    const formValue = this.form.value;
    if (formValue.avatar && formValue.avatar.indexOf('http') === -1) {
      this.store.dispatch(
        showAction({ msgType: MESSAGE_STATUS.warning, message: '头像应该是 Url 地址' })
      );
      formValue.avatar = '';
      return;
    }
    const options = {};
    // 过滤空串
    Object.keys(formValue).forEach(key => {
      if (formValue[key]) {
        options[key] = formValue[key];
      }
    });
    this.timHelperService.tim
      .updateMyProfile(options)
      .then(() => {
        this.store.dispatch(
          showAction({ msgType: MESSAGE_STATUS.success, message: '修改成功' })
        );
        this.modalRef.destroy();
      })
      .catch(imError => {
        this.store.dispatch(
          showAction({ msgType: MESSAGE_STATUS.error, message: imError.message })
        );
      });
  }

}
