import {useState} from "react";
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-modal';

import "../../../App.css";
import {editHome, getSingleHome, getHomes} from "../../../redux/actions/homes";
import {editHomeValidationSchema} from "../../../utils/schemas";
import Select from "react-select";
import {bedrooms} from "../../../utils/bedrooms";

Modal.setAppElement('#root');

const EditUser = ({homeId}) => {

    const dispatch = useDispatch();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const homeCurrentData = useSelector(state => state.homesReducer.getSingleHome.data.data);
    const usersData = useSelector(state => state.usersReducer.getUsers.data.data);

    const users = usersData.map(user => ({value: user.id, label: `${user.firstName}  ${user.lastName}`}))

    const formikSubmit = async () => {
        await dispatch(editHome(homeId, values));
        await dispatch(getHomes());
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
        initialValues: homeCurrentData,
        enableReinitialize: true,
        validationSchema: editHomeValidationSchema,
        onSubmit: formikSubmit
    });

    async function openOrCloseModal() {
        setModalIsOpen(!modalIsOpen);
        await dispatch(getSingleHome(homeId));
    }

    function userSelect(event) {
        values.user = event.label;
    }
    function bedroomSelect(event) {
        values.bedrooms = event.value;
    }

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
                <button onClick={openOrCloseModal} type="button" className="btn btn-close btn-danger topright" aria-label="Close">
                    <span>&times;</span>
                </button>
                <br/>

                <h4>Edit home data</h4>
                <form className="form-group" onSubmit={handleSubmit}>
                    <Select
                        id="user"
                        name="user"
                        onChange={userSelect}
                        onBlur={handleBlur}
                        options={users}
                    />
                    {touched.user && errors.user && <div className="requirement"> {errors.user}</div> || <br/>}
                    <br/>
                    <input
                        className="form-control form-control-lgform-control form-control-sm"
                        id="location"
                        name="location"
                        type="text"
                        placeholder="Location"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.location}
                    />
                    {touched.location && errors.location && <div className="requirement"> {errors.location}</div> || <br/>}
                    <br />
                    <input
                        className="form-control form-control-lgform-control form-control-sm"
                        id="landSqm"
                        name="landSqm"
                        type="text"
                        placeholder="Land sqm"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.landSqm}
                    />
                    {touched.landSqm && errors.landSqm && <div className="requirement"> {errors.landSqm}</div> || <br/>}
                    <br />
                    <input
                        className="form-control form-control-lgform-control form-control-sm"
                        id="placeSqm"
                        name="placeSqm"
                        type="text"
                        placeholder="Place sqm"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.placeSqm}
                    />
                    {touched.placeSqm && errors.placeSqm && <div className="requirement"> {errors.placeSqm}</div> || <br/>}
                    <br />
                    <Select
                        id="bedrooms"
                        name="bedrooms"
                        onChange={bedroomSelect}
                        onBlur={handleBlur}
                        options={bedrooms}
                    />
                    {touched.bedrooms && errors.bedrooms && <div className="requirement"> {errors.bedrooms}</div> || <br/>}
                    <br />
                    <button className="btn btn-warning" type="submit">CONFIRM CHANGES</button>
                </form>
            </Modal>
        </>
    );
}

export default EditUser;