import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    ConsumerPayments: {
        index: [0],
        state: {},
        header: [],
    },
    AddApartment: {
        index: [0],
        state: {},
        header: [],
    }
}

export const tabControllerReducer = createSlice({
    name: 'tabControllerReducer',
    initialState,
    reducers: {
        controlTabView: (state, action) => {
            state[action.payload.screen].index.push(action.payload.index);
            state[action.payload.screen].header.push(action.payload.header);
            state[action.payload.screen].state = action.payload.state;
        },
        tabViewBackController: (state, action) => {
            state[action.payload.screen].index.pop();
            state[action.payload.screen].header.pop();
            state[action.payload.screen].state = action.payload.state;
        },
        cleanTabViewState: (state, action) => {
            state[action.payload.screen].state = null;
        },
        addTabViewState: (state, action) => {
            state[action.payload.screen].state = action.payload.state;
        },
        updateTabViewState: (state, action) => {
            state[action.payload.screen].state = { ...state[action.payload.screen].state, ...action.payload.state };
        },
    }
})

export const { controlTabView, tabViewBackController, cleanTabViewState, addTabViewState, updateTabViewState } = tabControllerReducer.actions
export default tabControllerReducer.reducer