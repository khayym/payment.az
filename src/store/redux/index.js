import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../../reducers/categoriesReducer'
import drawerReducer from '../../reducers/drawerReducer'
import headerMotionDeterminerReducer from '../../reducers/headerDeterminerReducer'
import modalControllerReducer from '../../reducers/modalControllerReducer'
import userReducer from '../../reducers/userReducer';
import tabControllerReducer from '../../reducers/tabControllerReducer';
// import userAddressReducer from '../../reducers/fetch-slices/userAddressSlice';

export const store = configureStore({
    reducer: {
        drawerController: drawerReducer,
        headerMonitionIndexes: headerMotionDeterminerReducer,
        modalController: modalControllerReducer,
        categories: categoriesReducer,
        user: userReducer,
        // userAddress: userAddressReducer,
        tabControllerReducer,
    },
})