import TYPES from '../actions/types';

const initialState = {
    loading: null,
    data: null,
    error: null,
}
const auth = {
    adminLogIn: {...initialState, data: {}},
}
export default function authReducer(state = auth, action) {
    switch (action.type) {
        case TYPES.LOGIN_ADMIN_REQUEST:
            return {
                ...state,
                adminLogIn: {
                    ...auth.adminLogIn,
                    loading: true
                }
            }
        case TYPES.LOGIN_ADMIN_SUCCESS:
            return {
                ...state,
                adminLogIn: {
                    ...auth.adminLogIn,
                    loading: null,
                    data: action.payload,
                    error: null
                }
            }
        case TYPES.LOGIN_ADMIN_FAILURE:
            return {
                ...state,
                adminLogIn: {
                    ...auth.adminLogIn,
                    loading: null,
                    data: null,
                    error: action.payload
                }
            }
        default:
            return state
    }
}