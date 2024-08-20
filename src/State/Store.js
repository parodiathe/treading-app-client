import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import authReducer from "@/State/Auth/Reducer.js";
import {thunk} from "redux-thunk";
import coinReducer from "@/State/Coin/Reducer.js";
import walletReducer from "@/State/Wallet/Reducer.js";

const rootReducer = combineReducers({
    auth:authReducer,
    coin:coinReducer,
    wallet:walletReducer
});


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));