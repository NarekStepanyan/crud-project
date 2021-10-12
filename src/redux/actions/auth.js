import TYPES from "./types";
import {publicApi} from "../../utils/APIs/axios";
import endPoints from "../../utils/APIs/endPoints";
import {Storage} from "../../utils/classStorage";
import {findToken} from "../../server/accessTokenHelper";

export function login(data) {
    return async function (dispatch) {
        dispatch({type: TYPES.LOGIN_ADMIN_REQUEST});
        try {
            const result = await publicApi.get(endPoints.admin);
            console.log(result)
            dispatch({type: TYPES.LOGIN_ADMIN_SUCCESS, payload: true});
            const accessToken = findToken(data.email, data.password, result);
            (data.checked? Storage.set('accessToken', accessToken) : Storage.set('accessToken', accessToken, "sessionStorage"));
        } catch (e) {
            dispatch({type: TYPES.LOGIN_ADMIN_FAILURE, payload: e.response.data.statusCode});
        }
    };
}