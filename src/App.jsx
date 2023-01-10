
import './App.css'
import axios from 'axios'
import {useState, useEffect} from 'react'

import FormComponent from './components/FormComponent'
import FormUser from './components/FormUser'
import  ToDoForm from './components/ToDoForm'
import UsersList from './components/UsersList'

function App() {
  

  return (
    <div className="App">      
      <FormUser></FormUser>
      <hr />
      <ToDoForm></ToDoForm>
      <UsersList></UsersList>

       
    </div>
  );
}

export default App;
