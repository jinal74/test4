import * as ActionTypes from '../ActionTypes';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const addLoginUser = (values) => (dispatch) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
            const user = userCredential.user;
            if (user.emailVerified) {
                alert('login successfully')
                dispatch({ type: ActionTypes.ADD_LOGIN_USER, payload: user.uid })
            } else {
                alert('please verify mail')
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorCode)
            alert(errorMessage)
        });
}