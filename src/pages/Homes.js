import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';

import "../App.css";
import {getHomes} from "../redux/actions/homes";
import AddHome from "../components/home/modals/AddHome";
import EditHome from "../components/home/modals/EditHome";
import DeleteHome from "../components/home/modals/DeleteHome";

const Homes = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.homesReducer.getHomes.data.data);

    const homes = <tbody>{data.map(obj => (
        <tr key={obj.id}>
            <td>{obj.user}</td>
            <td>{obj.location}</td>
            <td>{obj.landSqm}</td>
            <td>{obj.placeSqm}</td>
            <td>{obj.bedrooms}</td>
            <td>
                <EditHome homeId={obj.id} />
                <DeleteHome homeId={obj.id} />
            </td>
        </tr>
    ))}
    </tbody>
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => dispatch(getHomes()), []);

    return(
        <>
            <AddHome />
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