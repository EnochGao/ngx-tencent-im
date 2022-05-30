import { Component } from '@angular/core';
import { currentConversationSelector } from '../../store/selectors';
import TIM from 'tim-js-sdk';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "./conversation-profile/user-profile/user-profile.component";
import * as i3 from "./conversation-profile/group-profile/group-profile.component";
import * as i4 from "@angular/common";
export class ConversationProfileComponent {
    constructor(store) {
        this.store = store;
        this.TIM = TIM;
    }
    ngOnInit() {
        this.subscription = this.store.select(currentConversationSelector)
            .subscribe(res => {
            this.currentConversation = res;
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
ConversationProfileComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ConversationProfileComponent, deps: [{ token: i1.Store }], target: i0.ɵɵFactoryTarget.Component });
ConversationProfileComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: ConversationProfileComponent, selector: "app-conversation-profile", ngImport: i0, template: "<div class=\"conversation-profile-wrapper\">\r\n  <app-user-profile *ngIf=\"currentConversation.type === TIM.TYPES.CONV_C2C\"\r\n    [userProfile]=\"currentConversation.userProfile\"></app-user-profile>\r\n\r\n  <app-group-profile *ngIf=\"currentConversation.type === TIM.TYPES.CONV_GROUP\"\r\n    [currentConversation]=\"currentConversation\"></app-group-profile>\r\n</div>\r\n", styles: [".conversation-profile-wrapper{background-color:#fff;height:100%;overflow-y:scroll}::-webkit-scrollbar{width:0px;height:0px}\n"], components: [{ type: i2.UserProfileComponent, selector: "app-user-profile", inputs: ["userProfile"] }, { type: i3.GroupProfileComponent, selector: "app-group-profile", inputs: ["currentConversation"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ConversationProfileComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-conversation-profile', template: "<div class=\"conversation-profile-wrapper\">\r\n  <app-user-profile *ngIf=\"currentConversation.type === TIM.TYPES.CONV_C2C\"\r\n    [userProfile]=\"currentConversation.userProfile\"></app-user-profile>\r\n\r\n  <app-group-profile *ngIf=\"currentConversation.type === TIM.TYPES.CONV_GROUP\"\r\n    [currentConversation]=\"currentConversation\"></app-group-profile>\r\n</div>\r\n", styles: [".conversation-profile-wrapper{background-color:#fff;height:100%;overflow-y:scroll}::-webkit-scrollbar{width:0px;height:0px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Store }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2F0aW9uLXByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRlbmNlbnQtaW0vc3JjL2NvbnZlcnNhdGlvbi9jb252ZXJzYXRpb24tcHJvZmlsZS9jb252ZXJzYXRpb24tcHJvZmlsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGVuY2VudC1pbS9zcmMvY29udmVyc2F0aW9uL2NvbnZlcnNhdGlvbi1wcm9maWxlL2NvbnZlcnNhdGlvbi1wcm9maWxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBSTdELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BFLE9BQU8sR0FBRyxNQUFNLFlBQVksQ0FBQzs7Ozs7O0FBTzdCLE1BQU0sT0FBTyw0QkFBNEI7SUFLdkMsWUFDVSxLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztRQUx0QixRQUFHLEdBQUcsR0FBRyxDQUFDO0lBTU4sQ0FBQztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDO2FBQy9ELFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7eUhBcEJVLDRCQUE0Qjs2R0FBNUIsNEJBQTRCLGdFQ1p6Qyw0WEFPQTsyRkRLYSw0QkFBNEI7a0JBTHhDLFNBQVM7K0JBQ0UsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbnZlcnNhdGlvbiB9IGZyb20gJ3RpbS1qcy1zZGsnO1xyXG5pbXBvcnQgeyBjdXJyZW50Q29udmVyc2F0aW9uU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9zdG9yZS9zZWxlY3RvcnMnO1xyXG5pbXBvcnQgVElNIGZyb20gJ3RpbS1qcy1zZGsnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY29udmVyc2F0aW9uLXByb2ZpbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb252ZXJzYXRpb24tcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29udmVyc2F0aW9uLXByb2ZpbGUuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udmVyc2F0aW9uUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBUSU0gPSBUSU07XHJcbiAgY3VycmVudENvbnZlcnNhdGlvbjogQ29udmVyc2F0aW9uO1xyXG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuc3RvcmUuc2VsZWN0KGN1cnJlbnRDb252ZXJzYXRpb25TZWxlY3RvcilcclxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgIHRoaXMuY3VycmVudENvbnZlcnNhdGlvbiA9IHJlcztcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiY29udmVyc2F0aW9uLXByb2ZpbGUtd3JhcHBlclwiPlxyXG4gIDxhcHAtdXNlci1wcm9maWxlICpuZ0lmPVwiY3VycmVudENvbnZlcnNhdGlvbi50eXBlID09PSBUSU0uVFlQRVMuQ09OVl9DMkNcIlxyXG4gICAgW3VzZXJQcm9maWxlXT1cImN1cnJlbnRDb252ZXJzYXRpb24udXNlclByb2ZpbGVcIj48L2FwcC11c2VyLXByb2ZpbGU+XHJcblxyXG4gIDxhcHAtZ3JvdXAtcHJvZmlsZSAqbmdJZj1cImN1cnJlbnRDb252ZXJzYXRpb24udHlwZSA9PT0gVElNLlRZUEVTLkNPTlZfR1JPVVBcIlxyXG4gICAgW2N1cnJlbnRDb252ZXJzYXRpb25dPVwiY3VycmVudENvbnZlcnNhdGlvblwiPjwvYXBwLWdyb3VwLXByb2ZpbGU+XHJcbjwvZGl2PlxyXG4iXX0=