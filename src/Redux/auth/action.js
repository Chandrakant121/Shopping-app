import Axios from "axios"
export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST"
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS"
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE"

const signInRequest = () => {
    return {
        type: SIGN_IN_REQUEST,
    }
}
const signInSuccess = (payload) => {
    return {
        type: SIGN_IN_SUCCESS,
        payload
    }
}
const signInFailure = (payload) => {
    return {
        type: SIGN_IN_FAILURE,
        payload
    }
}

const signIn = (payload) => (dispatch) => {
    dispatch(signInRequest())
    Axios.post("/api/login", payload, { baseURL: "https://reqres.in" })
        .then((res) => { return dispatch(signInSuccess(res.data)) })
        .catch((err) => { return dispatch(signInFailure(err.data)) })
}
export { signIn }