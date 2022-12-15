import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'



function App() {
  const numersArray = [10,20,30]
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

      /*OPERADOR TERNARIO-->condicion ? se devuelve si la condicion se cumbple : si la condicion no se cumple 
        OPERADOR CORTO CIRCUITO-->  &&-->AND    ||--OR
        TRUE && TRUE --> TRUE
        TRUE || FALSE --> TRUE

        Operdor  de corto cicuito && (and)
        devuelve el primer dato falsy que se encuentra de izq a der
        Niguno de los datos es falsy, devuelve el de la derecha o el ultimo
        NULL && 100 --> FALSE

      
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

      {
        numersArray.length > 0 && <h2> {numersArray[0]} </h2>
      }  
        
  </div>
)
    }

export default App
