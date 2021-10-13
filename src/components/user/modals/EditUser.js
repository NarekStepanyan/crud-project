import {useState, useEffect} from "react";
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-modal';

import "../../../App.css";
import {addUser, getSingleUser, getUsers} from "../../../redux/actions/users";
import {addUserInitialValues, addUserValidationSchema} from "../../../utils/schemas";

Modal.setAppElement('#root');

const EditUser = ({userId}) => {

    const dispatch = useDispatch();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const userCurrentData = useSelector(state => state.usersReducer.getSingleUser.data)
    console.log("userCurrentData", userCurrentData)

    const formikSubmit = async () => {
        await dispatch(addUser(values));
        await dispatch(getUsers());
        resetForm();
        setModalIsOpen(false);
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
        enableReinitialize: true,
        validationSchema: addUserValidationSchema,
        onSubmit: formikSubmit
    });

    async function openOrCloseModal() {
        setModalIsOpen(!modalIsOpen);
        await dispatch(getSingleUser(userId));
    }

    useEffect(() => {
        if (userCurrentData) {
            addUserInitialValues.firstName = userCurrentData.firstName
            addUserInitialValues.lastName = userCurrentData.lastName
            addUserInitialValues.email = userCurrentData.email
            addUserInitialValues.age = userCurrentData.age
        }
    }, [userCurrentData]);
    console.log("Usercurrentdata", userCurrentData)
    return (
        <>
            <button className="btn btn-warning" onClick={openOrCloseModal}>EDIT</button>

            <Modal
                isOpen={modalIsOpen}
                shouldCloseOnOverClick={false}
                onRequestClose={openOrCloseModal}
                style={
                        {
                           overlay: {
                               backgroundColor: "orange"
                           }
                        }
                }
            >
                <h4>Edit user data</h4>
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
                    {touched.firstName && errors.firstName && <div className="requirement"> {errors.firstName}</div> ||
                    <br/>}
                    <br/>
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
                    {touched.lastName && errors.lastName && <div className="requirement"> {errors.lastName}</div> ||
                    <br/>}
                    <br/>
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
                    {touched.email && errors.email && <div className="requirement"> {errors.email}</div> || <br/>}
                    <br/>
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
                    {touched.age && errors.age && <div className="requirement">{errors.age}</div> || <br/>}
                    <br/>

                    <button className="btn btn-warning" type="submit">CONFIRM CHANGES</button>
                </form>
            </Modal>
        </>
    );
}

export default EditUser;