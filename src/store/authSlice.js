import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    currentUser: JSON.parse(localStorage.getItem("user")) || null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.currentUser = action.payload
        }
    }
})
export const {logIn} = authSlice.actions
export default authSlice