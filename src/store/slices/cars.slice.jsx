import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import { setIsLoading } from './isLoading.slice';
export const carsSlice = createSlice({
    name: 'cars',
    initialState: [],
    reducers: {
         setCars : (state, action) => {
            const cars = action.payload

            return cars

         }
    }
})

export const getCarsThunk = () => ( dispatch ) => {

    dispatch (setIsLoading(true))

    axios
    .get("https://cars-crud.academlo.tech/cars/" )
    .then( resp => dispatch( setCars(resp.data) ) )
    .catch( error => console.error( error ) )
    .finally (()=> dispatch (setIsLoading(false)))

}

export const createCarsThunk = (data) => (dispatch) => {
    dispatch (setIsLoading(true))
    axios
    .post ("https://cars-crud.academlo.tech/cars/", data)
    .then (()=>console.error(error))
    .finally ( ()=> dispatch ( setIsLoading(false) ) )
}


export const {setCars} = carsSlice.actions;

export default carsSlice.reducer;
