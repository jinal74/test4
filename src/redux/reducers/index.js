import { combineReducers } from "redux";
import { LoginReducer } from "./login.reducer";
import { SignupReducer } from "./signup.reducer";

const rootReducer = combineReducers({
    login: LoginReducer,
    signup: SignupReducer
})

export default rootReducer;