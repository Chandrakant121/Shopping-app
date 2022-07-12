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
        Axios.get("/products")
            .then((res) => { return dispatch(fetchDataSuccess(res.data)) })
            .catch((err) => { return dispatch(fetchDataFailure(err.data)) })
    }

}
export { fetchData }