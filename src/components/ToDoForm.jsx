import {useForm} from 'react-hook-form'

const ToDoForm = () => {

    const {register, handleSubmit, formState:{errors}} = useForm ()
    // register va a tener informacion del input y 
    // handleSubmit es la funcion que se ejecutara en el submit

const getFormData = data => {
    console.log(data);
}

    return (
     <div>
        <form onSubmit={handleSubmit(getFormData)}>
            <div className='input-wrapper'>
                <h2>NUEVA TAREA</h2>
                <label htmlFor="user-name">Titulo</label>
                <input type="text" id="title"
                {...register("title",{
                    required : true
                })}
                />
                {errors.title?.type=="required"}
                <span> { errors.title?.type}</span>

            </div>
            <div className='input-wrapper'>
                <label htmlFor="description">Descripción</label>
                <input type="email"
                id = "description"
                {...register("description")} />

            </div>

        
            <div>
                <label htmlFor="user-vaccinated">Completada</label>
                <input
                id="user-vaccinated" type="checkbox"{...register("isVaccinated")} />

            </div>


            <button type="submit">Enviar</button>
        </form>
     </div>
     )
}

export default ToDoForm