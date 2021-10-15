import React from "react";
import {Link, useHistory} from "react-router-dom";
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';

import {loginInitialValues, loginValidationSchema} from "../utils/schemas";
import {login} from "../redux/actions/auth";
import {Paths} from "../utils/paths";

const LogIn = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const formikSubmit = async () => {
        await dispatch(login(formik.values));
        history.push(Paths.home);
    };

    const formik = useFormik({
        initialValues: loginInitialValues,
        validationSchema: loginValidationSchema,
        onSubmit: formikSubmit
    });

    return(
        <>
            <h1>Log In</h1>
            <br/>
            <form className="form-group" onSubmit={formik.handleSubmit}>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control col-md-7"
                    placeholder="Enter email address"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <br />
                <br />
                <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control  col-md-7"
                    placeholder="Enter password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                <br />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="checked"
                        value="remember"
                        checked={formik.values.checked}
                        onChange={formik.handleChange}
                    />
                    {"  "}Remember Me
                </label>
                <br />
                <button
                    className="btn btn-primary m-4"
                    type="submit"
                >
                    Log In
                </button>
            </form>
        </>
    );
};

export default LogIn;