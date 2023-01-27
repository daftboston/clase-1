
import './App.css'
import {HashRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home';

function App() {

  return (
  
 
   <HashRouter>
      <div className='App'>
        <h2>deli

        </h2>
         <Routes>
            <Route path='/' element= {<Home/>}>
              
            </Route>
         </Routes>

      </div>
   </HashRouter>
 
  
  
  )
}

export default App;
