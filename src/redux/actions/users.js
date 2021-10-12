import TYPES from "./types";
import {publicApi} from "../../utils/APIs/axios";
import endPoints from "../../utils/APIs/endPoints";

export function getUsers() {
    return async function (dispatch) {
        dispatch({type: TYPES.GET_USERS_REQUEST});
        try {
            const result = await publicApi.get(endPoints.users);
            dispatch({type: TYPES.GET_USERS_SUCCESS, payload: result});
        } catch (e) {
            dispatch({type: TYPES.GET_USERS_FAILURE, payload: e.response.data.statusCode});
        }
    };
}

export function addUser(data) {
    return async function (dispatch) {
        dispatch({type: TYPES.ADD_USER_REQUEST});
        try {
            const result = await publicApi.post(endPoints.users, data);
            console.log(result)
            dispatch({type: TYPES.ADD_USER_SUCCESS, payload: result});
        } catch (e) {
            dispatch({type: TYPES.ADD_USER_FAILURE, payload: e});
        }
    };
}