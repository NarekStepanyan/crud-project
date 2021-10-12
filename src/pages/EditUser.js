import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useFormik} from "formik";
import {editUserInitialValues, editUserValidationSchema} from "../utils/schemas";
import {getUsers} from "../redux/actions/users";

const EditUser = ({userid}) => {

    const dispatch = useDispatch();

    const userCurrentData = useSelector(state => state.usersReducer.getUsers.data.data)[userid-1];
    console.log("userCurrentData", userCurrentData)
    const formik = useFormik({
        initialValues: editUserInitialValues,
        validationSchema: editUserValidationSchema,
        // onSubmit: formikSubmit
    });

    useEffect(() => dispatch(getUsers()), [])

    useEffect(() => {
        if(userCurrentData) {
            formik.setFieldValue("firstName", userCurrentData.firstName);
            formik.setFieldValue("lastName", userCurrentData.lastName);
            formik.setFieldValue("email", userCurrentData.email);
            formik.setFieldValue("age", userCurrentData.age);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userCurrentData]);

    return(
        <form className="form-group" onSubmit={formik.handleSubmit}>
                <input className="form-control form-control-lgform-control form-control-sm"
                       id="firstName"
                       name="firstName"
                       type="text"
                       placeholder="First name"
                       onChange={formik.handleChange}
                       value={formik.values.firstName}
                />
                <br />
                <input className="form-control form-control-lgform-control form-control-sm"
                       id="lastName"
                       name="lastName"
                       type="text"
                       placeholder="Last name"
                       onChange={formik.handleChange}
                       value={formik.values.lastName}
                />
                <br />
                <input className="form-control form-control-lgform-control form-control-sm"
                       id="email"
                       name="email"
                       type="email"
                       placeholder="Email"
                       onChange={formik.handleChange}
                       value={formik.values.email}
                />
                <br />
                <input className="form-control form-control-lgform-control form-control-sm"
                       id="age"
                       name="age"
                       type="text"
                       placeholder="Age"
                       onChange={formik.handleChange}
                       value={formik.values.age}
                />
                <br />
                <input className="form-control form-control-lgform-control form-control-sm"
                       id="password"
                       name="password"
                       type="password"
                       placeholder="Password"
                       onChange={formik.handleChange}
                       value={formik.values.password}
                />
                <br />
                <input className="form-control form-control-lgform-control form-control-sm"
                       id="confirmPassword"
                       name="confirmPassword"
                       type="password"
                       placeholder="Confirm Password"
                       onChange={formik.handleChange}
                       value={formik.values.confirmPassword}
                />
                <br />
                <button className="btn btn-primary" type="submit">CONFIRM</button>
        </form>
    );
}

export default EditUser;