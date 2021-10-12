import {useEffect} from "react";
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from "react-router-dom";

import {addUserInitialValues, addUserValidationSchema} from "../utils/schemas";
import {addUser, getUsers} from "../redux/actions/users";

const AddUser = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const formikSubmit = async () => {
        await dispatch(addUser(formik.values));
        dispatch(getUsers());
        formik.resetForm();
    }

    const  formik = useFormik({
        initialValues: addUserInitialValues,
        validationSchema: addUserValidationSchema,
        onSubmit: formikSubmit
    });

    return(
        <>
            <form className="form-group" onSubmit={formik.handleSubmit}>
                <input
                    className="form-control form-control-lgform-control form-control-sm"
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
                <br />
                <input
                    className="form-control form-control-lgform-control form-control-sm"
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
                <br />
                <input
                    className="form-control form-control-lgform-control form-control-sm"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <br />
                <input
                    className="form-control form-control-lgform-control form-control-sm"
                    id="age"
                    name="age"
                    type="text"
                    placeholder="Age"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                />
                <br />
                <input
                    className="form-control form-control-lgform-control form-control-sm"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <br />
                <input
                    className="form-control form-control-lgform-control form-control-sm"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                />
                <br />
                <button className="btn btn-primary" type="submit">ADD</button>
            </form>
        </>
    );
}

export default AddUser;