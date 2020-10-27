import { createAction, props } from '@ngrx/store';

export enum LoginActionTypes {
  Login = '[Login] Login',
  LoadSuccess = '[TopList API] Data Loaded Success',
  LoadError = '[TopList Page] Load Error',
  ChangeValue = '[Hot Page] ChangeValue'
}


export const login = createAction(
  LoginActionTypes.Login,
  props<{ username: string; password: string; }>()
);