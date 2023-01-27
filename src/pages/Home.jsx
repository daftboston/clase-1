import { useSelector, useDispatch} from "react-redux";


const Home = () => {
    const  name = useSelector ((state)=> state.username)
  
    const dispatch = useDispatch ()
    // Para despachar una accion se ejecuta con dispatch (accion (argumentos))
    
    const handleSubmit = (e) => {
      e.preventDefault()
  
      console.log(e.target[0].value);
      dispatch(changeName(e.target[0].value))
    }

    return (
        <div>
            
        
  
        <h3 >on submit {name}</h3>  
        <form action="" onSubmit={(e) => handleSubmit (e)}>
        <input type="text" />
        <button>Enviar</button>
        </form> 
      </div>

    )


}

export default Home 