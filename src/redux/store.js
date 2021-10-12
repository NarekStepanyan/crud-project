import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';

import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
    authReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;