import { createAction, props } from '@ngrx/store';

export enum LoginActionTypes {
  Login = '[Login] Login',
}


export const loginAction = createAction(
  LoginActionTypes.Login
);