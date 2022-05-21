import * as ActionTypes from '../ActionTypes';

const initialValue = {
    login: [],
    errorMsg: '',
    isLoading: false
}

export const LoginReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LOGIN_USER:
            return {
                ...state,
                login: action.payload,
                errorMsg: '',
                isLoading: false
            }
        default:
            return state;
    }
}