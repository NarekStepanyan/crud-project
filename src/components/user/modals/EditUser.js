import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-modal';

import "../../../App.css";
import {editUser, getSingleUser, getUsers} from "../../../redux/actions/users";
import {editUserValidationSchema} from "../../../utils/schemas";
import {useEffect} from "react";
import {editHome, getHomesByUserId} from "../../../redux/actions/homes";

Modal.setAppElement('#root');

const EditUser = ({userId, isOpen, toggle}) => {

    const dispatch = useDispatch();
    const userCurrentData = useSelector(state => state.usersReducer.getSingleUser.data.data);
    const homesById = useSelector(state => state.homesReducer.getHomesByUserId.data.data);
    console.log("homesById", homesById)
    const closeHandle = () => {
        resetForm();
        toggle();
    }

    const formikSubmit = async () => {
        await dispatch(editUser(userId, values));
        await changeUserName();
        await dispatch(getUsers());
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
        initialValues: userCurrentData,
        enableReinitialize: true,
        validationSchema: editUserValidationSchema,
        onSubmit: formikSubmit
    });

    function changeUserName()  {
        homesById.map(data => {
            data.user = `${values.firstName}  ${values.lastName}`;
            dispatch(editHome(data.id, data))
        })
    }

    function getDataEffect(userId) {
        dispatch(getSingleUser(userId))
        dispatch(getHomesByUserId(userId))
    };

    useEffect(() => (isOpen && userId)? getDataEffect(userId): null,[isOpen])

    return (
        <>
            <Modal
                isOpen={isOpen}
                shouldCloseOnOverClick={false}
                onRequestClose={toggle}
                style={
                        {
                           overlay: {
                               backgroundColor: "orange"
                           }
                        }
                }
            >
                <button onClick={closeHandle} type="button" className="btn btn-close btn-danger topright" aria-label="Close">
                    <span>&times;</span>
                </button>
                <br/>

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