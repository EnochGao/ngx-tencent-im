import { createSelector } from '@ngrx/store';
const selectGroupListStates = (state) => state.group.groupList;
export const groupListSelector = createSelector(selectGroupListStates, (state) => state);
const currentMemberListStates = (state) => state.group.currentMemberList;
export const currentMemberListSelector = createSelector(currentMemberListStates, (state) => state);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuc2VsZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGVuY2VudC1pbS9zcmMvc3RvcmUvc2VsZWN0b3JzL2dyb3VwLnNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJN0MsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLEtBQW1CLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO0FBQzdFLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQW1CLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZHLE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxLQUFtQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO0FBQ3ZGLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUFHLGNBQWMsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLEtBQXlCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IEdyb3VwLCBHcm91cE1lbWJlciB9IGZyb20gJ3RpbS1qcy1zZGsnO1xyXG5pbXBvcnQgeyBSZWR1Y2VyU3RhdGUgfSBmcm9tICcuLi9yZWR1Y2VyJztcclxuXHJcbmNvbnN0IHNlbGVjdEdyb3VwTGlzdFN0YXRlcyA9IChzdGF0ZTogUmVkdWNlclN0YXRlKSA9PiBzdGF0ZS5ncm91cC5ncm91cExpc3Q7XHJcbmV4cG9ydCBjb25zdCBncm91cExpc3RTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEdyb3VwTGlzdFN0YXRlcywgKHN0YXRlOiBBcnJheTxHcm91cD4pID0+IHN0YXRlKTtcclxuY29uc3QgY3VycmVudE1lbWJlckxpc3RTdGF0ZXMgPSAoc3RhdGU6IFJlZHVjZXJTdGF0ZSkgPT4gc3RhdGUuZ3JvdXAuY3VycmVudE1lbWJlckxpc3Q7XHJcbmV4cG9ydCBjb25zdCBjdXJyZW50TWVtYmVyTGlzdFNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoY3VycmVudE1lbWJlckxpc3RTdGF0ZXMsIChzdGF0ZTogQXJyYXk8R3JvdXBNZW1iZXI+KSA9PiBzdGF0ZSk7XHJcbiJdfQ==