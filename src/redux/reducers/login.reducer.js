import * as ActionTypes from '../ActionTypes';

const initialValue = {
    login: [],
    errorMsg: '',
    isLoading: false
}

export const authReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LOGIN_USER:
            return {
                ...state,
                login: state.auth.concat(action.payload),
                errorMsg: '',
                isLoading: false
            }
        default:
            return state;
    }
}