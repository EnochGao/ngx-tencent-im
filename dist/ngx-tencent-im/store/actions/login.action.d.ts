export declare enum LoginActionTypes {
    Login = "[toggleIsLogin]"
}
export declare const loginAction: import("@ngrx/store").ActionCreator<LoginActionTypes, (props: {
    isLogin: boolean;
}) => {
    isLogin: boolean;
} & import("@ngrx/store/src/models").TypedAction<LoginActionTypes>>;
