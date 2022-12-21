const Button = ({textContent, liftingData, buttonName}) =>{

    return <button onClick={()=> liftingData(textContent)}>{buttonName}</button>

}

export default Button