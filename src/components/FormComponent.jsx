import { useCallback, useState } from "react"

const FormComponent = () => {

    const [inputName, setInputName] = useState ("micachu")
  
    return (

        <form>
            <div>
                <label htmlFor="input-name">etiqueta</label>
                <input type="text" id= "input-name" 
                placeholder="esto es un placeholder"
                onChange = {(e) => setInputName(e.target.value)}
                value = {inputName}
                />             
             </div>

             <button type="submit">enviar</button>
        </form>


    )
   
}



 export default FormComponent