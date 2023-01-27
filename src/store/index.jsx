import { configureStore } from '@reduxjs/toolkit'
import carsSlice from './slices/cars.slice'
import isLoadingSlice from './slices/isLoading.slice'


export default configureStore({
    reducer: {
        cars : carsSlice,
        isLoading: isLoadingSlice
    }
})
