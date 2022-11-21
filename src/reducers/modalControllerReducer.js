import { createSlice } from "@reduxjs/toolkit"
import { date } from "../helpers/date";
import { registerPaymentsLogsMMKV } from "../utils/mmvk";

const initialState = {
    visiblitiy: false,
    content: null,
    status: true,
    screen: null,
    origin: null,
    organization: null,
    refresh: true,
    history: [],
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

                state.history = [{
                    day: `${dateInfo.day} ${dateInfo.month}`,
                    time: `${dateInfo.hours}:${dateInfo.minut}`,
                    amount: content.amount,
                    organization: content.organization,
                    group: content.group,
                    image: content.image,
                    isoTime: new Date().toLocaleDateString(),
                }, ...state.history];

                registerPaymentsLogsMMKV({
                    day: `${dateInfo.day} ${dateInfo.month}`,
                    time: `${dateInfo.hours}:${dateInfo.minut}`,
                    amount: content.amount,
                    organization: content.organization,
                    group: content.group,
                    image: content.image,
                    isoTime: new Date().toLocaleDateString(),
                })


            }
        },
        addHistory: (state, action) => {
            state.history = [...action?.payload, ...state?.history];
        },
        clearHistory: (state) => {
            state.history = [];
        }
    }
})

export const { modalVisiblityController, setModalContent, addHistory, clearHistory } = modalControllerReducer.actions
export default modalControllerReducer.reducer