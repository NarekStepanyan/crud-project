import {useState} from "react";
import Modal from 'react-modal';
import {useDispatch} from 'react-redux';

import "../../../App.css";
import {deleteUser, getUsers} from "../../../redux/actions/users";;

Modal.setAppElement('#root');

const DeleteUser = ({userId}) => {

    const dispatch = useDispatch();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const deleteClick = async () => {
        await dispatch(deleteUser(userId));
        await dispatch(getUsers());
        setModalIsOpen(false);
    };

    function openOrCloseModal() {
        setModalIsOpen(!modalIsOpen);
    }

    return (
        <>
            <button className="btn btn-outline-danger m-3" onClick={openOrCloseModal}>DELETE</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={openOrCloseModal}
                className="deleteModal"
                contentLabel="Delete Modal"
            >
                <div>Are you sure?</div>
                <button className="btn btn-danger" onClick={openOrCloseModal}>close</button>
                <button className="btn btn-primary" onClick={deleteClick}>Delete</button>
            </Modal>
        </>
    );
}

export default DeleteUser;