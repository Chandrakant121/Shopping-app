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
    Axios.get(`/products/${id}`).then((res) => { return dispatch(getSingleProductSuccess(res.data)) })
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
        .then((res) => { return dispatch(addProductCartSuccess(res.data)) })
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
        .then((res) => { return dispatch(fetchCartSuccess(res.data)) })
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
        then((res) => { return dispatch(deleteProductCartSuccess(res.data)) })
        .then(() => dispatch(fetchCart()))
        .catch((err) => { return dispatch(deleteProductFailure(err.data)) })
}
// order 
const addOrderRequest = () => {
    return {
        type: types.ADD_OREDER_REQUEST
    }
}
const addOrderSuccess = (payload) => {
    return {
        type: types.ADD_OREDER_SUCCESS,
        payload
    }
}
const addOrderFailure = (payload) => {
    return {
        type: types.ADD_OREDER_FAILURE,
        payload
    }
}

const addOrder = (payload) => (dispatch) => {
    dispatch(addOrderRequest())
    const orderPayload = []
    for (let product of payload) {
        product && orderPayload.push(Axios.post("/orders", product))
    }
    Promise.all(orderPayload).then((res) => { return dispatch(addOrderSuccess()) })
        .then(() => dispatch(emptyCart(payload)))
        .catch((err) => { return dispatch(addOrderFailure()) })
}

// empty card after checkout

const emptyCartRequest = () => {
    return {
        type: types.EMPTY_CART_REQUEST
    }
}

const emptyCartSuccess = () => {
    return {
        type: types.EMPTY_CART_SUCCESS
    }
}

const emptyCartFailure = () => {
    return {
        type: types.EMPTY_CART_FAILURE
    }
}

const emptyCart = (payload) => (dispatch) => {
    dispatch(emptyCartRequest())
    const deleteOrders = [];
    for (let obj of payload) {
        let temp = dispatch(deleteProductCart(obj.id));
        deleteOrders.push(temp)
    }
    Promise.all(deleteOrders).then((res) => { return emptyCartSuccess() })
        .catch((err) => { return dispatch(emptyCartFailure()) })
}

export { fetchData, getSingleProduct, addProductCart, fetchCart, deleteProductCart, addOrder, emptyCart }