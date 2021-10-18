import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';

import "../App.css";
import {getHomes} from "../redux/actions/homes";
import AddHome from "../components/home/modals/AddHome";
import EditHome from "../components/home/modals/EditHome";
import DeleteHome from "../components/home/modals/DeleteHome";

const Homes = () => {

    const dispatch = useDispatch();
    const [addModalIsOpen, setAddModalIsOpen] = useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [homeId, setHomeId] = useState(0)
    const data = useSelector(state => state.homesReducer.getHomes.data.data);

    function openOrCloseAddModal() {
        setAddModalIsOpen(!addModalIsOpen);
    }
    function openOrCloseDeleteModal(id) {
        setHomeId(id);
        setDeleteModalIsOpen(!deleteModalIsOpen);
    };
    function openOrCloseEditModal(id) {
        setHomeId(id);
        setEditModalIsOpen(!editModalIsOpen);
    };

    const homes = <tbody>{data.map(obj => (
        <tr key={obj.id}>
            <td>{obj.user}</td>
            <td>{obj.location}</td>
            <td>{obj.landSqm}</td>
            <td>{obj.placeSqm}</td>
            <td>{obj.bedrooms}</td>
            <td>
                <button className="btn btn-outline-warning m-3" onClick={() => openOrCloseEditModal(obj.id)}>EDIT</button>
                <button className="btn btn-outline-danger m-3" onClick={() => openOrCloseDeleteModal(obj.id)}>DELETE</button>
            </td>
        </tr>
    ))}
    </tbody>
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => dispatch(getHomes()), []);

    return(
        <>
            <button className="btn btn-success m-3" onClick={openOrCloseAddModal}>ADD NEW HOME</button>

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

            <AddHome isOpen={addModalIsOpen} toggle={openOrCloseAddModal}/>
            <EditHome
                homeId={homeId}
                isOpen={editModalIsOpen}
                toggle={openOrCloseEditModal}
            />
            <DeleteHome
                homeId={homeId}
                isOpen={deleteModalIsOpen}
                toggle={openOrCloseDeleteModal}
            />
        </>
    );
}

export default Homes;