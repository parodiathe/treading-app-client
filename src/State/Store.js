import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import authReducer from "@/State/Auth/Reducer.js";
import {thunk} from "redux-thunk";
import coinReducer from "@/State/Coin/Reducer.js";
import walletReducer from "@/State/Wallet/Reducer.js";
import withdrawalReducer from "@/State/Withdrawal/Reducer.js";
import orderReducer from "@/State/Order/Reducer.js";
import assetReducer from "@/State/Asset/Reducer.js";
import watchlistReducer from "@/State/Watchlist/Reducer.js";

const rootReducer = combineReducers({
    auth:authReducer,
    coin:coinReducer,
    wallet:walletReducer,
    withdrawal: withdrawalReducer,
    order: orderReducer,
    asset: assetReducer,
    watchlist: watchlistReducer,

});


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));