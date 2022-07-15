import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_IN_REQUEST } from "./action";

const initialState = {
    auth: false,
    token: "",
    error: false
}

const reducer = (state = initialState, action) => {
    const { type, paylaod } = action
    switch (type) {
        case SIGN_IN_REQUEST: {
            return {
                auth: false,
                token: "",
                error: false
            }
        }

        case SIGN_IN_SUCCESS: {
            return {
                auth: true,
                token: paylaod,
                error: false
            }
        }

        case SIGN_IN_FAILURE: {
            return {
                auth: false,
                token: "",
                error: paylaod
            }
        }


        default:
            return state
    }
}
export default reducer;