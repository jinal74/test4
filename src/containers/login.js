import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addLoginUser } from "../redux/action/login.action";

function Login(props) {
    const [userType, setUserType] = useState("Signup");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const dispatch = useDispatch()

    const handleSignin = (values) => {
        dispatch(addLoginUser(values))
    };

    const SigninSchema = {
        email: yup.string()
            .required("E-mail is must required")
            .email("Invalid"),
        password: yup.string()
            .required("Password is must required")
            .min(6, "Password is must 6 character long")
    };

    let schema = yup.object().shape(SigninSchema);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: schema,
        onSubmit: (values) => {
            handleSignin(values);
        }
    });

    const { handleSubmit, errors, getFieldProps } = formik;

    return (
        <div className="container mt-5 pt-5">
            <div className="section-title pt-3">
                <h2>Sign In</h2>
            </div>
            <FormikProvider value={formik}>
                <Form onSubmit={handleSubmit}>
                    <div className="col-lg-12 mt-5 mt-lg-0">
                        <div className="php-email-form">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 form-group my-2">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        id="email"
                                        placeholder="Your Email"
                                        {...getFieldProps("email")}
                                        errors={Boolean(errors.email)}
                                        errorMessage={errors.email}
                                    />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-4 form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        id="password"
                                        onChange={(e) => setPass(e.target.value)}
                                        placeholder="Your password"
                                        {...getFieldProps("password")}
                                        errors={Boolean(errors.password)}
                                        errorMessage={errors.password}
                                    />
                                </div>
                            </div>

                            <button type="submit">
                                Sign in
                            </button>
                        </div>
                    </div>
                </Form >
            </FormikProvider >
        </div >
    );
}

export default Login;