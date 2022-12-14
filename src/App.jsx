import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UserCard from './components/UserCard';
import ListGroceries from './components/ListGroceries';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Mi primer proyecto de react</h1>
      {/*
      generar un pequeño contenedor /card
      titulo su nombre
      ua lista con :
      pelicula favorita
      banda favorita  */}
      <UserCard
      name = "Daniel"
      movie = "Avatar"
      band = "Stone Temple Pilots"/>
      <UserCard
      name = "jerry"
      movie = "cars"
      band = "fnaf"      
      />
      <UserCard
       name = "dely"
       movie = "bots"
       band = "toto"      
      />

      <ListGroceries
      name= "Leche"
      quant= "2"
      price= "3.00"      
      />

     <ListGroceries
      name= "Pan"
      quant= "10"
      price= "0.50"      
      />


     <ListGroceries
      name= "Huevos"
      quant= "2"
      price= "0.50"      
      />

     <ListGroceries
      name= "Queso"
      quant= "1"
      price= "3.00"      
      />

    

      
        
    </div>
  )
}

export default App
