import { useState } from "react"

const FormComponent = () => {

    const [ inputName, setInputName ] = useState("Fulanito")
    const [ inputEmail, setInputEmail ] = useState("")
    const [ inputAge, setInputAge ] = useState(18)
    const [ inputLastName, setInputLastName ] = useState()
    const [ inputUserName, setInputUserName ] = useState()
    const [inputPassword, setInputPassword] = useState()

    /*
        Añadir dentro del mismo formulario un nuevo input ahora para un correo electronico
    */

        const handleFormSubmit = (e) => {
            e.preventDefault()

            const data = {
                name : inputName,
                email: inputEmail
            }

            if( inputAge >= 18 ){
                console.log(data)
            }else{
                alert("Eres demasiado joven!")
            }
            

        }

        const validateAge = ( age ) => {
            setInputAge( Number(age) )
        }

    return (
        <form onSubmit={e => handleFormSubmit(e)}>
            <div>
               <label htmlFor="input-name">Nombre</label> 
               <input 
               type="text" 
               id="input-name"
               placeholder="Esto es un placeholder"
               onChange={ (e) => setInputName(e.target.value) }
               value={ inputName }
               />
            </div>
            <div>
                <label htmlFor="input-email">Correo</label>
                <input 
                type="email"
                id="input-email"
                placeholder="correo@com"
                value={inputEmail}
                onChange={ e => setInputEmail( e.target.value ) }
                required
                />
            </div>
            <div>
                <label htmlFor="input-age">edad</label>
                <input 
                type="number"
                id="input-age"
                placeholder="Ingresa tu edad"
                value={ inputAge }
                onChange={ e => validateAge(e.target.value) }
                />
                { inputAge < 18 && <small>Debes de ser mayor de 18 años</small> }
            </div>
            <div>
               <label htmlFor="input-username">Username</label> 
               <input 
               type="text" 
               id="input-username"
               placeholder="UserName"
               onChange={ (e) => setInputUserName(e.target.value) }
               value={ inputUserName }
               />
            </div>
            <div>
                <label htmlFor="input-password">Password</label>
                <input 
                type="text"
                id="input-password"
                placeholder="Ingresa contraseña"
                value={ inputPassword }
                onChange={ e => setInputPassword(e.target.value) }        

                />
                  {inputPassword.length < 6 && <small>minimo 6</small> }
                
            </div>

            
            <button type="submit"
            disabled={ inputAge <= 18 }
            >Enviar</button>
        </form>

    )
   
}



 export default FormComponent

 /*
  Generar un formulario de registro
  Deberá contener los siguientes campos:
    Nombre Completo
    Correo
    UserName
    Contraseña


    Todos los campos son requeridos
    La contraseña debe de tener al menos 6 caracteres. Si es mas corta se lanzara un alert con mensajje de error al intentar enviar el formulario

    Al final, al enviar el formulario se mostrara un console.log con el objeto generado
  */