import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TIM } from '../../shared.data';
import * as i0 from "@angular/core";
import * as i1 from "../../avatar/avatar.component";
export class ProfileCardComponent {
    constructor() { }
    set userProfile(value) {
        this._userProfile = value;
        switch (value.gender) {
            case TIM.TYPES.GENDER_MALE:
                this.className = 'icon-male';
                break;
            case TIM.TYPES.GENDER_FEMALE:
                this.className = 'icon-female';
                break;
            default:
                this.className = null;
        }
    }
    ;
    get userProfile() {
        return this._userProfile;
    }
    ;
    ngOnInit() {
    }
}
ProfileCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ProfileCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ProfileCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: ProfileCardComponent, selector: "im-profile-card", inputs: { userProfile: "userProfile" }, ngImport: i0, template: "<div class=\"profile-card-wrapper\">\r\n  <div class=\"content\">\r\n    <im-avatar [src]=\"userProfile?.avatar\"></im-avatar>\r\n    <div class=\"basic\">\r\n      <span class=\"nick text-ellipsis\">{{ userProfile?.nick || userProfile?.userID }}</span>\r\n      <span class=\"iconfont\" [class]=\"className\"></span>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".profile-header{display:flex;margin-bottom:12px}.profile-card-wrapper .content{display:flex;justify-content:center;flex-direction:column;align-items:center}.basic{display:flex;align-items:center;margin-top:12px}.icon-male{color:#6391f3}.icon-female{color:#ff8096}.nick{font-size:18px;margin-right:8px;max-width:100px;display:inline-block}im-avatar::ng-deep .avatar{width:70px;height:70px}\n"], components: [{ type: i1.AvatarComponent, selector: "im-avatar", inputs: ["shape", "size", "type", "title", "src"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ProfileCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'im-profile-card', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"profile-card-wrapper\">\r\n  <div class=\"content\">\r\n    <im-avatar [src]=\"userProfile?.avatar\"></im-avatar>\r\n    <div class=\"basic\">\r\n      <span class=\"nick text-ellipsis\">{{ userProfile?.nick || userProfile?.userID }}</span>\r\n      <span class=\"iconfont\" [class]=\"className\"></span>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".profile-header{display:flex;margin-bottom:12px}.profile-card-wrapper .content{display:flex;justify-content:center;flex-direction:column;align-items:center}.basic{display:flex;align-items:center;margin-top:12px}.icon-male{color:#6391f3}.icon-female{color:#ff8096}.nick{font-size:18px;margin-right:8px;max-width:100px;display:inline-block}im-avatar::ng-deep .avatar{width:70px;height:70px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { userProfile: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10ZW5jZW50LWltL3NyYy9teS1wcm9maWxlL3Byb2ZpbGUtY2FyZC9wcm9maWxlLWNhcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRlbmNlbnQtaW0vc3JjL215LXByb2ZpbGUvcHJvZmlsZS1jYXJkL3Byb2ZpbGUtY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7OztBQVF4QyxNQUFNLE9BQU8sb0JBQW9CO0lBd0IvQixnQkFBZ0IsQ0FBQztJQXRCakIsSUFBYSxXQUFXLENBQUMsS0FBYztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixRQUFRLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDcEIsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVc7Z0JBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO2dCQUM3QixNQUFNO1lBQ1IsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWE7Z0JBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO2dCQUMvQixNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBQUEsQ0FBQztJQUVGLElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBTWdCLENBQUM7SUFFbEIsUUFBUTtJQUVSLENBQUM7O2lIQTVCVSxvQkFBb0I7cUdBQXBCLG9CQUFvQiwrRkNWakMsdVdBU0E7MkZEQ2Esb0JBQW9CO2tCQU5oQyxTQUFTOytCQUNFLGlCQUFpQixtQkFHVix1QkFBdUIsQ0FBQyxNQUFNOzBFQUlsQyxXQUFXO3NCQUF2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAndGltLWpzLXNkayc7XHJcbmltcG9ydCB7IFRJTSB9IGZyb20gJy4uLy4uL3NoYXJlZC5kYXRhJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW0tcHJvZmlsZS1jYXJkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZmlsZS1jYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wcm9maWxlLWNhcmQuY29tcG9uZW50Lmxlc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBzZXQgdXNlclByb2ZpbGUodmFsdWU6IFByb2ZpbGUpIHtcclxuICAgIHRoaXMuX3VzZXJQcm9maWxlID0gdmFsdWU7XHJcbiAgICBzd2l0Y2ggKHZhbHVlLmdlbmRlcikge1xyXG4gICAgICBjYXNlIFRJTS5UWVBFUy5HRU5ERVJfTUFMRTpcclxuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9ICdpY29uLW1hbGUnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFRJTS5UWVBFUy5HRU5ERVJfRkVNQUxFOlxyXG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gJ2ljb24tZmVtYWxlJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZ2V0IHVzZXJQcm9maWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VzZXJQcm9maWxlO1xyXG4gIH1cclxuXHJcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgX3VzZXJQcm9maWxlOiBQcm9maWxlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInByb2ZpbGUtY2FyZC13cmFwcGVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgIDxpbS1hdmF0YXIgW3NyY109XCJ1c2VyUHJvZmlsZT8uYXZhdGFyXCI+PC9pbS1hdmF0YXI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYmFzaWNcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJuaWNrIHRleHQtZWxsaXBzaXNcIj57eyB1c2VyUHJvZmlsZT8ubmljayB8fCB1c2VyUHJvZmlsZT8udXNlcklEIH19PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImljb25mb250XCIgW2NsYXNzXT1cImNsYXNzTmFtZVwiPjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19