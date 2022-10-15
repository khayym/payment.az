import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from '../../reducers/drawerReducer'

export const store = configureStore({
    reducer: {
        drawerController: drawerReducer
    },
})