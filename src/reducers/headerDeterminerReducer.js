import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    MobileOperators: {
        index: 0,
        state: null,
        number: null
    },
    BalanceRouter: {
        index: 0,
        state: null,
        number: null,
    },
    UserInfoScreen: {
        index: 0,
        state: null,
        number: null
    },
    UserSecurityScreen: {
        index: 0,
        state: null,
        number: null
    },
    AppInfoScreen: {
        index: 0,
        state: null,
        number: null
    },
    PolicyScreen: {
        index: 0,
        state: null,
        number: null
    },
    ConsumerPayments: {
        index: 0,
        state: null,
        number: null
    }
}

export const headerMotionDeterminerReducer = createSlice({
    initialState,
    name: 'headerMotionDeterminerReducer',
    reducers: {
        setMonitionDeterminer: (state, action) => {
            state[action.payload.screen].index = action.payload.value < 0 ? 0 : action.payload.value
            state[action.payload.screen].state = action.payload.state
            state[action.payload.screen].number = action.payload.number
        }
    }
})

export const { setMonitionDeterminer } = headerMotionDeterminerReducer.actions
export default headerMotionDeterminerReducer.reducer 