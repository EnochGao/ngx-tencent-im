import { createSelector } from '@ngrx/store';

const selectPlayerStates = (state: { message; }) => state.message;

export const getMessage = createSelector(selectPlayerStates, (state: any) => state);
