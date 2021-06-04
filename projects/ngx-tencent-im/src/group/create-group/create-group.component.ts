import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzSelectComponent } from 'ng-zorro-antd/select';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


import { MESSAGE_STATUS, TIM_TYPES } from '../../shared.data';
import { showAction } from '../../store/actions';
import { TimHelperService } from '../../tim-helper.service';

@Component({
  selector: 'im-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateGroupComponent implements OnInit {
  validateForm!: FormGroup;

  captchaTooltipIcon: any = {
    type: 'info-circle',
    theme: 'twotone'
  };

  groupTypeOption = [
    { label: 'Work', value: TIM_TYPES.GRP_WORK },
    { label: 'Public', value: TIM_TYPES.GRP_PUBLIC },
    { label: 'Meeting', value: TIM_TYPES.GRP_MEETING },
    { label: 'AVChatRoom', value: TIM_TYPES.GRP_AVCHATROOM },
  ];

  memberListOfOption = [];

  loading = false;

  @ViewChild('search', { static: true }) private nzSelect: NzSelectComponent;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private cd: ChangeDetectorRef,
    public modalRef: NzModalRef,
    private timeHelper: TimHelperService
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      groupID: [null, []],
      name: [null, [Validators.required]],
      type: [TIM_TYPES.GRP_WORK, [Validators.required]],
      avatar: [null, []],
      introduction: [],
      notification: [null, []],
      joinOption: [{ value: 'FreeAccess', disabled: true }, []],
      memberList: [null, []]
    });

    this.validateForm.get('type').valueChanges.subscribe((value: TIM_TYPES) => {
      switch (value) {
        case TIM_TYPES.GRP_WORK:
          this.validateForm.get('joinOption').disable();
          this.validateForm.get('memberList').enable();
          break;
        case TIM_TYPES.GRP_PUBLIC:
          this.validateForm.get('joinOption').enable();
          this.validateForm.get('memberList').enable();
          break;
        case TIM_TYPES.GRP_MEETING:
          this.validateForm.get('joinOption').disable();
          this.validateForm.get('memberList').enable();
          break;
        case TIM_TYPES.GRP_AVCHATROOM:
          this.validateForm.get('joinOption').disable();
          this.validateForm.get('memberList').disable();
          break;

        default:
          break;
      }
    });

    this.nzSelect.nzOnSearch.pipe(debounceTime(600), distinctUntilChanged())
      .subscribe((res: string) => {
        this.handleSearchUser(res);
      });

  }

  handleSearchUser(userID: string) {
    if (userID !== '') {
      this.loading = true;
      this.timeHelper.tim.getUserProfile({ userIDList: [userID] }).then(({ data }) => {
        this.memberListOfOption = data.map(item => item.userID);
        console.log(this.memberListOfOption);
        this.loading = false;
        this.cd.markForCheck();
      }).catch((error: any) => {
        this.store.dispatch(showAction({
          msgType: MESSAGE_STATUS.error,
          message: error.message
        }));
      });
    }
  }


  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    this.timeHelper.tim.createGroup(this.getOptions()).then((imResponse) => {
      this.store.dispatch(
        showAction({
          msgType: MESSAGE_STATUS.success,
          message: `群组：【${imResponse.data.group.name}】创建成功`
        }));
      this.modalRef.destroy();
    }).catch(error => {
      this.store.dispatch(
        showAction({
          msgType: MESSAGE_STATUS.error,
          message: error.message
        }));
    });
  }

  getOptions() {
    let options = {
      ...this.validateForm.value,
      memberList: this.validateForm.value.memberList.map(userID => ({ userID }))
    };
    if ([TIM_TYPES.GRP_WORK, TIM_TYPES.GRP_AVCHATROOM].includes(this.validateForm.value.type)) {
      delete options.joinOption;
    }
    return options;
  }

}
