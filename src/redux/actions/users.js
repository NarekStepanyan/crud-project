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

export function getSingleUser(id) {
    return async function (dispatch) {
        dispatch({type: TYPES.GET_SINGLE_USER_REQUEST});
        try {
            const result = await publicApi.get(`${endPoints.users}/${id}`);
            dispatch({type: TYPES.GET_SINGLE_USER_SUCCESS, payload: result});
        } catch (e) {
            dispatch({type: TYPES.GET_SINGLE_USER_FAILURE, payload: e});
        }
    };
}

export function addUser(data) {
    return async function (dispatch) {
        dispatch({type: TYPES.ADD_USER_REQUEST});
        try {
            const result = await publicApi.post(endPoints.users, data);
            dispatch({type: TYPES.ADD_USER_SUCCESS, payload: result});
        } catch (e) {
            dispatch({type: TYPES.ADD_USER_FAILURE, payload: e});
        }
    };
}

export function editUser(userId, data) {
    return async function (dispatch) {
        dispatch({type: TYPES.EDIT_USER_REQUEST});
        try {
            const result = await publicApi.put(`${endPoints.users}/${userId}`, data);
            dispatch({type: TYPES.EDIT_USER_SUCCESS, payload: result});
        } catch (e) {
            dispatch({type: TYPES.EDIT_USER_FAILURE, payload: e});
        }
    };
}

export function deleteUser(userId) {
    return async function (dispatch) {
        dispatch({type: TYPES.DELETE_USER_REQUEST});
        try {
            const result = await publicApi.delete(`${endPoints.users}/${userId}`);
            dispatch({type: TYPES.DELETE_USER_SUCCESS, payload: result});
        } catch (e) {
            dispatch({type: TYPES.DELETE_USER_FAILURE, payload: e});
        }
    };
}