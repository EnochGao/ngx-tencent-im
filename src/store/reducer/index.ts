import { ActionReducerMap } from '@ngrx/store';
import { LoginReducer, LoginSuccessReducer } from './login.reducer';


//state
export interface state {
  login: any;
  loginSuccess: any;
}
//register the reducer functions
export const reducers: ActionReducerMap<state> = {
  login: LoginReducer,
  loginSuccess: LoginSuccessReducer
};