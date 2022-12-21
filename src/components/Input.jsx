const Input = ({getInputValue}) => {

    return (
    <div className="input-wrapper">
        <i class='bx bx-pencil'></i>
        <input type="text" /* hay tambien date, color y checkbox */ placeholder="Ingresa texto" onChange={(e)=> getInputValue(e.target.value)} 
        />
    </div>
    )
   

}

export default Input