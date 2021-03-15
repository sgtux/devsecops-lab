import {
    USER_CHANGED,
    TOOLBAR_TAB_CHANGED,
    SHOW_POST_MODAL,
    HIDE_MODAL
} from '../actions'

const INITIAL_STATE = {
    user: null,
    tabIndex: 0,
    postModal: false
}

export const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_CHANGED:
            return { ...state, user: action.payload }
        case TOOLBAR_TAB_CHANGED:
            return { ...state, tabIndex: action.payload }
        case HIDE_MODAL:
            return { ...state, postModal: false }
        case SHOW_POST_MODAL:
            return { ...state, postModal: true }
        default:
            return state
    }
}