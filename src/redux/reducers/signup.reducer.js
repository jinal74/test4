import * as ActionTypes from '../ActionTypes';

const initialValue = {
    signup: [],
    errorMsg: '',
    isLoading: false
}

export const SignupReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SIGNUP_USER:
            return {
                ...state,
                signup: action.payload,
                errorMsg: '',
                isLoading: false
            }
        default:
            return state;
    }
}