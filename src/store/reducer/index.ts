import { ActionReducerMap } from '@ngrx/store';
import { LoginReducer } from './login.reducer';


//state
export interface state {
  login: any;
}
//register the reducer functions
export const reducers: ActionReducerMap<state> = {
  login: LoginReducer,
};