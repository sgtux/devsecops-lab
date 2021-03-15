import { USER_CHANGED, TOOLBAR_TAB_CHANGED } from './action-types'

export const userChanged = user => ({ type: USER_CHANGED, payload: user })
export const toolbarTabChanged = tabIndex => ({ type: TOOLBAR_TAB_CHANGED, payload: tabIndex })