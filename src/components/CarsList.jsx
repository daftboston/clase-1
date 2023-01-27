import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';

import { useDispatch,useSelector } from 'react-redux';
import { setCars } from '../store/slices/cars.slice';
import {getCarsThunk} from '../store/slices/cars.slice';


const CarList = () => {


const dispatch = useDispatch ()
const cars = useSelector (state => state.cars)

   useEffect ( () => {
        dispatch(getCarsThunk())
    }, []
   )

console.log(cars.brand);
    return(
        <Table striped bordered hover size="sm">
          
      <thead>
        <tr>
          <th>id</th>
          <th>brand</th>
          <th>model</th>
          <th>color</th>
          <th>year</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        {
            cars.map(cars=>(
                <tr key={cars.id}>
                    <td>{cars.id}</td>
                    <td>{cars.brand}</td>
                    <td>{cars.model}</td>
                    <td>{cars.color}</td>
                    <td>{cars.year}</td>
                    <td>{cars.price}</td>
                </tr>
            ))
        }
      </tbody>
    </Table>
    )

}

export default CarList