import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MESSAGE_STATUS, TIM } from '../../shared.data';
import { showAction } from '../../store/actions';
import { groupListSelector } from '../../store/selectors/group.selector';
import { CreateGroupComponent } from '../create-group/create-group.component';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "ng-zorro-antd/modal";
import * as i3 from "../../tim-helper.service";
import * as i4 from "ng-zorro-antd/select";
import * as i5 from "../group-item/group-item.component";
import * as i6 from "@angular/forms";
import * as i7 from "@angular/common";
export class GroupListComponent {
    constructor(store, cd, modal, timHelper) {
        this.store = store;
        this.cd = cd;
        this.modal = modal;
        this.timHelper = timHelper;
        this.loading = false;
        this.groupList = [];
        this.groupListOfOption = [];
    }
    ngOnInit() {
        this.subscription = this.store.select(groupListSelector).subscribe(res => {
            this.groupList = res;
            this.cd.markForCheck();
        });
        this.selectGroup.nzOnSearch.pipe(debounceTime(600), distinctUntilChanged())
            .subscribe((res) => {
            this.searchGroupByID(res);
        });
    }
    searchGroupByID(queryString) {
        if (queryString.trim().length > 0) {
            this.loading = true;
            this.timHelper.tim
                .searchGroupByID(queryString)
                .then(({ data: { group } }) => {
                this.groupListOfOption = [group];
                this.cd.markForCheck();
                this.loading = false;
            })
                .catch(() => {
                this.store.dispatch(showAction({
                    msgType: MESSAGE_STATUS.error,
                    message: '没有找到该群'
                }));
                this.loading = false;
            });
        }
    }
    applyJoinGroup(group) {
        this.timHelper.tim
            .joinGroup({ groupID: group.groupID, applyMessage: '' })
            .then(async (res) => {
            switch (res.data.status) {
                case TIM.TYPES.JOIN_STATUS_WAIT_APPROVAL:
                    this.store.dispatch(showAction({
                        msgType: MESSAGE_STATUS.info,
                        message: '申请成功，等待群管理员确认！'
                    }));
                    this.group = null;
                    this.groupListOfOption = [];
                    break;
                case TIM.TYPES.JOIN_STATUS_SUCCESS:
                    await this.timHelper.checkoutConversation(`GROUP${res.data.group.groupID}`);
                    this.store.dispatch(showAction({
                        msgType: MESSAGE_STATUS.success,
                        message: '加群成功'
                    }));
                    this.group = null;
                    this.groupListOfOption = [];
                    break;
                case TIM.TYPES.JOIN_STATUS_ALREADY_IN_GROUP:
                    this.store.dispatch(showAction({
                        msgType: MESSAGE_STATUS.warning,
                        message: '您已经是群成员了，请勿重复加群哦！'
                    }));
                    this.group = null;
                    this.groupListOfOption = [];
                    break;
                default: break;
            }
            this.cd.markForCheck();
        })
            .catch(error => {
            this.store.dispatch(showAction({
                msgType: MESSAGE_STATUS.error,
                message: error.message
            }));
        });
    }
    createGroup() {
        this.modal.create({
            nzTitle: `创建群组`,
            nzContent: CreateGroupComponent,
            nzMaskClosable: false,
            nzFooter: null,
            nzWidth: '40%',
            nzStyle: { top: '20px' },
            // nzComponentParams: {}
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
GroupListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: GroupListComponent, deps: [{ token: i1.Store }, { token: i0.ChangeDetectorRef }, { token: i2.NzModalService }, { token: i3.TimHelperService }], target: i0.ɵɵFactoryTarget.Component });
GroupListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: GroupListComponent, selector: "app-group-list", viewQueries: [{ propertyName: "selectGroup", first: true, predicate: ["search"], descendants: true, static: true }], ngImport: i0, template: "<div class=\"list-container\">\r\n  <div class=\"header-bar\">\r\n    <nz-select #search nzShowSearch nzServerSearch nzSize=\"small\" [nzLoading]=\"loading\"\r\n      nzPlaceHolder=\"\u8F93\u5165\u7FA4ID\u641C\u7D22\" [(ngModel)]=\"group\" (ngModelChange)=\"applyJoinGroup($event)\">\r\n      <nz-option *ngFor=\"let item of groupListOfOption\" [nzLabel]=\"item.groupID\" [nzValue]=\"item\">\r\n      </nz-option>\r\n    </nz-select>\r\n    <button title=\"\u521B\u5EFA\u7FA4\u7EC4\" (click)=\"createGroup()\">\r\n      <i class=\"tim-icon-add\"></i>\r\n    </button>\r\n  </div>\r\n  <div class=\"group-container\">\r\n    <app-group-item [group]=\"group\" *ngFor=\"let group of groupList\">\r\n    </app-group-item>\r\n  </div>\r\n</div>\r\n", styles: [".list-container{height:100%;width:100%;display:flex;flex-direction:column}.list-container .group-container{overflow-y:scroll}.list-container .header-bar{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:center;align-content:center;flex-shrink:0;height:50px;border-bottom:1px solid #303841;padding:10px 10px 10px 20px}.list-container .header-bar nz-select{width:100%}.list-container .header-bar .group-seach-bar{width:100%;margin-right:10px}.list-container .header-bar button{float:right;display:inline-block;cursor:pointer;background:#303841;border:none;color:#76828c;box-sizing:border-box;transition:.3s;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin:0;padding:0;width:30px;height:30px;line-height:34px;font-size:24px;text-align:center;white-space:nowrap;border-radius:50%;outline:0;flex-shrink:0}.list-container .header-bar button:hover{transform:rotate(360deg);color:#5cadff}.list-container .scroll-container{overflow-y:scroll;flex:1}\n"], components: [{ type: i4.NzSelectComponent, selector: "nz-select", inputs: ["nzId", "nzSize", "nzOptionHeightPx", "nzOptionOverflowSize", "nzDropdownClassName", "nzDropdownMatchSelectWidth", "nzDropdownStyle", "nzNotFoundContent", "nzPlaceHolder", "nzMaxTagCount", "nzDropdownRender", "nzCustomTemplate", "nzSuffixIcon", "nzClearIcon", "nzRemoveIcon", "nzMenuItemSelectedIcon", "nzTokenSeparators", "nzMaxTagPlaceholder", "nzMaxMultipleCount", "nzMode", "nzFilterOption", "compareWith", "nzAllowClear", "nzBorderless", "nzShowSearch", "nzLoading", "nzAutoFocus", "nzAutoClearSearchValue", "nzServerSearch", "nzDisabled", "nzOpen", "nzBackdrop", "nzOptions", "nzShowArrow"], outputs: ["nzOnSearch", "nzScrollToBottom", "nzOpenChange", "nzBlur", "nzFocus"], exportAs: ["nzSelect"] }, { type: i4.NzOptionComponent, selector: "nz-option", inputs: ["nzLabel", "nzValue", "nzDisabled", "nzHide", "nzCustomContent"], exportAs: ["nzOption"] }, { type: i5.GroupItemComponent, selector: "app-group-item", inputs: ["group"] }], directives: [{ type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i6.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: GroupListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-group-list', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"list-container\">\r\n  <div class=\"header-bar\">\r\n    <nz-select #search nzShowSearch nzServerSearch nzSize=\"small\" [nzLoading]=\"loading\"\r\n      nzPlaceHolder=\"\u8F93\u5165\u7FA4ID\u641C\u7D22\" [(ngModel)]=\"group\" (ngModelChange)=\"applyJoinGroup($event)\">\r\n      <nz-option *ngFor=\"let item of groupListOfOption\" [nzLabel]=\"item.groupID\" [nzValue]=\"item\">\r\n      </nz-option>\r\n    </nz-select>\r\n    <button title=\"\u521B\u5EFA\u7FA4\u7EC4\" (click)=\"createGroup()\">\r\n      <i class=\"tim-icon-add\"></i>\r\n    </button>\r\n  </div>\r\n  <div class=\"group-container\">\r\n    <app-group-item [group]=\"group\" *ngFor=\"let group of groupList\">\r\n    </app-group-item>\r\n  </div>\r\n</div>\r\n", styles: [".list-container{height:100%;width:100%;display:flex;flex-direction:column}.list-container .group-container{overflow-y:scroll}.list-container .header-bar{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:center;align-content:center;flex-shrink:0;height:50px;border-bottom:1px solid #303841;padding:10px 10px 10px 20px}.list-container .header-bar nz-select{width:100%}.list-container .header-bar .group-seach-bar{width:100%;margin-right:10px}.list-container .header-bar button{float:right;display:inline-block;cursor:pointer;background:#303841;border:none;color:#76828c;box-sizing:border-box;transition:.3s;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin:0;padding:0;width:30px;height:30px;line-height:34px;font-size:24px;text-align:center;white-space:nowrap;border-radius:50%;outline:0;flex-shrink:0}.list-container .header-bar button:hover{transform:rotate(360deg);color:#5cadff}.list-container .scroll-container{overflow-y:scroll;flex:1}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Store }, { type: i0.ChangeDetectorRef }, { type: i2.NzModalService }, { type: i3.TimHelperService }]; }, propDecorators: { selectGroup: [{
                type: ViewChild,
                args: ['search', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGVuY2VudC1pbS9zcmMvZ3JvdXAvZ3JvdXAtbGlzdC9ncm91cC1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10ZW5jZW50LWltL3NyYy9ncm91cC9ncm91cC1saXN0L2dyb3VwLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU1wSCxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7Ozs7Ozs7OztBQVM5RSxNQUFNLE9BQU8sa0JBQWtCO0lBUzdCLFlBQ1UsS0FBWSxFQUNaLEVBQXFCLEVBQ3JCLEtBQXFCLEVBQ3JCLFNBQTJCO1FBSDNCLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQVhyQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGNBQVMsR0FBaUIsRUFBRSxDQUFDO1FBQzdCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztJQVVuQixDQUFDO0lBRUwsUUFBUTtRQUVOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFD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bUJBR1QsdUJBQXVCLENBQUMsTUFBTTt3TEFTQSxXQUFXO3NCQUF6RCxTQUFTO3VCQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmltcG9ydCB7IE56TW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tb2RhbCc7XHJcbmltcG9ydCB7IE56U2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9zZWxlY3QnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcblxyXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJ3RpbS1qcy1zZGsnO1xyXG5pbXBvcnQgeyBNRVNTQUdFX1NUQVRVUywgVElNIH0gZnJvbSAnLi4vLi4vc2hhcmVkLmRhdGEnO1xyXG5pbXBvcnQgeyBzaG93QWN0aW9uIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucyc7XHJcbmltcG9ydCB7IGdyb3VwTGlzdFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vc3RvcmUvc2VsZWN0b3JzL2dyb3VwLnNlbGVjdG9yJztcclxuaW1wb3J0IHsgVGltSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3RpbS1oZWxwZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IENyZWF0ZUdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi4vY3JlYXRlLWdyb3VwL2NyZWF0ZS1ncm91cC5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWdyb3VwLWxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ncm91cC1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ncm91cC1saXN0LmNvbXBvbmVudC5sZXNzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEdyb3VwTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBncm91cDogR3JvdXA7XHJcbiAgbG9hZGluZyA9IGZhbHNlO1xyXG4gIGdyb3VwTGlzdDogQXJyYXk8R3JvdXA+ID0gW107XHJcbiAgZ3JvdXBMaXN0T2ZPcHRpb24gPSBbXTtcclxuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnc2VhcmNoJywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBzZWxlY3RHcm91cDogTnpTZWxlY3RDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmUsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgbW9kYWw6IE56TW9kYWxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0aW1IZWxwZXI6IFRpbUhlbHBlclNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdyb3VwTGlzdFNlbGVjdG9yKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgdGhpcy5ncm91cExpc3QgPSByZXM7XHJcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdEdyb3VwLm56T25TZWFyY2gucGlwZShkZWJvdW5jZVRpbWUoNjAwKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcclxuICAgICAgLnN1YnNjcmliZSgocmVzOiBzdHJpbmcpID0+IHtcclxuICAgICAgICB0aGlzLnNlYXJjaEdyb3VwQnlJRChyZXMpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlYXJjaEdyb3VwQnlJRChxdWVyeVN0cmluZzogc3RyaW5nKSB7XHJcbiAgICBpZiAocXVlcnlTdHJpbmcudHJpbSgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy50aW1IZWxwZXIudGltXHJcbiAgICAgICAgLnNlYXJjaEdyb3VwQnlJRChxdWVyeVN0cmluZylcclxuICAgICAgICAudGhlbigoeyBkYXRhOiB7IGdyb3VwIH0gfSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5ncm91cExpc3RPZk9wdGlvbiA9IFtncm91cF07XHJcbiAgICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChzaG93QWN0aW9uKHtcclxuICAgICAgICAgICAgbXNnVHlwZTogTUVTU0FHRV9TVEFUVVMuZXJyb3IsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfmsqHmnInmib7liLDor6XnvqQnXHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFwcGx5Sm9pbkdyb3VwKGdyb3VwOiBHcm91cCkge1xyXG4gICAgdGhpcy50aW1IZWxwZXIudGltXHJcbiAgICAgIC5qb2luR3JvdXAoeyBncm91cElEOiBncm91cC5ncm91cElELCBhcHBseU1lc3NhZ2U6ICcnIH0pXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAocmVzLmRhdGEuc3RhdHVzKSB7XHJcbiAgICAgICAgICBjYXNlIFRJTS5UWVBFUy5KT0lOX1NUQVRVU19XQUlUX0FQUFJPVkFMOlxyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgIHNob3dBY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgbXNnVHlwZTogTUVTU0FHRV9TVEFUVVMuaW5mbyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfnlLPor7fmiJDlip/vvIznrYnlvoXnvqTnrqHnkIblkZjnoa7orqTvvIEnXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5ncm91cCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBMaXN0T2ZPcHRpb24gPSBbXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFRJTS5UWVBFUy5KT0lOX1NUQVRVU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnRpbUhlbHBlci5jaGVja291dENvbnZlcnNhdGlvbihgR1JPVVAke3Jlcy5kYXRhLmdyb3VwLmdyb3VwSUR9YCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgc2hvd0FjdGlvbih7XHJcbiAgICAgICAgICAgICAgICBtc2dUeXBlOiBNRVNTQUdFX1NUQVRVUy5zdWNjZXNzLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+WKoOe+pOaIkOWKnydcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmdyb3VwID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5ncm91cExpc3RPZk9wdGlvbiA9IFtdO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgVElNLlRZUEVTLkpPSU5fU1RBVFVTX0FMUkVBRFlfSU5fR1JPVVA6XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgc2hvd0FjdGlvbih7XHJcbiAgICAgICAgICAgICAgICBtc2dUeXBlOiBNRVNTQUdFX1NUQVRVUy53YXJuaW5nLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+aCqOW3sue7j+aYr+e+pOaIkOWRmOS6hu+8jOivt+WLv+mHjeWkjeWKoOe+pOWTpu+8gSdcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmdyb3VwID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5ncm91cExpc3RPZk9wdGlvbiA9IFtdO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goc2hvd0FjdGlvbih7XHJcbiAgICAgICAgICBtc2dUeXBlOiBNRVNTQUdFX1NUQVRVUy5lcnJvcixcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlR3JvdXAoKSB7XHJcbiAgICB0aGlzLm1vZGFsLmNyZWF0ZSh7XHJcbiAgICAgIG56VGl0bGU6IGDliJvlu7rnvqTnu4RgLFxyXG4gICAgICBuekNvbnRlbnQ6IENyZWF0ZUdyb3VwQ29tcG9uZW50LFxyXG4gICAgICBuek1hc2tDbG9zYWJsZTogZmFsc2UsXHJcbiAgICAgIG56Rm9vdGVyOiBudWxsLFxyXG4gICAgICBueldpZHRoOiAnNDAlJyxcclxuICAgICAgbnpTdHlsZTogeyB0b3A6ICcyMHB4JyB9LFxyXG4gICAgICAvLyBuekNvbXBvbmVudFBhcmFtczoge31cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImxpc3QtY29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cImhlYWRlci1iYXJcIj5cclxuICAgIDxuei1zZWxlY3QgI3NlYXJjaCBuelNob3dTZWFyY2ggbnpTZXJ2ZXJTZWFyY2ggbnpTaXplPVwic21hbGxcIiBbbnpMb2FkaW5nXT1cImxvYWRpbmdcIlxyXG4gICAgICBuelBsYWNlSG9sZGVyPVwi6L6T5YWl576kSUTmkJzntKJcIiBbKG5nTW9kZWwpXT1cImdyb3VwXCIgKG5nTW9kZWxDaGFuZ2UpPVwiYXBwbHlKb2luR3JvdXAoJGV2ZW50KVwiPlxyXG4gICAgICA8bnotb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyb3VwTGlzdE9mT3B0aW9uXCIgW256TGFiZWxdPVwiaXRlbS5ncm91cElEXCIgW256VmFsdWVdPVwiaXRlbVwiPlxyXG4gICAgICA8L256LW9wdGlvbj5cclxuICAgIDwvbnotc2VsZWN0PlxyXG4gICAgPGJ1dHRvbiB0aXRsZT1cIuWIm+W7uue+pOe7hFwiIChjbGljayk9XCJjcmVhdGVHcm91cCgpXCI+XHJcbiAgICAgIDxpIGNsYXNzPVwidGltLWljb24tYWRkXCI+PC9pPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImdyb3VwLWNvbnRhaW5lclwiPlxyXG4gICAgPGFwcC1ncm91cC1pdGVtIFtncm91cF09XCJncm91cFwiICpuZ0Zvcj1cImxldCBncm91cCBvZiBncm91cExpc3RcIj5cclxuICAgIDwvYXBwLWdyb3VwLWl0ZW0+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=