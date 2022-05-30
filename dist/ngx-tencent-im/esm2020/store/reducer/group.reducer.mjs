import { on } from "@ngrx/store";
import { createReducer } from "@ngrx/store";
import { resetCurrentMemberListAction, updateCurrentMemberListAction, updateGroupListAction } from "../actions/group.action";
export const initialState = {
    groupList: [],
    currentMemberList: [],
    createGroupModelVisible: false
};
const _groupReducer = createReducer(initialState, on(updateGroupListAction, (state, { groupList }) => {
    return { ...state, groupList };
}), on(updateCurrentMemberListAction, (state, { currentMemberList }) => {
    return { ...state, currentMemberList };
}), on(resetCurrentMemberListAction, (state) => {
    return { ...state, currentMemberList: [] };
}));
export function groupReducer(state, action) {
    return _groupReducer(state, action);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10ZW5jZW50LWltL3NyYy9zdG9yZS9yZWR1Y2VyL2dyb3VwLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFVLEVBQUUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSw2QkFBNkIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBUTdILE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBZTtJQUN0QyxTQUFTLEVBQUUsRUFBRTtJQUNiLGlCQUFpQixFQUFFLEVBQUU7SUFDckIsdUJBQXVCLEVBQUUsS0FBSztDQUMvQixDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQUcsYUFBYSxDQUNqQyxZQUFZLEVBQ1osRUFBRSxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBaUIsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDN0QsT0FBTyxFQUFFLEdBQUcsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDO0FBQ2pDLENBQUMsQ0FBQyxFQUNGLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDLEtBQWlCLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUU7SUFDN0UsT0FBTyxFQUFFLEdBQUcsS0FBSyxFQUFFLGlCQUFpQixFQUFFLENBQUM7QUFDekMsQ0FBQyxDQUFDLEVBQ0YsRUFBRSxDQUFDLDRCQUE0QixFQUFFLENBQUMsS0FBaUIsRUFBRSxFQUFFO0lBQ3JELE9BQU8sRUFBRSxHQUFHLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FDSCxDQUFDO0FBRUYsTUFBTSxVQUFVLFlBQVksQ0FBQyxLQUE2QixFQUFFLE1BQWM7SUFDeEUsT0FBTyxhQUFhLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24sIG9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJlZHVjZXIgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IHJlc2V0Q3VycmVudE1lbWJlckxpc3RBY3Rpb24sIHVwZGF0ZUN1cnJlbnRNZW1iZXJMaXN0QWN0aW9uLCB1cGRhdGVHcm91cExpc3RBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9ncm91cC5hY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR3JvdXBTdGF0ZSB7XHJcbiAgZ3JvdXBMaXN0OiBBcnJheTxhbnk+O1xyXG4gIGN1cnJlbnRNZW1iZXJMaXN0OiBBcnJheTxhbnk+O1xyXG4gIGNyZWF0ZUdyb3VwTW9kZWxWaXNpYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBHcm91cFN0YXRlID0ge1xyXG4gIGdyb3VwTGlzdDogW10sXHJcbiAgY3VycmVudE1lbWJlckxpc3Q6IFtdLFxyXG4gIGNyZWF0ZUdyb3VwTW9kZWxWaXNpYmxlOiBmYWxzZVxyXG59O1xyXG5cclxuY29uc3QgX2dyb3VwUmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIoXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIG9uKHVwZGF0ZUdyb3VwTGlzdEFjdGlvbiwgKHN0YXRlOiBHcm91cFN0YXRlLCB7IGdyb3VwTGlzdCB9KSA9PiB7XHJcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgZ3JvdXBMaXN0IH07XHJcbiAgfSksXHJcbiAgb24odXBkYXRlQ3VycmVudE1lbWJlckxpc3RBY3Rpb24sIChzdGF0ZTogR3JvdXBTdGF0ZSwgeyBjdXJyZW50TWVtYmVyTGlzdCB9KSA9PiB7XHJcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgY3VycmVudE1lbWJlckxpc3QgfTtcclxuICB9KSxcclxuICBvbihyZXNldEN1cnJlbnRNZW1iZXJMaXN0QWN0aW9uLCAoc3RhdGU6IEdyb3VwU3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7IC4uLnN0YXRlLCBjdXJyZW50TWVtYmVyTGlzdDogW10gfTtcclxuICB9KSxcclxuKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBncm91cFJlZHVjZXIoc3RhdGU6IEdyb3VwU3RhdGUgfCB1bmRlZmluZWQsIGFjdGlvbjogQWN0aW9uKSB7XHJcbiAgcmV0dXJuIF9ncm91cFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbn1cclxuIl19