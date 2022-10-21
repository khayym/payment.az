import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from '../../reducers/drawerReducer'
import headerMotionDeterminerReducer from '../../reducers/headerDeterminerReducer'

export const store = configureStore({
    reducer: {
        drawerController: drawerReducer,
        headerMontionIndexes: headerMotionDeterminerReducer
    },
})