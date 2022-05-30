import { createSelector } from '@ngrx/store';
const selectPlayerStates = (state) => state.currentConversationID;
export const getCurrentConversationID = createSelector(selectPlayerStates, (state) => state.conversationID);
const selectConversation = (state) => state.conversation;
export const conversationSelector = createSelector(selectConversation, (state) => state);
const selectCurrentConversation = (state) => state.conversation.currentConversation;
export const currentConversationSelector = createSelector(selectCurrentConversation, (state) => state);
const selectConversationList = (state) => state.conversation.conversationList;
export const conversationListSelector = createSelector(selectConversationList, (state) => state);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2F0aW9uLnNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRlbmNlbnQtaW0vc3JjL3N0b3JlL3NlbGVjdG9ycy9jb252ZXJzYXRpb24uc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUs3QyxNQUFNLGtCQUFrQixHQUFHLENBQUMsS0FBbUIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO0FBQ2hGLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRWpILE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxLQUFtQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO0FBQ3ZFLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEtBQXdCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRzVHLE1BQU0seUJBQXlCLEdBQUcsQ0FBQyxLQUFtQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDO0FBQ2xHLE1BQU0sQ0FBQyxNQUFNLDJCQUEyQixHQUFHLGNBQWMsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLEtBQW1CLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBR3JILE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxLQUFtQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDO0FBQzVGLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUNuQyxjQUFjLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxLQUEwQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBDb252ZXJzYXRpb24gfSBmcm9tICd0aW0tanMtc2RrJztcclxuaW1wb3J0IHsgUmVkdWNlclN0YXRlIH0gZnJvbSAnLi4vcmVkdWNlcic7XHJcbmltcG9ydCB7IENvbnZlcnNhdGlvblN0YXRlIH0gZnJvbSAnLi4vcmVkdWNlci9jb252ZXJzYXRpb24ucmVkdWNlcic7XHJcblxyXG5jb25zdCBzZWxlY3RQbGF5ZXJTdGF0ZXMgPSAoc3RhdGU6IFJlZHVjZXJTdGF0ZSkgPT4gc3RhdGUuY3VycmVudENvbnZlcnNhdGlvbklEO1xyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudENvbnZlcnNhdGlvbklEID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0UGxheWVyU3RhdGVzLCAoc3RhdGU6IGFueSkgPT4gc3RhdGUuY29udmVyc2F0aW9uSUQpO1xyXG5cclxuY29uc3Qgc2VsZWN0Q29udmVyc2F0aW9uID0gKHN0YXRlOiBSZWR1Y2VyU3RhdGUpID0+IHN0YXRlLmNvbnZlcnNhdGlvbjtcclxuZXhwb3J0IGNvbnN0IGNvbnZlcnNhdGlvblNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0Q29udmVyc2F0aW9uLCAoc3RhdGU6IENvbnZlcnNhdGlvblN0YXRlKSA9PiBzdGF0ZSk7XHJcblxyXG5cclxuY29uc3Qgc2VsZWN0Q3VycmVudENvbnZlcnNhdGlvbiA9IChzdGF0ZTogUmVkdWNlclN0YXRlKSA9PiBzdGF0ZS5jb252ZXJzYXRpb24uY3VycmVudENvbnZlcnNhdGlvbjtcclxuZXhwb3J0IGNvbnN0IGN1cnJlbnRDb252ZXJzYXRpb25TZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRDb252ZXJzYXRpb24sIChzdGF0ZTogQ29udmVyc2F0aW9uKSA9PiBzdGF0ZSk7XHJcblxyXG5cclxuY29uc3Qgc2VsZWN0Q29udmVyc2F0aW9uTGlzdCA9IChzdGF0ZTogUmVkdWNlclN0YXRlKSA9PiBzdGF0ZS5jb252ZXJzYXRpb24uY29udmVyc2F0aW9uTGlzdDtcclxuZXhwb3J0IGNvbnN0IGNvbnZlcnNhdGlvbkxpc3RTZWxlY3RvciA9XHJcbiAgY3JlYXRlU2VsZWN0b3Ioc2VsZWN0Q29udmVyc2F0aW9uTGlzdCwgKHN0YXRlOiBBcnJheTxDb252ZXJzYXRpb24+KSA9PiBzdGF0ZSk7XHJcbiJdfQ==