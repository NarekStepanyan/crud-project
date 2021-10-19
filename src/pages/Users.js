import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';

import "../App.css";
import {getUsers} from "../redux/actions/users";
import AddUser from "../components/user/modals/AddUser";
import EditUser from "../components/user/modals/EditUser";
import DeleteUser from "../components/user/modals/DeleteUser";

const Users = () => {

    const dispatch = useDispatch();
    const [addModalIsOpen, setAddModalIsOpen] = useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [userId, setUserId] = useState(0)
    const data = useSelector(state => state.usersReducer.getUsers.data.data);

    function openOrCloseAddModal() {
        setAddModalIsOpen(!addModalIsOpen);
    }
    function openOrCloseDeleteModal(id) {
        setUserId(id);
        setDeleteModalIsOpen(!deleteModalIsOpen);
    };
    function openOrCloseEditModal(id) {
        setUserId(id);
        setEditModalIsOpen(!editModalIsOpen);
    };

    const users = <tbody>{data.map(obj => (
        <tr key={obj.id}>
            <td>{obj.firstName}</td>
            <td>{obj.lastName}</td>
            <td>{obj.email}</td>
            <td>
                <button className="btn btn-outline-warning m-3" onClick={() => openOrCloseEditModal(obj.id)}>EDIT</button>
                <button className="btn btn-outline-danger m-3" onClick={() => openOrCloseDeleteModal(obj.id)}>DELETE</button>
            </td>
        </tr>
    ))}
    </tbody>
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => dispatch(getUsers()), []);

    return(
        <>
            <button className="btn btn-primary m-3" onClick={openOrCloseAddModal}>ADD NEW USER</button>
            <br />
            <br />
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">First name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                {users}
            </table>

            <AddUser isOpen={addModalIsOpen} toggle={openOrCloseAddModal} />
            <EditUser
                userId={userId}
                isOpen={editModalIsOpen}
                toggle={openOrCloseEditModal}
            />
            <DeleteUser
                userId={userId}
                isOpen={deleteModalIsOpen}
                toggle={openOrCloseDeleteModal}
            />
        </>
    );
}

export default Users;