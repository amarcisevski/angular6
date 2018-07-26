import { reducer, IAppReducerState } from './appReducers'
import { ActionReducerMap } from '@ngrx/store'

interface IAppState {
    appReducer: IAppReducerState
}

export const reducers : ActionReducerMap<IAppState, null> = {
    appReducer: reducer
}
