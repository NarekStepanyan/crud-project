import TYPES from "./types";
import {publicApi} from "../../utils/APIs/axios";
import endPoints from "../../utils/APIs/endPoints";
import {Storage} from "../../utils/classStorage";

export function login(data) {
    return async function (dispatch) {
        dispatch({type: TYPES.LOGIN_ADMIN_REQUEST});
        try {
            const res = await publicApi.post(endPoints.admin, data);
            console.log(res)
            dispatch({type: TYPES.LOGIN_ADMIN_SUCCESS, payload: true});
            (data.checked? Storage.set('accessToken', res.data.accessToken) : Storage.set('accessToken', res.data.accessToken, "sessionStorage"))
        } catch (e) {
            dispatch({type: TYPES.LOGIN_ADMIN_FAILURE, payload: e.response.data.statusCode});
        }
    };
}