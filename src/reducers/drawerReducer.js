import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    drawerStatus: false,
}

export const drawerReducer = createSlice({
    name: 'drawerReducer',
    initialState,
    reducers: {
        setDrawerStatus: (state, action) => {
            state.drawer = action.payload
        }
    }
})

export const { setDrawerStatus } = drawerReducer.actions
export default drawerReducer.reducer