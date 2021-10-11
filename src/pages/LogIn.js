import React, {Component} from "react";
import {Link} from "react-router-dom";
import {useFormik} from 'formik';

import {loginInitialValues, loginValidationSchema} from "../../utils/schemas";
import {login} from "../../redux/actions/auth";
import {ResponseMessages} from "../../utils/ResponseMessages";
import {Paths} from "../../utils/paths";

const LogIn = () => {

    const formik = useFormik({
        initialValues: logInInitialValues,
        validationSchema: logInValidationSchema,
        onSubmit: formikSubmit
    });

    return(
        <>
            <form className="form-group" onSubmit={formik.handleSubmit}>
                <textarea
                    id="comment"
                    name="comment"
                    type="text"
                    className="form-control  col-md-7"
                    placeholder="Your comment"
                    value={formik.values.comment}
                    onChange={formik.handleChange}
                />
                <button
                    className="btn btn-success m-5"
                    type="submit"
                >Send
                </button>
            </form>
            <br />
            <h5 className="comment">{comments.count? `Comments ${comments.count}`: "No comment"}</h5>
            <br />
            {commentBox}
        </>
    );
};