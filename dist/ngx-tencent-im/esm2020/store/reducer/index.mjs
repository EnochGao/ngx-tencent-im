import { conversationIDReducer, conversationReducer } from './conversation.reducer';
import { groupReducer } from './group.reducer';
import { LoginReducer, } from './login.reducer';
import { showMessageReducer } from './message.reducer';
import { UserReducer } from './user.reducer';
// register the reducer functions
export const reducers = {
    login: LoginReducer,
    user: UserReducer,
    message: showMessageReducer,
    currentConversationID: conversationIDReducer,
    conversation: conversationReducer,
    group: groupReducer
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGVuY2VudC1pbS9zcmMvc3RvcmUvcmVkdWNlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQ0wscUJBQXFCLEVBRXJCLG1CQUFtQixFQUVwQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxHQUFlLE1BQU0saUJBQWlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFnQixNQUFNLG1CQUFtQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQVl4RCxpQ0FBaUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFtQztJQUN0RCxLQUFLLEVBQUUsWUFBWTtJQUNuQixJQUFJLEVBQUUsV0FBVztJQUNqQixPQUFPLEVBQUUsa0JBQWtCO0lBQzNCLHFCQUFxQixFQUFFLHFCQUFxQjtJQUM1QyxZQUFZLEVBQUUsbUJBQW1CO0lBQ2pDLEtBQUssRUFBRSxZQUFZO0NBQ3BCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25SZWR1Y2VyTWFwIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQge1xyXG4gIGNvbnZlcnNhdGlvbklEUmVkdWNlcixcclxuICBDb252ZXJzYXRpb25JRFN0YXRlLFxyXG4gIGNvbnZlcnNhdGlvblJlZHVjZXIsXHJcbiAgQ29udmVyc2F0aW9uU3RhdGVcclxufSBmcm9tICcuL2NvbnZlcnNhdGlvbi5yZWR1Y2VyJztcclxuaW1wb3J0IHsgZ3JvdXBSZWR1Y2VyLCBHcm91cFN0YXRlIH0gZnJvbSAnLi9ncm91cC5yZWR1Y2VyJztcclxuaW1wb3J0IHsgTG9naW5SZWR1Y2VyLCBMb2dpblN0YXRlLCB9IGZyb20gJy4vbG9naW4ucmVkdWNlcic7XHJcbmltcG9ydCB7IHNob3dNZXNzYWdlUmVkdWNlciwgTWVzc2FnZVN0YXRlIH0gZnJvbSAnLi9tZXNzYWdlLnJlZHVjZXInO1xyXG5pbXBvcnQgeyBVc2VyUmVkdWNlciwgVXNlclN0YXRlIH0gZnJvbSAnLi91c2VyLnJlZHVjZXInO1xyXG5cclxuXHJcbi8vIHN0YXRlXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVkdWNlclN0YXRlIHtcclxuICBsb2dpbjogTG9naW5TdGF0ZTtcclxuICB1c2VyOiBVc2VyU3RhdGU7XHJcbiAgbWVzc2FnZTogTWVzc2FnZVN0YXRlO1xyXG4gIGN1cnJlbnRDb252ZXJzYXRpb25JRDogQ29udmVyc2F0aW9uSURTdGF0ZTtcclxuICBjb252ZXJzYXRpb246IENvbnZlcnNhdGlvblN0YXRlO1xyXG4gIGdyb3VwOiBHcm91cFN0YXRlO1xyXG59XHJcbi8vIHJlZ2lzdGVyIHRoZSByZWR1Y2VyIGZ1bmN0aW9uc1xyXG5leHBvcnQgY29uc3QgcmVkdWNlcnM6IEFjdGlvblJlZHVjZXJNYXA8UmVkdWNlclN0YXRlPiA9IHtcclxuICBsb2dpbjogTG9naW5SZWR1Y2VyLFxyXG4gIHVzZXI6IFVzZXJSZWR1Y2VyLFxyXG4gIG1lc3NhZ2U6IHNob3dNZXNzYWdlUmVkdWNlcixcclxuICBjdXJyZW50Q29udmVyc2F0aW9uSUQ6IGNvbnZlcnNhdGlvbklEUmVkdWNlcixcclxuICBjb252ZXJzYXRpb246IGNvbnZlcnNhdGlvblJlZHVjZXIsXHJcbiAgZ3JvdXA6IGdyb3VwUmVkdWNlclxyXG59OyJdfQ==