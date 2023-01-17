
import { useState } from "react";
import './App.css'

import {HashRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";
import Team from "./pages/Team";
import TeamDetail from "./pages/TeamDetail"




function App() {


  return (
    
      <HashRouter>
        <div className="App">
        <nav>
          <ul>
            <li>
              <Link to= "/"> home</Link>
            </li>
            <li>
              <Link to= "/team"> team</Link>
            </li>
            <li>
              <Link to= "/projects"> projects</Link>
            </li>
          </ul>
          
          SOY UNA NAV</nav>
         <Routes>

          {/* <Route path= "url"
           element={  <Page/>}/> */}
          
             <Route 
             path= "/"
            element={<Home/>}
             />

           <Route 
             path= "/team"
              element={<Team/>}
             />
             <Route 
             path= "/technologies"
              element={<Technologies/>}
             />
             <Route path= "/projects"
             element={<Projects/>}
             />

             <Route
             path= "/team/:name"
             element = {<TeamDetail/>}
             />            
              
         </Routes>
         </div>
      </HashRouter>
    
   
  );
}

export default App;
