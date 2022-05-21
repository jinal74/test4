import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addSignupUser } from "../redux/action/signup.action";

function Signup(props) {
    const [userType, setUserType] = useState("Signup");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");

    const dispatch = useDispatch()

    const handleSignup = (values) => {
        dispatch(addSignupUser(values))
    };

    const SignupSchema = {
        name: yup.string().required('name is must required'),
        email: yup.string()
            .required("E-mail is must required")
            .email("Invalid"),
        password: yup.string()
            .required("Password is must required")
            .min(6, "Password is must 6 character long")
    };

    let schema = yup.object().shape(SignupSchema);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: schema,
        onSubmit: (values) => {
            handleSignup(values);
        }
    });

    const { handleSubmit, errors, getFieldProps } = formik;

    return (
        <div className="container mt-5 pt-5">
            <div className="section-title pt-3">
                <h2>Sign up</h2>
            </div>
            <FormikProvider value={formik}>
                <Form onSubmit={handleSubmit}>
                    <div className="col-lg-12 mt-5 mt-lg-0">
                        <div className="php-email-form">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 form-group my-2">
                                    <input
                                        type="name"
                                        className="form-control"
                                        name="name"
                                        onChange={(e) => setName(e.target.value)}
                                        id="name"
                                        placeholder="Your Name"
                                        {...getFieldProps("name")}
                                    />
                                </div>
                                <label className="red-text">
                                    {errors.name}
                                </label>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-4 form-group my-2">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        id="email"
                                        placeholder="Your Email"
                                        {...getFieldProps("email")} />
                                </div>
                                <label className="red-text">
                                    {errors.email}
                                </label>
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
                                    />
                                </div>
                                <label className="red-text">
                                    {errors.password}
                                </label>
                            </div>

                            <button type="submit">
                                Sign up
                            </button>
                        </div>
                    </div>
                </Form >
            </FormikProvider >
        </div >
    );
}

export default Signup;