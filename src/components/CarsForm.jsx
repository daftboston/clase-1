import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { createCarsThunk } from '../store/slices/cars.slice';


const CarsForm = () => {

    const { handleSubmit, register } = useForm()


   
    

    const submit = (data) => {
        dispatch (createCarsThunk(data))
    }


    return (
        <Form onSubmit={ handleSubmit( submit ) }>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Marca</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Marca" 
                { ...register("brand", { required: true }) }
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Modelo</Form.Label>
                <Form.Control type="text" placeholder="series" 
                {...register("model")}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>color</Form.Label>
                <Form.Control type="text" placeholder="black" 
                {...register("color")}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>year</Form.Label>
                <Form.Control type="text" placeholder="1977" 
                {...register("year")}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>price</Form.Label>
                <Form.Control type="text" placeholder="price" 
                {...register("price")}
                />
            </Form.Group>
    
           

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default CarsForm