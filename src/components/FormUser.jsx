import {useForm} from 'react-hook-form'

const FormUser = () => {

    const {register, handleSubmit, formState:{errors}} = useForm ()
    // register va a tener informacion del input y 
    // handleSubmit es la funcion que se ejecutara en el submit

const getFormData = data => {
    data.id = date.now()
    console.log(data);
}

    return (
     <div>
        <form onSubmit={handleSubmit(getFormData)}>
            <div className='input-wrapper'>
                <label htmlFor="user-name">Nombre</label>
                <input type="text" id="user-name"
                {...register("name",{
                    required : true
                })}
                />
                {errors.name?.type=="required"}
                <span> { errors.name?.type}</span>

            </div>
            <div className='input-wrapper'>
                <label htmlFor="user-email">Email</label>
                <input type="email"
                id = "user-email"
                {...register("email")} />

            </div>

            <div>
                 <label htmlFor="user-age">Edad</label>
                 <input type="number" 
                 id= "user-age"
                 {...register("age")}/>
            </div>
            <div>
                <label htmlFor="user-vaccinated">Vacunacion completa</label>
                <input
                id="user-vaccinated" type="checkbox"{...register("isVaccinated")} />

            </div>

            <div>
                <label htmlFor="user-gender">Man</label>
                <input type="radio" 
                id='user-gender1'
                value="male"
                name="user-gender" {...register ("gender")}/>

                <label htmlFor="user-gender2">woman</label>
                <input type="radio" 
                id='user-gender2'
                value="female"
                name="user-gender" {...register ("gender")}/>
            </div>

            <button type="submit">Enviar</button>
        </form>
     </div>
     )
}

export default FormUser