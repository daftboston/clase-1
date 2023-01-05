
import './App.css'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Character from './components/Character'


function App() {
  /*
  1. Instalar "axios"
  2. Importar "axios"
  3. Importar usestate y useEffect fron react. y luego el estado donde se almacenara la respuesta const [dataCharacters, setDataCharacters] = useState ( [] )
  4.UseEffect con arreglo de dependencias
  5.Ejecutar axios dentro del useEffect
  6.Guardar la respuesta de axios en el estado

  */
  const [dataCharacters, setDataCharacters] = useState([]);
  const [name, setName] = useState("rick");
  const [status, setStatus] = useState("alive")

  useEffect(() => {
    getData();
  }, [name, status]);

  const searchCharacter = (e) => {
    e.preventDefault();
    setName(e.target[0].value.toLowerCase());
  };

  

  const getData = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`)
      .then((resp) => {
        console.log(resp.data.results);
        setDataCharacters(resp.data.results);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <form onSubmit={(e) => searchCharacter(e)}>
        <input type="text" placeholder="Buscar por nombre" />
        <button type="submit">Buscar</button>
      
      </form>
      <button onClick={()=>setStatus ("dead")}>dead</button>
        <button onClick={()=>setStatus("alive")}>alive</button>
      {
        dataCharacters.length !== 0 ?
      dataCharacters.map((character, index) => (
        <Character key={`character-${index}`} data={character} />
        : <h1> no hay resultados </h1>
      ))}
    </div>
  );
}

export default App;
