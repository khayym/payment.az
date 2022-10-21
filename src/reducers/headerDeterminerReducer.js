import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    MobileOperators: {
        index: 0,
        state: null
    }
}

export const headerMotionDeterminerReducer = createSlice({
    initialState,
    name: 'headerMontionDeterminer',
    reducers: {
        setMontionDeterminer: (state, action) => {
            state[action.payload.screen].index = action.payload.value < 0 ? 0 : action.payload.value
            state[action.payload.screen].state = action.payload.state
        }
    }
})

export const { setMontionDeterminer } = headerMotionDeterminerReducer.actions
export default headerMotionDeterminerReducer.reducer 