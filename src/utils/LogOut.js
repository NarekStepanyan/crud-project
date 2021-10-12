import { useHistory } from "react-router-dom";

import {Paths} from "../utils/paths";
import {Storage} from "./classStorage";

const LogOut = () => {
    const history = useHistory()

    const handleClick = () => {
        Storage.clear();
        history.push(Paths.logIn);
    }

    return(
        <button className="btn btn-danger m-3" onClick={handleClick}>
            Log Out
        </button>
    );
}

export default LogOut;