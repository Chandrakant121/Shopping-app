import * as types from "./actionTypes"
import Axios from "axios"

const fetchDataRequest = (payload) => {
    return {
        type: types.FETCH_DATA_REQUEST,
        payload
    }
}
const fetchDataSuccess = (payload) => {
    return {
        type: types.FETCH_DATA_SUCCESS,
        payload
    }
}
const fetchDataFailure = (payload) => {
    return {
        type: types.FETCH_DATA_FAILURE,
        payload
    }
}

const fetchData = (payload) => {
    return (dispatch) => {
        dispatch(fetchDataRequest())
        Axios.get("/products", { params: { ...payload } })
            .then((res) => { return dispatch(fetchDataSuccess(res.data)) })
            .catch((err) => { return dispatch(fetchDataFailure(err.data)) })
    }

}

//========================

const getSingleProductRequest = (payload) => {
    return {
        type: types.GET_SINGLE_PRODUCT_REQUEST,
        payload
    }
}
const getSingleProductSuccess = (payload) => {
    return {
        type: types.GET_SINGLE_PRODUCT_SUCCESS,
        payload
    }
}
const getSingleProductFailure = (payload) => {
    return {
        type: types.GET_SINGLE_PRODUCT_FAILURE,
        payload
    }
}


const getSingleProduct = (id) => (dispatch) => {
    dispatch(getSingleProductRequest())
    Axios.get(`/products/${id}`).then((req) => { return dispatch(getSingleProductSuccess(req.data)) })
        .catch((err) => { return dispatch(getSingleProductFailure(err.data)) })

}




export { fetchData, getSingleProduct }