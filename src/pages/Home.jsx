import {Link, useNavigate} from 'react-router-dom'
import {usestate} from 'react'
const Home = () => {
const navigate = useNavigate ()

const redirect = () => {
    navigate("/about")
}}

const handleSubmit = (e) => {e.prevendDefault()
const value = e.target [0].value
if (value === "contraseña"){
    navigate ("/team")
} else {
    alert ("contraseña incorrecta")
}

    return (
        <div className="home">
             <h2>Pagina principal</h2>
              <Link to = "/team">Equipo</Link>
            <form onSubmit={(e)=> handleSubmit (e)}>
                <input type="password" />
                <button type='submit'>enviar</button>
            </form>

        </div>
    )
}

export default Home