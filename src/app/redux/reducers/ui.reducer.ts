
import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/ui.actions';


export interface IUIState {

  screenWidth: number;
  isCondensed: boolean;

};

const initialState: IUIState = {
  screenWidth: 0,
  isCondensed: true,
};

export const UiReducer = createReducer(
  initialState,
  on(
    actions.onResizeScreen,
    (state, { screenWidth }) => ({...state, screenWidth}),
  ),

  on(
    actions.onToggle,
    (state) => ({...state, isCondensed: !state.isCondensed}),
  ),

);
