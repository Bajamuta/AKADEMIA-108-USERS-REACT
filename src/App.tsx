import React, {useState} from 'react';
import './App.css';
import Users from "./Users";
import NewUser from "./NewUser";

export interface User {
    id: number,
    name: string
}

function App() {

    const [users, updateUsers] = useState<User []>([]);

   const addUser = (username: string | undefined) => {
       console.log(username);
       if (username) {
           let user = {id: users.length + 1, name: username} as User;
           updateUsers((prevUsers) => {
               return [...prevUsers, user];
           });
       }
   }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Users' List</h1>
      </header>
        <NewUser setUsername={addUser}/>
        <Users users={users}/>
    </div>
  );
}

export default App;
