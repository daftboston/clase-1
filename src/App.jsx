import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'



function App() {
  /* 
  if (100>200) {
     return (
      <div className='App'>
        <h1>La condicion se cumplio</h1>
      </div>
     )
    
  } else {
    return(
    <div className='App'>
        <h1>La condicion NO se cumple</h1>
    </div>)
  } 
  */



return (
  <div className='App'>
    {
      /*dentro del jsx solo funciona el: Operador tenario, y operadores corto circuito*/

      /*condicion ? se devuelve si la condicion se cumbple : si la condicion no se cumple 
      
      TRUTHYS--> Se comportan como boleanos true

      []-->arreglos vacios

      {}--> objetos vacios

      -200 --> numeros negativos

      "False"--> la palabra false

      " "--> cadena de texto que tenga vacios




      FALSIES--> Se comportan como boleanos false
      ""-->cadena de texto sin vacios
      undefined

      null

      NaN

      0

      False
      
      */
      }
      {
        100!==200 ? <h1>  la condicion se cumple</h1> : <h1> la condicion no se cumple</h1>
      }
    

    
  </div>
)
    }

export default App
