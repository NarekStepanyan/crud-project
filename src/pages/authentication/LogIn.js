import React from "react";
import {Link} from "react-router-dom";
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';

import {loginInitialValues, loginValidationSchema} from "../../utils/schemas";
import {login} from "../../redux/actions/auth";
import {tokenCreator} from "../../utils/accessTokenHelper";
import {Paths} from "../../utils/paths";

const LogIn = () => {

    const dispatch = useDispatch();

    const formikSubmit = () => dispatch(login(formik.values));

    const formik = useFormik({
        initialValues: loginInitialValues,
        validationSchema: loginValidationSchema,
        onSubmit: formikSubmit
    });
    console.log(tokenCreator("admin1@admin.com", "123456"))
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
                        name="checkbox"
                        value="remember"
                        checked={formik.values.checked}
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
            <Link to={Paths.forgot}>Forgot password</Link>
        </>
    );
};

export default LogIn;