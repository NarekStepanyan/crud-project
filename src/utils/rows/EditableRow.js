import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useFormik} from "formik";
import {editUserInitialValues, editUserValidationSchema} from "../schemas";
import usersReducer from "../../redux/reducers/users";

const EditableRow = ({user}) => {

    const userCurrentData = useSelector(state => state.usersReducer.getUsers.data);
    console.log("userCurrentData", userCurrentData)
    const formik = useFormik({
        initialValues: editUserInitialValues,
        validationSchema: editUserValidationSchema,
        // onSubmit: formikSubmit
    });

    // useEffect(() => {
    //     if(currentComment) {
    //         formik.setFieldValue("comment", currentComment.message)
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [currentComment]);

    return(
        <form className="form-group" onSubmit={formik.handleSubmit}>
                <tr key={user.id}>
                    <input className="form-control form-control-lgform-control form-control-sm"
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="First name"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    <input className="form-control form-control-lgform-control form-control-sm"
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Last name"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                    <input className="form-control form-control-lgform-control form-control-sm"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <input className="form-control form-control-lgform-control form-control-sm"
                        id="age"
                        name="age"
                        type="text"
                        placeholder="Age"
                        onChange={formik.handleChange}
                        value={formik.values.age}
                    />
                    <input className="form-control form-control-lgform-control form-control-sm"
                         id="password"
                         name="password"
                         type="password"
                         placeholder="Password"
                         onChange={formik.handleChange}
                         value={formik.values.password}
                    />
                    <input className="form-control form-control-lgform-control form-control-sm"
                         id="confirmPassword"
                         name="confirmPassword"
                         type="password"
                         placeholder="Confirm Password"
                         onChange={formik.handleChange}
                         value={formik.values.confirmPassword}
                    />
                    <button className="btn btn-primary" type="submit">ADD</button>
                 </tr>
        </form>
    );
}

export default EditableRow;