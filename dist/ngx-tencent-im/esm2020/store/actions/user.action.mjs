import { createAction, props } from '@ngrx/store';
export var UserActionTypes;
(function (UserActionTypes) {
    UserActionTypes["SDKReady"] = "[user] toggleIsSDKReady";
    UserActionTypes["updateCurrentUserProfile"] = "[user] updateCurrentUserProfile";
    UserActionTypes["resetUser"] = "[user] resetUser";
})(UserActionTypes || (UserActionTypes = {}));
export const SDKReadyAction = createAction(UserActionTypes.SDKReady, props());
export const updateCurrentUserProfileAction = createAction(UserActionTypes.updateCurrentUserProfile, props());
export const resetUserAction = createAction(UserActionTypes.resetUser);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGVuY2VudC1pbS9zcmMvc3RvcmUvYWN0aW9ucy91c2VyLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdsRCxNQUFNLENBQU4sSUFBWSxlQUlYO0FBSkQsV0FBWSxlQUFlO0lBQ3pCLHVEQUFvQyxDQUFBO0lBQ3BDLCtFQUE0RCxDQUFBO0lBQzVELGlEQUE4QixDQUFBO0FBQ2hDLENBQUMsRUFKVyxlQUFlLEtBQWYsZUFBZSxRQUkxQjtBQUVELE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxZQUFZLENBQ3hDLGVBQWUsQ0FBQyxRQUFRLEVBQ3hCLEtBQUssRUFBK0IsQ0FDckMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLDhCQUE4QixHQUFHLFlBQVksQ0FDeEQsZUFBZSxDQUFDLHdCQUF3QixFQUN4QyxLQUFLLEVBQXlCLENBQy9CLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsWUFBWSxDQUN6QyxlQUFlLENBQUMsU0FBUyxDQUMxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQWN0aW9uLCBwcm9wcyB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gJ3RpbS1qcy1zZGsnO1xyXG5cclxuZXhwb3J0IGVudW0gVXNlckFjdGlvblR5cGVzIHtcclxuICBTREtSZWFkeSA9ICdbdXNlcl0gdG9nZ2xlSXNTREtSZWFkeScsXHJcbiAgdXBkYXRlQ3VycmVudFVzZXJQcm9maWxlID0gJ1t1c2VyXSB1cGRhdGVDdXJyZW50VXNlclByb2ZpbGUnLFxyXG4gIHJlc2V0VXNlciA9ICdbdXNlcl0gcmVzZXRVc2VyJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNES1JlYWR5QWN0aW9uID0gY3JlYXRlQWN0aW9uKFxyXG4gIFVzZXJBY3Rpb25UeXBlcy5TREtSZWFkeSxcclxuICBwcm9wczx7IFNES1JlYWR5U3RhdGU6IGJvb2xlYW47IH0+KClcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVDdXJyZW50VXNlclByb2ZpbGVBY3Rpb24gPSBjcmVhdGVBY3Rpb24oXHJcbiAgVXNlckFjdGlvblR5cGVzLnVwZGF0ZUN1cnJlbnRVc2VyUHJvZmlsZSxcclxuICBwcm9wczx7IHByb2ZpbGU6IFByb2ZpbGU7IH0+KClcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXNldFVzZXJBY3Rpb24gPSBjcmVhdGVBY3Rpb24oXHJcbiAgVXNlckFjdGlvblR5cGVzLnJlc2V0VXNlclxyXG4pO1xyXG4iXX0=