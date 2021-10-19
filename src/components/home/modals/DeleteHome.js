import Modal from 'react-modal';
import {useDispatch} from 'react-redux';

import "../../../App.css";
import {deleteHome, getHomes} from "../../../redux/actions/homes";;

Modal.setAppElement('#root');

const DeleteHome = ({homeId, isOpen, toggle}) => {

    const dispatch = useDispatch();

    const deleteClick = async () => {
        await dispatch(deleteHome(homeId));
        await dispatch(getHomes());
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

export default DeleteHome;