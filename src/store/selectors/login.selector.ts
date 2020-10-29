import { createSelector } from '@ngrx/store';




const selectPlayerStates = (state: { login: any; }) => state;

export const getLogin = createSelector(selectPlayerStates, (state: { login: any; }) => state.login);