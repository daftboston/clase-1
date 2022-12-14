function UserCard ({name, movie, band}) {
    /*const{name, movie, band} = props*/
   
return (
    <div className= "user-card">
       <h2>{name}</h2>    
          <ul>
            <li> <span> Pelicula Favorita: </span>{movie}</li>
            <li> <span>Banda favorita:</span> {band} </li>
          </ul>    
    </div>
)
}

export default UserCard


