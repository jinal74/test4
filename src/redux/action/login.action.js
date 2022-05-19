import * as ActionTypes from '../ActionTypes';
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';

export const addLoginUser = (values) => (dispatch) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}