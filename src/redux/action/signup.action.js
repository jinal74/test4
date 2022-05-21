import * as ActionTypes from '../ActionTypes';
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

export const addSignupUser = (values) => (dispatch) => {
    try {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                const user = userCredential.user;
                sendEmailVerification(user)
                    .then(() => {
                        alert('verification mail send on your mail address.')
                        dispatch({ type: ActionTypes.ADD_SIGNUP_USER, payload: user.uid })
                        window.location.href = "/login"
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert(errorCode)
                alert(errorMessage)
            });
    } catch (e) {
        alert(e)
    }
}