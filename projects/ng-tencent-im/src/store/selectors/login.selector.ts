import { createSelector } from '@ngrx/store';
import { ReducerState } from '../reducer';
import { LoginState } from '../reducer/login.reducer';

const selectPlayerStates = (state: ReducerState) => state.login;

export const getLogin = createSelector(selectPlayerStates, (state: LoginState) => state.isLogin);