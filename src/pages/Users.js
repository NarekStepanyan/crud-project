import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from "react-router-dom";

import "../App.css";
import {Paths} from "../utils/paths";
import {getUsers} from "../redux/actions/users";
import AddUser from "./AddUser";

const Users = () => {

    const history = useHistory()
    const dispatch = useDispatch();
    const [formShow, setFormShow] = useState(false);

    function hideOrShow() {
        setFormShow(!formShow);
    }
    function editClick(id) {
        history.push(`${Paths.editUser}/${id}`)
    }

    const data = useSelector(state => state.usersReducer.getUsers.data.data);
    console.log(data)
    const users = <tbody>{data.map(obj => (
        <tr key={obj.id}>
            <td>{obj.firstName}</td>
            <td>{obj.lastName}</td>
            <td>{obj.email}</td>
            <td>
                <button className="btn btn-warning m-3" onClick={() => editClick(obj.id)}>EDIT</button>
                <button className="btn btn-danger m-3">DELETE</button>
            </td>
        </tr>
    ))}
    </tbody>

    useEffect(() => {
        dispatch(getUsers());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <>
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
            <br/>
            <button onClick={hideOrShow} className="btn btn-success">
                {formShow? "HIDE FORM": "ADD NEW USER"}
            </button>
            <br/>
            <br/>
            {formShow && <AddUser/>}
        </>
    );
}

export default Users;