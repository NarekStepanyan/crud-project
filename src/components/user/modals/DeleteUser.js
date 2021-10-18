import Modal from 'react-modal';
import {useDispatch} from 'react-redux';

import "../../../App.css";
import {deleteUser, getUsers} from "../../../redux/actions/users";;

Modal.setAppElement('#root');

const DeleteUser = ({userId, isOpen, toggle}) => {

    const dispatch = useDispatch();

    const deleteClick = async () => {
        await dispatch(deleteUser(userId));
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