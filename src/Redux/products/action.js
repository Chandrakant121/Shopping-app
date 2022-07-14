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

//===========================================

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

// Add to cart

const addProductCartRequest = (payload) => {
    return {
        type: types.ADD_PRODUCT_CART__REQUEST,
        payload
    }
}
const addProductCartSuccess = (payload) => {
    return {
        type: types.ADD_PRODUCT_CART__SUCCESS,
        payload
    }
}
const addProductCartFailure = (payload) => {
    return {
        type: types.ADD_PRODUCT_CART__FAILURE,
        payload
    }
}

const addProductCart = (product) => (dispatch) => {
    dispatch(addProductCartRequest())
    Axios.post("/cart", product)
        .then((req) => { return dispatch(addProductCartSuccess(req.data)) })
        .catch((err) => { return dispatch(addProductCartFailure(err.data)) })
}

// Cart fetching and counter show

const fetchCartRequest = (payload) => {
    return {
        type: types.FETCH_CART_REQUEST,
        payload
    }
}
const fetchCartSuccess = (payload) => {
    return {
        type: types.FETCH_CART_SUCCESS,
        payload
    }
}
const fetchCartFailure = (payload) => {
    return {
        type: types.FETCH_CART_FAILURE,
        payload
    }
}


const fetchCart = (payload) => (dispatch) => {
    dispatch(fetchCartRequest())
    Axios.get("/cart")
        .then((req) => { return dispatch(fetchCartSuccess(req.data)) })
        .catch((err) => { return dispatch(fetchCartFailure(err.data)) })

}

// remove from cart

const deleteProductCartRequest = (payload) => {
    return {
        type: types.REMOVE_PRODUCT_CART_REQUEST,
        payload
    }
}
const deleteProductCartSuccess = (payload) => {
    return {
        type: types.REMOVE_PRODUCT_CART_SUCCESS,
        payload
    }
}
const deleteProductFailure = (payload) => {
    return {
        type: types.REMOVE_PRODUCT_CART_FAILURE,
        payload
    }
}

const deleteProductCart = (id) => (dispatch) => {
    dispatch(deleteProductCartRequest())
    Axios.delete(`/cart/${id}`).
        then((req) => { return dispatch(deleteProductCartSuccess(req.data)) })
        .then(() => dispatch(fetchCart()))
        .catch((err) => { return dispatch(deleteProductFailure(err.data)) })
}


export { fetchData, getSingleProduct, addProductCart, fetchCart, deleteProductCart }