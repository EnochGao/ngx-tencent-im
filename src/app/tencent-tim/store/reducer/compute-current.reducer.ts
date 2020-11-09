
import { Action, createReducer, on } from '@ngrx/store';
import { loginAction, startComputeCurrentAction, stopComputeCurrentAction, } from '../actions';


export interface ComputeCurrentState {
  current: number, // 当前时间
  intervalID: number | any,
  message: any;
}

export const initialState: ComputeCurrentState = {
  current: Date.now(), // 当前时间
  intervalID: 0,
  message: undefined
};

const _computeCurrentReducer = createReducer(
  initialState,
  on(startComputeCurrentAction, (state: ComputeCurrentState) => {
    let current;
    let intervalID = setInterval(() => {
      current = Date.now();
    }, 500);
    return { ...state, intervalID, current };
  }),
  on(stopComputeCurrentAction, (state: ComputeCurrentState) => {
    clearInterval(state.intervalID);
    const intervalID = 0;
    return { ...state, intervalID };
  }),
);

export function computeCurrentReducer(state: ComputeCurrentState | undefined, action: Action) {
  return _computeCurrentReducer(state, action);
}

