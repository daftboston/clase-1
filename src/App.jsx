
import './App.css'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Pokemon from './components/Pokemon'
import Rick from './components/Rick'


function App() {
  // baseUrl/endpoint?parametro=valor&parametroDos=nuevoValor
  //https://pokeapi.co/api/v2/location/{id or name}/
  //https://pokeapi.co/api/v2/ability/{id or name}/

  //const [pokemonData, setPokemonData] = useState({});
  const [rickData, setRickData] = useState({})

 /*  useEffect(() => {
    /*
      axios
      .metodo("url")
      .then( respuesta => console.log(respuesta) )
      .catch( error => console.error(error) )
    */

    // axios
    //  .get("https://pokeapi.co/api/v2/pokemon/ditto/")
     // .then((resp) => setPokemonData(resp.data))
    //  .catch((error) => console.error(error));
 // }, []);


  useEffect(()=>{
    axios
    .get("https://rickandmortyapi.com/api/character/11")
    .then(resp => setRickData(resp.data))
    .catch(error=> console.error(error));
 },[]);

  return (
    <div className="App">
      {
        /*<Pokemon data={pokemonData} />  */
      }
      
      <Rick data= {rickData}/>
    </div>
  );
}

export default App



