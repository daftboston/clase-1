import {useParams} from 'react-router-dom'


const TeamDetail = () =>{

    const {name} = useParams ()

    console.log(name, otroparametro);
   
    return (
        <div>
            <h1> Este es el detalle</h1>
            <h2>Este es el detalle {name}</h2>
       </div>
       
    )
}




export default  TeamDetail