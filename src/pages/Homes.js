import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';

import "../App.css";
import {getUsers} from "../redux/actions/users";
import AddUser from "../components/user/modals/AddUser";
import EditUser from "../components/user/modals/EditUser";
import DeleteUser from "../components/user/modals/DeleteUser";

const Homes = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.usersReducer.getUsers.data.data);

    const homes = <tbody>{data.map(obj => (
        <tr key={obj.id}>
            <td>{obj.firstName}</td>
            <td>{obj.lastName}</td>
            <td>{obj.email}</td>
            <td>
                <EditUser userId={obj.id} />
                <DeleteUser userId={obj.id} />
            </td>
        </tr>
    ))}
    </tbody>
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => dispatch(getUsers()), []);

    return(
        <>
            <AddUser />
            <br />
            <br />
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">User</th>
                    <th scope="col">Location</th>
                    <th scope="col">Land sqm</th>
                    <th scope="col">Place sqm</th>
                    <th scope="col">Bedrooms number</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                {homes}
            </table>
        </>
    );
}

export default Homes;