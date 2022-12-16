import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './components/Loader'



function App() {
  const [count, setCount] = useState(0)

  let isLoading = false

  return (
    <div className="App">
      <Loader></Loader>
      
      <h1>Titulo principal</h1>
      
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem dolore beatae accusamus dicta voluptatum quo modi alias. Cupiditate cumque vitae dolore hic! Sed et facere placeat magnam quam fugiat inventore dolore doloremque enim fugit? Delectus possimus accusamus iusto saepe expedita. Tempore quidem dolorem officiis, dicta error voluptates ex quis eius dolor necessitatibus asperiores quos ducimus qui quam voluptate reiciendis culpa? Vel voluptate, maiores distinctio laudantium repudiandae explicabo dolorum asperiores quasi delectus accusamus quo culpa odit, praesentium sunt ullam nihil. Sed aliquid consectetur recusandae libero ratione quas, reprehenderit quae maxime mollitia corporis voluptatem sequi, cumque aperiam voluptas ab ullam itaque?</p>

    

      
        
    </div>
  )
}

export default App
