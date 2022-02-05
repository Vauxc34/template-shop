import { publicRequest } from "../RequestMethod"
import { loginFailure, loginStart, loginSucces } from "./UserSlice"

export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try{
        const res = await publicRequest.post('/auth/login', user)

        dispatch(loginSucces(res.data))

    } catch(err) {
        dispatch(loginFailure())
    }
} 