
const Pokemon = ( { data } ) => {

    console.log( data );
    return(
        <article>
            <div className="avatar">
                <img src={ data.sprites?.other["official-artwork"].front_default } alt="" />
            </div>
            <div>
                <h3>{ data.name }</h3>
                <h3><span>Type:</span> {data.types?.[0].type.name}</h3>
                <h3><span>Exp:</span> {data.base_experience} </h3>
            </div>
        </article>
    )
}

export default Pokemon