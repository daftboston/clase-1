
import './App.css'
import {HashRouter, Routes, Route} from "react-router-dom"
import CarList from './components/CarsList';
import CarsForm from './components/CarsForm';
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';



function App() {
  
const isLoading = useSelector (state => state.isLoading)
  return (
  
 <div className='App'>
  
  {
     isLoading && (

  <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>

)
}
   <h1>TABLE

   </h1>

   <CarsForm></CarsForm>   
   <CarList></CarList>
 </div>
  
  
  )
}

export default App;
