import {useState} from "react";
import Modal from 'react-modal';
import {useDispatch} from 'react-redux';

import "../../../App.css";
import {deleteHome, getHomes} from "../../../redux/actions/homes";;

Modal.setAppElement('#root');

const DeleteHome = ({homeId}) => {

    const dispatch = useDispatch();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const deleteClick = async () => {
        await dispatch(deleteHome(homeId));
        await dispatch(getHomes());
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

export default DeleteHome;