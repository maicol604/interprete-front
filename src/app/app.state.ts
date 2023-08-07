import {ActionReducerMap} from  '@ngrx/store/src'
import { IUIState, UiReducer } from './redux/reducers/ui.reducer'

export interface IAppState {
  ui: IUIState
}


export const AppState: ActionReducerMap<IAppState> = {
  ui: UiReducer
}
