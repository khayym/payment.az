import { createSlice } from "@reduxjs/toolkit"
import { date } from "../helpers/date";

const initialState = {
    visiblitiy: false,
    content: null,
    status: true,
    screen: null
}

export const modalControllerReducer = createSlice({
    name: 'modalController',
    initialState,
    reducers: {
        modalVisiblityController: (state, action) => {
            state.visiblitiy = !state.visiblitiy;
        },
        setModalContent: (state, action) => {
            const dateInfo = date();
            const status = action.payload.status;
            const content = action.payload.content;
            if (status === false) {
                state.status = false;
                state.content = null;
                state.screen = null;
            }
            else {
                state.status = true;
                state.screen = action.payload.screen
                state.content = {
                    'code': [content.code, content.value],
                    'date': `${dateInfo.day} ${dateInfo.month} ${dateInfo.year}, ${dateInfo.hours}:${dateInfo.minut}`,
                    'amount': content.amount
                }
            }
        }
    }
})

export const { modalVisiblityController, setModalContent } = modalControllerReducer.actions
export default modalControllerReducer.reducer