import api from "@/config/api.js";
import {
    ADD_PAYMENT_DETAILS_FAILURE,
    ADD_PAYMENT_DETAILS_REQUEST,
    ADD_PAYMENT_DETAILS_SUCCESS,
    GET_PAYMENT_DETAILS_FAILURE,
    GET_PAYMENT_DETAILS_REQUEST,
    GET_PAYMENT_DETAILS_SUCCESS,
    GET_WITHDRAWAL_HISTORY_FAILURE,
    GET_WITHDRAWAL_HISTORY_REQUEST,
    GET_WITHDRAWAL_HISTORY_SUCCESS,
    GET_WITHDRAWAL_REQUEST_FAILURE,
    GET_WITHDRAWAL_REQUEST_REQUEST,
    GET_WITHDRAWAL_REQUEST_SUCCESS,
    WITHDRAWAL_PROCESSED_FAILURE,
    WITHDRAWAL_PROCESSED_REQUEST,
    WITHDRAWAL_PROCESSED_SUCCESS,
    WITHDRAWAL_REQUEST
} from "@/State/Withdrawal/ActionTypes.js";

export const withdrawalRequest = ({amount, jwt}) => async (dispatch) => {
    dispatch({type: WITHDRAWAL_REQUEST});

    try {
        const response = await api.post(`/api/withdrawal/${amount}`, null, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });

        console.log("withdrawal ---- ", response.data)
        dispatch({
            type: WITHDRAWAL_REQUEST,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: WITHDRAWAL_REQUEST,
            error: error.message,
        });
    }
};

export const processedWithdrawal = ({id, jwt, accept}) => async (dispatch) => {
    dispatch({type: WITHDRAWAL_PROCESSED_REQUEST});

    try {
        const response = await api.patch(`/api/admin/withdrawal/${id}/processed/${accept}`, null, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });

        console.log("processed withdrawal ---- ", response.data)
        dispatch({
            type: WITHDRAWAL_PROCESSED_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        console.log(error)
        dispatch({
            type: WITHDRAWAL_PROCESSED_FAILURE,
            error: error.message,
        });
    }
};

export const getWithdrawalHistory = jwt => async dispatch => {
    dispatch({type: GET_WITHDRAWAL_HISTORY_REQUEST });

    try {
        const response = await api.get(`/api/withdrawal`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });

        console.log("get withdrawal history ---- ", response.data)
        dispatch({
            type: GET_WITHDRAWAL_HISTORY_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: GET_WITHDRAWAL_HISTORY_FAILURE,
            error: error.message,
        });
    }
};

export const getAllWithdrawalRequest = jwt => async dispatch => {
    dispatch({type: GET_WITHDRAWAL_REQUEST_REQUEST});

    try {
        const response = await api.get(`/api/admin/withdrawal`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });

        console.log("get withdrawal requests ---- ", response.data)
        dispatch({
            type: GET_WITHDRAWAL_REQUEST_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        console.log("error", error)
        dispatch({
            type: GET_WITHDRAWAL_REQUEST_FAILURE,
            error: error.message,
        });
    }
};

export const addPaymentDetails = ({paymentDetails, jwt}) => async dispatch => {
    dispatch({type: ADD_PAYMENT_DETAILS_REQUEST});

    try {
        const response = await api.post(`/api/payment-details`, paymentDetails, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });

        console.log("add paymentDetails ---- ", response.data)
        dispatch({
            type: ADD_PAYMENT_DETAILS_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        console.log(error)
        dispatch({
            type: ADD_PAYMENT_DETAILS_FAILURE,
            error: error.message,
        });
    }
};

export const getPaymentDetails = ({ jwt }) => async dispatch => {
    dispatch({type: GET_PAYMENT_DETAILS_REQUEST});

    try {
        const response = await api.get(`/api/payment-details`, paymentDetails, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });

        console.log("get payment details ---- ", response.data)
        dispatch({
            type: GET_PAYMENT_DETAILS_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        console.log(error)
        dispatch({
            type: GET_PAYMENT_DETAILS_FAILURE,
            error: error.message,
        });
    }
};






