const Rick = ( { data } ) => {


    return(
        <article>
            <div className="avatar">
                <img src= {data.image}alt="" />
            </div>
            <div>
                <h3>{data.created}</h3>
                <h3><span>Especie:{data.species}</span> {}</h3>
                <h3><span>Genero:{data.gender}</span> {} </h3>
                <h3><span>Status:{data.male}</span> {} </h3>
            </div>
        </article>
    )
}

export default Rick