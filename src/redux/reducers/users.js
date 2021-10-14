import TYPES from '../actions/types';

const initialState = {
    loading: null,
    data: null,
    error: null,
}
const users = {
    getUsers: {...initialState, data: {data:[]}},
    addUser: {...initialState, data: {}},
    getSingleUser: {...initialState, data: {data:{}}},
    editUser: {...initialState, data: {}},
    deleteUser: {...initialState, data: {}},

}
export default function usersReducer(state = users, action) {
    switch (action.type) {
        case TYPES.GET_USERS_REQUEST:
            return {
                ...state,
                getUsers: {
                    ...users.getUsers,
                    loading: true
                }
            }
        case TYPES.GET_USERS_SUCCESS:
            return {
                ...state,
                getUsers: {
                    ...users.getUsers,
                    loading: null,
                    data: action.payload,
                    error: null
                }
            }
        case TYPES.GET_USERS_FAILURE:
            return {
                ...state,
                getUsers: {
                    ...users.getUsers,
                    loading: null,
                    data: null,
                    error: action.payload
                }
            }
        case TYPES.GET_SINGLE_USER_REQUEST:
            return {
                ...state,
                getSingleUser: {
                    ...users.getSingleUser,
                    loading: true
                }
            }
        case TYPES.GET_SINGLE_USER_SUCCESS:
            return {
                ...state,
                getSingleUser: {
                    ...users.getSingleUser,
                    loading: null,
                    data: action.payload,
                    error: null
                }
            }
        case TYPES.GET_SINGLE_USER_FAILURE:
            return {
                ...state,
                getSingleUser: {
                    ...users.getSingleUser,
                    loading: null,
                    data: null,
                    error: action.payload
                }
            }
        case TYPES.ADD_USER_REQUEST:
            return {
                ...state,
                addUser: {
                    ...users.addUser,
                    loading: true
                }
            }
        case TYPES.ADD_USER_SUCCESS:
            return {
                ...state,
                addUser: {
                    ...users.addUser,
                    loading: null,
                    data: action.payload,
                    error: null
                }
            }
        case TYPES.ADD_USER_FAILURE:
            return {
                ...state,
                addUser: {
                    ...users.addUser,
                    loading: null,
                    data: null,
                    error: action.payload
                }
            }
        case TYPES.EDIT_USER_REQUEST:
            return {
                ...state,
                editUser: {
                    ...users.editUser,
                    loading: true
                }
            }
        case TYPES.EDIT_USER_SUCCESS:
            return {
                ...state,
                editUser: {
                    ...users.editUser,
                    loading: null,
                    data: action.payload,
                    error: null
                }
            }
        case TYPES.EDIT_USER_FAILURE:
            return {
                ...state,
                editUser: {
                    ...users.editUser,
                    loading: null,
                    data: null,
                    error: action.payload
                }
            }
        case TYPES.DELETE_USER_REQUEST:
            return {
                ...state,
                deleteUser: {
                    ...users.deleteUser,
                    loading: true
                }
            }
        case TYPES.DELETE_USER_SUCCESS:
            return {
                ...state,
                deleteUser: {
                    ...users.deleteUser,
                    loading: null,
                    data: action.payload,
                    error: null
                }
            }
        case TYPES.DELETE_USER_FAILURE:
            return {
                ...state,
                deleteUser: {
                    ...users.deleteUser,
                    loading: null,
                    data: null,
                    error: action.payload
                }
            }
        default:
            return state
    }
}