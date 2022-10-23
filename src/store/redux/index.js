import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../../reducers/categoriesReducer'
import drawerReducer from '../../reducers/drawerReducer'
import headerMotionDeterminerReducer from '../../reducers/headerDeterminerReducer'
import modalControllerReducer from '../../reducers/modalControllerReducer'

export const store = configureStore({
    reducer: {
        drawerController: drawerReducer,
        headerMontionIndexes: headerMotionDeterminerReducer,
        modalController: modalControllerReducer,
        categories: categoriesReducer
    },
})