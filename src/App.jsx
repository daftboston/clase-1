import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button';
import Input from './components/Input';




function App() {
  
  const [likes, setLikes] = useState(0)
  const studentsNames = [ "Joyner", "Gabriel", "Romel", "Felipe", "Maria", "Franco", "Mercedes" ]

  const [ text, setText]= useState ("")

  const formateText =(text)=>{
    const newTest = text.toUpperCase()
    setText (newTest)
  }

 
return (
  
  <div className='App'>
    <Button buttonName="getinfo"
    liftingData={(info ) => alert (info)}/>



<h2> Likes : {likes}</h2>
    <Button buttonName="like"
    liftingData={() => setLikes (likes +1)}/>
    <Button buttonName="dislike"
    liftingData={() => setLikes (likes -1)}/>
    <Button buttonName="Re-like"
    liftingData={() => setLikes (likes +2)}/>
    <Button buttonName="getinfo"
    liftingData={(info ) => alert (info)}/>
    
    <Button buttonName="Ejercicio"
    textContent="Hola Daniel, bienvenido a tu propia clase"
    liftingData={(info)=>alert(info)}/>
    <Button buttonName="Cancelar"/>
    <div>
      <h1>contenido del input: {text}</h1>
      <Input
      getInputValue ={(data)=> formateText(data)}/>
      
      
    </div>
   
     
  </div>
  
)
    }

export default App
