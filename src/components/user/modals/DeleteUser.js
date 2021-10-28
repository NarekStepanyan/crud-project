import {useEffect} from "react";
import Modal from 'react-modal';
import {useDispatch, useSelector} from 'react-redux';

import "../../../App.css";
import {deleteUser, getUsers} from "../../../redux/actions/users";
import {deleteHome, getHomes} from "../../../redux/actions/homes";

Modal.setAppElement('#root');

const DeleteUser = ({userId, isOpen, toggle}) => {

    const dispatch = useDispatch();
    const homesOfUser = useSelector(state => state.homesReducer.getHomes.data.data)

    const deleteUserHomes = async () => {
        homesOfUser.map(home => {if(home.userId === userId) return dispatch(deleteHome(home.id))});
    }

    const deleteClick = async () => {
        await dispatch(deleteUser(userId));
        await deleteUserHomes();
        await dispatch(getUsers());
        toggle();
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={toggle}
                className="deleteModal"
                contentLabel="Delete Modal"
            >
                <div>Are you sure?</div>
                <button className="btn btn-danger" onClick={toggle}>close</button>
                <button className="btn btn-primary" onClick={deleteClick}>Delete</button>
            </Modal>
        </>
    );
}

export default DeleteUser;