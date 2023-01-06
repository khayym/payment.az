import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userData: null,
    login: false,
    verify: false,
    pin: null
}

export const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload
        },
        setLogin: (state, action) => {
            state.login = action.payload;;
        },
        verifyPin: (state, action) => {
            state.verify = action.payload;
            console.log('verifyPin to store :', state.verify);
        },
        setPin: (state, action) => {
            state.pin += action.payload;
            console.log('pin set to store :', state.pin);
        }
    }
})

export const { setUserData, setLogin, verifyPin, setPin } = userReducer.actions
export default userReducer.reducer