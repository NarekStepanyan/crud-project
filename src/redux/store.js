import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';

import authReducer from "./reducers/auth";
import usersReducer from "./reducers/users";

const rootReducer = combineReducers({
    authReducer,
    usersReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;