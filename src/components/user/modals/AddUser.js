import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import Modal from 'react-modal';

import "../../../App.css";
import {addUser, getUsers} from "../../../redux/actions/users";
import {addUserInitialValues, addUserValidationSchema} from "../../../utils/schemas";

Modal.setAppElement('#root');

const AddUser = ({isOpen, toggle}) => {

    const dispatch = useDispatch();

    const formikSubmit = async () => {
        await dispatch(addUser(values));
        dispatch(getUsers());
        resetForm();
        toggle();
    }

    const closeHandle = () => {
        resetForm();
        toggle();
    }

    const {
        resetForm,
        handleSubmit,
        handleChange,
        handleBlur,
        touched,
        values,
        errors
    } = useFormik({
        initialValues: addUserInitialValues,
        validationSchema: addUserValidationSchema,
        onSubmit: formikSubmit
    });

    return(
        <>
            <Modal
                isOpen={isOpen}
                shouldCloseOnOverClick={false}
                onRequestClose={toggle}
                style={
                    {
                       overlay: {
                           backgroundColor: "blue"
                       }
                    }
                }
            >
                <button onClick={closeHandle} type="button" className="btn btn-close btn-danger topright" aria-label="Close">
                    <span>&times;</span>
                </button>
                <br />
                <h4>Add new user</h4>
                <form className="form-group" onSubmit={handleSubmit}>
                    <input
                        className="form-control form-control-lgform-control form-control-sm"
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="First name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                    />

                    {touched.firstName && errors.firstName && <div className="requirement"> {errors.firstName}</div>}
                    <br />
                    <input
                        className="form-control form-control-lgform-control form-control-sm"
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Last name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                    />
                    {touched.lastName && errors.lastName && <div className="requirement"> {errors.lastName}</div>}
                    <br />
                    <input
                        className="form-control form-control-lgform-control form-control-sm"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {touched.email && errors.email && <div className="requirement"> {errors.email}</div>}
                    <br />
                    <input
                        className="form-control form-control-lgform-control form-control-sm"
                        id="age"
                        name="age"
                        type="text"
                        placeholder="Age"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.age}
                    />
                    {touched.age && errors.age && <div className="requirement">{errors.age}</div>}
                    <br />
                    <input
                        className="form-control form-control-lgform-control form-control-sm"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {touched.password && errors.password && <div className="requirement"> {errors.password}</div>}
                    <br />
                    <input
                        className="form-control form-control-lgform-control form-control-sm"
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                    />
                    {touched.confirmPassword && errors.confirmPassword && <div className="requirement"> {errors.confirmPassword}</div>}
                    <br />
                    <button className="btn btn-primary" type="submit">ADD</button>
                </form>
            </Modal>
        </>
    );
}

export default AddUser;