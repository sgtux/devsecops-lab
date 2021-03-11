import { USER_CHANGED } from '../actions'

const INITIAL_STATE = {
    user: null
}

export const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_CHANGED:
            return { ...state, user: action.payload }
        default:
            return state
    }
}