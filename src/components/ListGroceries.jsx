/* 
   Realizar una lista de compras 
    -cada elemento o produto en la lista sera un componente independiente
    -nombre del producto y la cantidad
    -Estilos
    -Captura de pantalla al slack
    -leer el articulo de componentes
*/

function ListGroceries ({name, quant, price}) {
    return(
    <div className="listGroceries">
        <div>
            <h2>{name}</h2>
        </div>
        <div>
            <ul>
                <li> <span>Precio: $</span>{price}</li>
                <li><span>Cantidad:</span>{quant}</li>
            </ul>
        </div>

    </div>
    )
    
}

export default ListGroceries