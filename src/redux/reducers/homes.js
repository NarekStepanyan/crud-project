import TYPES from '../actions/types';

const initialState = {
    loading: null,
    data: null,
    error: null,
}
const homes = {
    getHomes: {...initialState, data: {data:[]}},
    addHome: {...initialState, data: {}},
    getSingleHome: {...initialState, data: {data:{}}},
    editHome: {...initialState, data: {}},
    deleteHome: {...initialState, data: {}},

}
export default function homesReducer(state = homes, action) {
    switch (action.type) {
        case TYPES.GET_HOMES_REQUEST:
            return {
                ...state,
                getHomes: {
                    ...homes.getHomes,
                    loading: true
                }
            }
        case TYPES.GET_HOMES_SUCCESS:
            return {
                ...state,
                getHomes: {
                    ...homes.getHomes,
                    loading: null,
                    data: action.payload,
                    error: null
                }
            }
        case TYPES.GET_HOMES_FAILURE:
            return {
                ...state,
                getHomes: {
                    ...homes.getHomes,
                    loading: null,
                    data: null,
                    error: action.payload
                }
            }
        case TYPES.GET_SINGLE_HOME_REQUEST:
            return {
                ...state,
                getSingleHome: {
                    ...homes.getSingleHome,
                    loading: true
                }
            }
        case TYPES.GET_SINGLE_HOME_SUCCESS:
            return {
                ...state,
                getSingleHome: {
                    ...homes.getSingleHome,
                    loading: null,
                    data: action.payload,
                    error: null
                }
            }
        case TYPES.GET_SINGLE_HOME_FAILURE:
            return {
                ...state,
                getSingleHome: {
                    ...homes.getSingleHome,
                    loading: null,
                    data: null,
                    error: action.payload
                }
            }
        case TYPES.ADD_HOME_REQUEST:
            return {
                ...state,
                addHome: {
                    ...homes.addHome,
                    loading: true
                }
            }
        case TYPES.ADD_HOME_SUCCESS:
            return {
                ...state,
                addHome: {
                    ...homes.addHome,
                    loading: null,
                    data: action.payload,
                    error: null
                }
            }
        case TYPES.ADD_HOME_FAILURE:
            return {
                ...state,
                addHome: {
                    ...homes.addHome,
                    loading: null,
                    data: null,
                    error: action.payload
                }
            }
        case TYPES.EDIT_HOME_REQUEST:
            return {
                ...state,
                editHome: {
                    ...homes.editHome,
                    loading: true
                }
            }
        case TYPES.EDIT_HOME_SUCCESS:
            return {
                ...state,
                editHome: {
                    ...homes.editHome,
                    loading: null,
                    data: action.payload,
                    error: null
                }
            }
        case TYPES.EDIT_HOME_FAILURE:
            return {
                ...state,
                editHome: {
                    ...homes.editHome,
                    loading: null,
                    data: null,
                    error: action.payload
                }
            }
        case TYPES.DELETE_HOME_REQUEST:
            return {
                ...state,
                deleteHome: {
                    ...homes.deleteHome,
                    loading: true
                }
            }
        case TYPES.DELETE_HOME_SUCCESS:
            return {
                ...state,
                deleteHome: {
                    ...homes.deleteHome,
                    loading: null,
                    data: action.payload,
                    error: null
                }
            }
        case TYPES.DELETE_HOME_FAILURE:
            return {
                ...state,
                deleteHome: {
                    ...homes.deleteHome,
                    loading: null,
                    data: null,
                    error: action.payload
                }
            }
        default:
            return state
    }
}