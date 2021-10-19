import TYPES from "./types";
import {publicApi} from "../../utils/APIs/axios";
import endPoints from "../../utils/APIs/endPoints";

export function getHomes() {
    return async function (dispatch) {
        dispatch({type: TYPES.GET_HOMES_REQUEST});
        try {
            const result = await publicApi.get(endPoints.homes);
            dispatch({type: TYPES.GET_HOMES_SUCCESS, payload: result});
        } catch (e) {
            dispatch({type: TYPES.GET_HOMES_FAILURE, payload: e});
        }
    };
}

export function getHomesByUserId(userId) {
    return async function (dispatch) {
        dispatch({type: TYPES.GET_HOMES_BYID_REQUEST});
        try {
            const result = await publicApi.get(`${endPoints.homes}?userId=${userId}`);
            dispatch({type: TYPES.GET_HOMES_BYID_SUCCESS, payload: result});
        } catch (e) {
            dispatch({type: TYPES.GET_HOMES_BYID_FAILURE, payload: e});
        }
    };
}

export function getSingleHome(id) {
    return async function (dispatch) {
        dispatch({type: TYPES.GET_SINGLE_HOME_REQUEST});
        try {
            const result = await publicApi.get(`${endPoints.homes}/${id}`);
            dispatch({type: TYPES.GET_SINGLE_HOME_SUCCESS, payload: result});
        } catch (e) {
            dispatch({type: TYPES.GET_SINGLE_HOME_FAILURE, payload: e});
        }
    };
}

export function addHome(data) {
    return async function (dispatch) {
        dispatch({type: TYPES.ADD_HOME_REQUEST});
        try {
            const result = await publicApi.post(endPoints.homes, data);
            dispatch({type: TYPES.ADD_HOME_SUCCESS, payload: result});
        } catch (e) {
            dispatch({type: TYPES.ADD_HOME_FAILURE, payload: e});
        }
    };
}

export function editHome(homeId, data) {
    return async function (dispatch) {
        dispatch({type: TYPES.EDIT_HOME_REQUEST});
        try {
            const result = await publicApi.put(`${endPoints.homes}/${homeId}`, data);
            dispatch({type: TYPES.EDIT_HOME_SUCCESS, payload: result});
        } catch (e) {
            dispatch({type: TYPES.EDIT_HOME_FAILURE, payload: e});
        }
    };
}

export function deleteHome(homeId) {
    return async function (dispatch) {
        dispatch({type: TYPES.DELETE_HOME_REQUEST});
        try {
            const result = await publicApi.delete(`${endPoints.homes}/${homeId}`);
            dispatch({type: TYPES.DELETE_HOME_SUCCESS, payload: result});
        } catch (e) {
            dispatch({type: TYPES.DELETE_HOME_FAILURE, payload: e});
        }
    };
}