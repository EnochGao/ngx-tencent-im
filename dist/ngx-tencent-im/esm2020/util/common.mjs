export function translateGroupSystemNotice(message) {
    const groupName = message.payload?.groupProfile.name || message.payload?.groupProfile.groupID;
    switch (message.payload.operationType) {
        case 1:
            return `${message.payload.operatorID} 申请加入群组：${groupName}`;
        case 2:
            return `成功加入群组：${groupName}`;
        case 3:
            return `申请加入群组：${groupName}被拒绝`;
        case 4:
            return `你被管理员${message.payload.operatorID}踢出群组：${groupName}`;
        case 5:
            return `群：${groupName} 已被${message.payload.operatorID}解散`;
        case 6:
            return `${message.payload.operatorID}创建群：${groupName}`;
        case 7:
            return `${message.payload.operatorID}邀请你加群：${groupName}`;
        case 8:
            return `你退出群组：${groupName}`;
        case 9:
            return `你被${message.payload.operatorID}设置为群：${groupName}的管理员`;
        case 10:
            return `你被${message.payload.operatorID}撤销群：${groupName}的管理员身份`;
        case 255:
            return '自定义群系统通知: ' + message.payload.userDefinedField;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRlbmNlbnQtaW0vc3JjL3V0aWwvY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxPQUFnQjtJQUN6RCxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDO0lBQzlGLFFBQVEsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUU7UUFDckMsS0FBSyxDQUFDO1lBQ0osT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxXQUFXLFNBQVMsRUFBRSxDQUFDO1FBQzdELEtBQUssQ0FBQztZQUNKLE9BQU8sVUFBVSxTQUFTLEVBQUUsQ0FBQztRQUMvQixLQUFLLENBQUM7WUFDSixPQUFPLFVBQVUsU0FBUyxLQUFLLENBQUM7UUFDbEMsS0FBSyxDQUFDO1lBQ0osT0FBTyxRQUFRLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxRQUFRLFNBQVMsRUFBRSxDQUFDO1FBQy9ELEtBQUssQ0FBQztZQUNKLE9BQU8sS0FBSyxTQUFTLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQztRQUM1RCxLQUFLLENBQUM7WUFDSixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLE9BQU8sU0FBUyxFQUFFLENBQUM7UUFDekQsS0FBSyxDQUFDO1lBQ0osT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTLFNBQVMsRUFBRSxDQUFDO1FBQzNELEtBQUssQ0FBQztZQUNKLE9BQU8sU0FBUyxTQUFTLEVBQUUsQ0FBQztRQUM5QixLQUFLLENBQUM7WUFDSixPQUFPLEtBQUssT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLFFBQVEsU0FBUyxNQUFNLENBQUM7UUFDaEUsS0FBSyxFQUFFO1lBQ0wsT0FBTyxLQUFLLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxPQUFPLFNBQVMsUUFBUSxDQUFDO1FBQ2pFLEtBQUssR0FBRztZQUNOLE9BQU8sWUFBWSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7S0FDMUQ7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJ3RpbS1qcy1zZGsnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZUdyb3VwU3lzdGVtTm90aWNlKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcclxuICBjb25zdCBncm91cE5hbWUgPSBtZXNzYWdlLnBheWxvYWQ/Lmdyb3VwUHJvZmlsZS5uYW1lIHx8IG1lc3NhZ2UucGF5bG9hZD8uZ3JvdXBQcm9maWxlLmdyb3VwSUQ7XHJcbiAgc3dpdGNoIChtZXNzYWdlLnBheWxvYWQub3BlcmF0aW9uVHlwZSkge1xyXG4gICAgY2FzZSAxOlxyXG4gICAgICByZXR1cm4gYCR7bWVzc2FnZS5wYXlsb2FkLm9wZXJhdG9ySUR9IOeUs+ivt+WKoOWFpee+pOe7hO+8miR7Z3JvdXBOYW1lfWA7XHJcbiAgICBjYXNlIDI6XHJcbiAgICAgIHJldHVybiBg5oiQ5Yqf5Yqg5YWl576k57uE77yaJHtncm91cE5hbWV9YDtcclxuICAgIGNhc2UgMzpcclxuICAgICAgcmV0dXJuIGDnlLPor7fliqDlhaXnvqTnu4TvvJoke2dyb3VwTmFtZX3ooqvmi5Lnu51gO1xyXG4gICAgY2FzZSA0OlxyXG4gICAgICByZXR1cm4gYOS9oOiiq+euoeeQhuWRmCR7bWVzc2FnZS5wYXlsb2FkLm9wZXJhdG9ySUR96Lii5Ye6576k57uE77yaJHtncm91cE5hbWV9YDtcclxuICAgIGNhc2UgNTpcclxuICAgICAgcmV0dXJuIGDnvqTvvJoke2dyb3VwTmFtZX0g5bey6KKrJHttZXNzYWdlLnBheWxvYWQub3BlcmF0b3JJRH3op6PmlaNgO1xyXG4gICAgY2FzZSA2OlxyXG4gICAgICByZXR1cm4gYCR7bWVzc2FnZS5wYXlsb2FkLm9wZXJhdG9ySUR95Yib5bu6576k77yaJHtncm91cE5hbWV9YDtcclxuICAgIGNhc2UgNzpcclxuICAgICAgcmV0dXJuIGAke21lc3NhZ2UucGF5bG9hZC5vcGVyYXRvcklEfemCgOivt+S9oOWKoOe+pO+8miR7Z3JvdXBOYW1lfWA7XHJcbiAgICBjYXNlIDg6XHJcbiAgICAgIHJldHVybiBg5L2g6YCA5Ye6576k57uE77yaJHtncm91cE5hbWV9YDtcclxuICAgIGNhc2UgOTpcclxuICAgICAgcmV0dXJuIGDkvaDooqske21lc3NhZ2UucGF5bG9hZC5vcGVyYXRvcklEfeiuvue9ruS4uue+pO+8miR7Z3JvdXBOYW1lfeeahOeuoeeQhuWRmGA7XHJcbiAgICBjYXNlIDEwOlxyXG4gICAgICByZXR1cm4gYOS9oOiiqyR7bWVzc2FnZS5wYXlsb2FkLm9wZXJhdG9ySUR95pKk6ZSA576k77yaJHtncm91cE5hbWV955qE566h55CG5ZGY6Lqr5Lu9YDtcclxuICAgIGNhc2UgMjU1OlxyXG4gICAgICByZXR1cm4gJ+iHquWumuS5iee+pOezu+e7n+mAmuefpTogJyArIG1lc3NhZ2UucGF5bG9hZC51c2VyRGVmaW5lZEZpZWxkO1xyXG4gIH1cclxufVxyXG4iXX0=