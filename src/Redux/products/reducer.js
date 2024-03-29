import * as types from "./actionTypes"

const initialState = {
    products: [],
    error: "",
    currentProduct: {},
    cart: [],
    loading: false,
    orders: []
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case types.FETCH_DATA_REQUEST:
            return {
                ...state,
                error: "",
                loading: true
            }

        case types.FETCH_DATA_SUCCESS:
            return {
                ...state,
                products: payload,
                error: "",
                loading: false
            }

        case types.FETCH_DATA_FAILURE:
            return {
                ...state,
                error: payload,
                loading: false
            }

        //=============Single Product==============
        case types.GET_SINGLE_PRODUCT_REQUEST:
            return {
                ...state,
                error: "",
                loading: true
            }

        case types.GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                error: "",
                currentProduct: payload,
                loading: false
            }

        case types.GET_SINGLE_PRODUCT_FAILURE:
            return {
                ...state,
                error: payload,
                loading: false
            }

        // Cart
        case types.ADD_PRODUCT_CART__REQUEST:
            return {
                ...state,
                error: "",
                loading: true
            }

        case types.ADD_PRODUCT_CART__SUCCESS:
            return {
                ...state,
                error: "",
                cart: [...state.cart, payload],
                loading: false
            }

        case types.ADD_PRODUCT_CART__FAILURE:
            return {
                ...state,
                error: payload,
                loading: false
            }

        // Counter show in cart Icon

        case types.FETCH_CART_REQUEST:
            return {
                ...state,
                error: "",
                loading: true
            }

        case types.FETCH_CART_SUCCESS:
            return {
                ...state,
                error: "",
                cart: [...payload],
                loading: false
            }

        case types.FETCH_DATA_FAILURE:
            return {
                ...state,
                error: payload,
                loading: false
            }

        // Delete product from cart
        case types.REMOVE_PRODUCT_CART_REQUEST:
            return {
                ...state,
                error: "",
                loading: true
            }

        case types.REMOVE_PRODUCT_CART_FAILURE:
            return {
                ...state,
                error: payload,
                loading: false
            }
        // Orders page
        case types.FETCH_ORDERS_REQUEST:
            return {
                ...state,
                error: "",
                loading: true
            }

        case types.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                error: "",
                orders: [...payload],
                loading: false
            }

        case types.FETCH_ORDERS_FAILURE:
            return {
                ...state,
                error: payload,
                loading: false
            }

        default:
            return state
    }
}

export default reducer;