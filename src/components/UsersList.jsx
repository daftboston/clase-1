const UsersList = () => {
    return (

        <ul>
            {
                users?.map( (userElement, index) => ()
            <li>
                <h4><span>Nombre</span>Nombre</h4>
                <h4><span>Email</span>email</h4>
                <h4><span>Edad</span>xx</h4>
                <h4><span>Vacunacion</span>False</h4>
            </li>
            }
        </ul>
    )
}

export default UsersList