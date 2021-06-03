
import { Action, createReducer, on } from '@ngrx/store';
import { showAction } from '../actions';


export interface MessageState {
  type: string;
  message: any,

}

export const initialState: MessageState = {
  type: 'error',
  message: '',
};

const _showMessageReducer = createReducer(
  initialState,
  on(showAction, (state, { msgType, message }) => ({ type: msgType, message })),
);

export function showMessageReducer(state: MessageState | undefined, action: Action) {
  return _showMessageReducer(state, action);
}
