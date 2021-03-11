import { combineReducers } from 'redux'

import { appReducer } from './app.reducer'

export const reducers = combineReducers({
    appState: appReducer
})