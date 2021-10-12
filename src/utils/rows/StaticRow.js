import React from "react";

const StaticRow = ({user}) => {
    return(
        <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>
                <button className="btn btn-warning m-3">EDIT</button>
                <button className="btn btn-danger m-3">DELETE</button>
            </td>
        </tr>
    );
}

export default StaticRow;