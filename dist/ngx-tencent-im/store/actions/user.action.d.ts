export declare enum UserActionTypes {
    SDKReady = "[user] toggleIsSDKReady",
    updateCurrentUserProfile = "[user] updateCurrentUserProfile",
    resetUser = "[user] resetUser"
}
export declare const SDKReadyAction: import("@ngrx/store").ActionCreator<UserActionTypes.SDKReady, (props: {
    SDKReadyState: boolean;
}) => {
    SDKReadyState: boolean;
} & import("@ngrx/store/src/models").TypedAction<UserActionTypes.SDKReady>>;
export declare const updateCurrentUserProfileAction: import("@ngrx/store").ActionCreator<UserActionTypes.updateCurrentUserProfile, (props: {
    profile: Profile;
}) => {
    profile: Profile;
} & import("@ngrx/store/src/models").TypedAction<UserActionTypes.updateCurrentUserProfile>>;
export declare const resetUserAction: import("@ngrx/store").ActionCreator<UserActionTypes.resetUser, () => import("@ngrx/store/src/models").TypedAction<UserActionTypes.resetUser>>;
