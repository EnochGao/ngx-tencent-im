import { Component } from '@angular/core';
import { currentUserProfileSelector } from '../store/selectors';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "ng-zorro-antd/modal";
import * as i3 from "./profile-card/profile-card.component";
import * as i4 from "../avatar/avatar.component";
import * as i5 from "ng-zorro-antd/core/transition-patch";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "ng-zorro-antd/popover";
export class MyProfileComponent {
    constructor(store, modal) {
        this.store = store;
        this.modal = modal;
    }
    ngOnInit() {
        this.subscription = this.store.select(currentUserProfileSelector)
            .subscribe(res => {
            if (res) {
                this.currentUserProfile = res;
            }
        });
    }
    editProfile() {
        this.modal.create({
            nzTitle: `编辑资料`,
            nzContent: EditProfileComponent,
            nzMaskClosable: false,
            nzFooter: null,
            nzWidth: '40%',
            nzStyle: { top: '20px' },
            nzComponentParams: {
                userProfile: this.currentUserProfile
            }
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
MyProfileComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MyProfileComponent, deps: [{ token: i1.Store }, { token: i2.NzModalService }], target: i0.ɵɵFactoryTarget.Component });
MyProfileComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: MyProfileComponent, selector: "app-my-profile", ngImport: i0, template: "<ng-template #titleTemplate>\r\n  <div class=\"title-container\">\r\n    <span>\u5F53\u524D\u7528\u6237</span>\r\n    <i nz-icon nzType=\"setting\" nzTheme=\"outline\" (click)=\"editProfile()\"></i>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #contentTemplate>\r\n  <im-profile-card [userProfile]=\"currentUserProfile\"></im-profile-card>\r\n</ng-template>\r\n\r\n<div class=\"my-profile-wrapper\">\r\n  <div nz-button nz-popover nzType=\"primary\" nzPopoverTrigger=\"click\"\r\n    [nzPopoverTitle]=\"titleTemplate\" nzPopoverPlacement=\"right\"\r\n    [nzPopoverContent]=\"contentTemplate\">\r\n    <im-avatar [src]=\"currentUserProfile.avatar\"></im-avatar>\r\n  </div>\r\n</div>\r\n", styles: [".title-container{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center}.title-container i{cursor:pointer}.my-profile-wrapper{margin:15px}.my-profile-wrapper im-avatar{cursor:pointer}.edit-my-profile{position:absolute;top:10px;right:10px;cursor:pointer}\n"], components: [{ type: i3.ProfileCardComponent, selector: "im-profile-card", inputs: ["userProfile"] }, { type: i4.AvatarComponent, selector: "im-avatar", inputs: ["shape", "size", "type", "title", "src"] }], directives: [{ type: i5.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: i7.NzPopoverDirective, selector: "[nz-popover]", inputs: ["nzPopoverArrowPointAtCenter", "nzPopoverTitle", "nzPopoverContent", "nz-popover", "nzPopoverTrigger", "nzPopoverPlacement", "nzPopoverOrigin", "nzPopoverVisible", "nzPopoverMouseEnterDelay", "nzPopoverMouseLeaveDelay", "nzPopoverOverlayClassName", "nzPopoverOverlayStyle", "nzPopoverBackdrop"], outputs: ["nzPopoverVisibleChange"], exportAs: ["nzPopover"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MyProfileComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-my-profile', template: "<ng-template #titleTemplate>\r\n  <div class=\"title-container\">\r\n    <span>\u5F53\u524D\u7528\u6237</span>\r\n    <i nz-icon nzType=\"setting\" nzTheme=\"outline\" (click)=\"editProfile()\"></i>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #contentTemplate>\r\n  <im-profile-card [userProfile]=\"currentUserProfile\"></im-profile-card>\r\n</ng-template>\r\n\r\n<div class=\"my-profile-wrapper\">\r\n  <div nz-button nz-popover nzType=\"primary\" nzPopoverTrigger=\"click\"\r\n    [nzPopoverTitle]=\"titleTemplate\" nzPopoverPlacement=\"right\"\r\n    [nzPopoverContent]=\"contentTemplate\">\r\n    <im-avatar [src]=\"currentUserProfile.avatar\"></im-avatar>\r\n  </div>\r\n</div>\r\n", styles: [".title-container{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center}.title-container i{cursor:pointer}.my-profile-wrapper{margin:15px}.my-profile-wrapper im-avatar{cursor:pointer}.edit-my-profile{position:absolute;top:10px;right:10px;cursor:pointer}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Store }, { type: i2.NzModalService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktcHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGVuY2VudC1pbS9zcmMvbXktcHJvZmlsZS9teS1wcm9maWxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10ZW5jZW50LWltL3NyYy9teS1wcm9maWxlL215LXByb2ZpbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFNN0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7Ozs7OztBQU83RSxNQUFNLE9BQU8sa0JBQWtCO0lBSTdCLFlBQ1UsS0FBWSxFQUNaLEtBQXFCO1FBRHJCLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUMzQixDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUM7YUFDOUQsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQzthQUMvQjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUNoQixPQUFPLEVBQUUsTUFBTTtZQUNmLFNBQVMsRUFBRSxvQkFBb0I7WUFDL0IsY0FBYyxFQUFFLEtBQUs7WUFDckIsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUUsS0FBSztZQUNkLE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7WUFDeEIsaUJBQWlCLEVBQUU7Z0JBQ2pCLFdBQVcsRUFBRSxJQUFJLENBQUMsa0JBQWtCO2FBQ3JDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7OytHQXBDVSxrQkFBa0I7bUdBQWxCLGtCQUFrQixzRENkL0Isc3JCQWtCQTsyRkRKYSxrQkFBa0I7a0JBTDlCLFNBQVM7K0JBQ0UsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgTnpNb2RhbFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL21vZGFsJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAndGltLWpzLXNkayc7XHJcbmltcG9ydCB7IGN1cnJlbnRVc2VyUHJvZmlsZVNlbGVjdG9yIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzJztcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLW15LXByb2ZpbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9teS1wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9teS1wcm9maWxlLmNvbXBvbmVudC5sZXNzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeVByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgY3VycmVudFVzZXJQcm9maWxlOiBQcm9maWxlO1xyXG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICAgcHJpdmF0ZSBtb2RhbDogTnpNb2RhbFNlcnZpY2UsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuc3RvcmUuc2VsZWN0KGN1cnJlbnRVc2VyUHJvZmlsZVNlbGVjdG9yKVxyXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50VXNlclByb2ZpbGUgPSByZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGVkaXRQcm9maWxlKCkge1xyXG4gICAgdGhpcy5tb2RhbC5jcmVhdGUoe1xyXG4gICAgICBuelRpdGxlOiBg57yW6L6R6LWE5paZYCxcclxuICAgICAgbnpDb250ZW50OiBFZGl0UHJvZmlsZUNvbXBvbmVudCxcclxuICAgICAgbnpNYXNrQ2xvc2FibGU6IGZhbHNlLFxyXG4gICAgICBuekZvb3RlcjogbnVsbCxcclxuICAgICAgbnpXaWR0aDogJzQwJScsXHJcbiAgICAgIG56U3R5bGU6IHsgdG9wOiAnMjBweCcgfSxcclxuICAgICAgbnpDb21wb25lbnRQYXJhbXM6IHtcclxuICAgICAgICB1c2VyUHJvZmlsZTogdGhpcy5jdXJyZW50VXNlclByb2ZpbGVcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlICN0aXRsZVRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJ0aXRsZS1jb250YWluZXJcIj5cclxuICAgIDxzcGFuPuW9k+WJjeeUqOaItzwvc3Bhbj5cclxuICAgIDxpIG56LWljb24gbnpUeXBlPVwic2V0dGluZ1wiIG56VGhlbWU9XCJvdXRsaW5lXCIgKGNsaWNrKT1cImVkaXRQcm9maWxlKClcIj48L2k+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2NvbnRlbnRUZW1wbGF0ZT5cclxuICA8aW0tcHJvZmlsZS1jYXJkIFt1c2VyUHJvZmlsZV09XCJjdXJyZW50VXNlclByb2ZpbGVcIj48L2ltLXByb2ZpbGUtY2FyZD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxkaXYgY2xhc3M9XCJteS1wcm9maWxlLXdyYXBwZXJcIj5cclxuICA8ZGl2IG56LWJ1dHRvbiBuei1wb3BvdmVyIG56VHlwZT1cInByaW1hcnlcIiBuelBvcG92ZXJUcmlnZ2VyPVwiY2xpY2tcIlxyXG4gICAgW256UG9wb3ZlclRpdGxlXT1cInRpdGxlVGVtcGxhdGVcIiBuelBvcG92ZXJQbGFjZW1lbnQ9XCJyaWdodFwiXHJcbiAgICBbbnpQb3BvdmVyQ29udGVudF09XCJjb250ZW50VGVtcGxhdGVcIj5cclxuICAgIDxpbS1hdmF0YXIgW3NyY109XCJjdXJyZW50VXNlclByb2ZpbGUuYXZhdGFyXCI+PC9pbS1hdmF0YXI+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=