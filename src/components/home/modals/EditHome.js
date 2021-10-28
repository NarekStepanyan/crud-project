import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-modal';

import "../../../App.css";
import {editHome, getSingleHome, getHomes} from "../../../redux/actions/homes";
import {editHomeValidationSchema} from "../../../utils/schemas";
import Select from "react-select";
import {bedrooms} from "../../../utils/bedrooms";
import {useEffect} from "react";

Modal.setAppElement('#root');

const EditHome = ({homeId, isOpen, toggle}) => {

    const dispatch = useDispatch();
    const homeCurrentData = useSelector(state => state.homesReducer.getSingleHome.data.data);
    const usersData = useSelector(state => state.usersReducer.getUsers.data.data);

    const users = usersData.map(user => ({value: user.id, label: `${user.firstName}  ${user.lastName}`}))

    const formikSubmit = async () => {
        await dispatch(editHome(homeId, values));
        await dispatch(getHomes());
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
        initialValues: homeCurrentData,
        enableReinitialize: true,
        validationSchema: editHomeValidationSchema,
        onSubmit: formikSubmit
    });

    function userSelect(event) {
        values.user = event.label;
    }
    function bedroomSelect(event) {
        values.bedrooms = event.value;
    }

    const closeHandle = () => {
        resetForm();
        toggle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => (isOpen && homeId)? dispatch(getSingleHome(homeId)): null,[isOpen])

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

                <h4>Edit home data</h4>
                <form className="form-group" onSubmit={handleSubmit}>
                    <Select
                        id="user"
                        name="user"
                        onChange={userSelect}
                        onBlur={handleBlur}
                        options={users}
                        placeholder="User"
                    />
                    {touched.user && errors.user && <div className="requirement"> {errors.user}</div>}
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
                    {touched.location && errors.location && <div className="requirement"> {errors.location}</div>}
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
                    {touched.landSqm && errors.landSqm && <div className="requirement"> {errors.landSqm}</div>}
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
                    {touched.placeSqm && errors.placeSqm && <div className="requirement"> {errors.placeSqm}</div>}
                    <br />
                    <Select
                        id="bedrooms"
                        name="bedrooms"
                        onChange={bedroomSelect}
                        onBlur={handleBlur}
                        options={bedrooms}
                        placeholder="Bedrooms"
                    />
                    {touched.bedrooms && errors.bedrooms && <div className="requirement"> {errors.bedrooms}</div>}
                    <br />
                    <button className="btn btn-warning" type="submit">CONFIRM CHANGES</button>
                </form>
            </Modal>
        </>
    );
}

export default EditHome;