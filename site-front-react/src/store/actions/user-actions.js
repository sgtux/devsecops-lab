import { USER_CHANGED } from './action-types'

export const userChanged = user => ({ type: USER_CHANGED, payload: user })