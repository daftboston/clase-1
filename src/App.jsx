
import { useState } from "react";
import FormUser from "./components/FormUser";
import usersData from "./data/userData.js";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState(usersData);
  const [userDataUpdate, setUserDataUpdate] = useState(null);
  //posibles valores
  //null -> cuando no haya nada seleccionado
  //{ name, id... } -> hay un usuario seleccionado

  const addUser = (data) => {
    setUsers([...users, data]);
  };

  const deleteUser = (userId) => {
    //Filtrar a todos los usuarios diferentes al usuario que queremos eliminar
    //Todos los usuarios que queremos conservar

    const filteredUsers = users.filter((user) => user.id !== userId);

    setUsers(filteredUsers);
  };

  //Estados no deben mutarse

  const selectUser = (userData) => {
    setUserDataUpdate(userData);
  };

  const updateUser = (editedUser) => {
    const index = users.findIndex((user) => user.id === editedUser.id);

    users[index] = editedUser;
    setUsers([...users]);
    setUserDataUpdate(null);
  };

  return (
    <div className="App">
      <FormUser
        createUserData={(data) => addUser(data)}
        userSelectedData={userDataUpdate}
        updateUser={updateUser}
      />
      <UsersList
        users={users}
        deleteUser={deleteUser}
        selectUser={selectUser}
      />
    </div>
  );
}

export default App;
