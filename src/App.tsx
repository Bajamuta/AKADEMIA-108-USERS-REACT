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
    const [key, updateKey] = useState<number>(0);

   const addUser = (username: string | undefined) => {
       if (username) {
           let user = {id: key, name: username} as User;
           updateUsers((prevUsers) => {
               return [...prevUsers, user];
           });
           // kolejne elementy listy (user list) muszą mieć unikalny key
           updateKey((prevKey: number) => prevKey + 1);
       }
   }

   const removeUser = (key: number) => {
       updateUsers((prevUsers: User[]) => {
           return prevUsers.filter((user) => user.id !== key);
       });
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Users' List</h1>
      </header>
        <NewUser setUsername={addUser}/>
        <Users users={users} cancelUser={removeUser}/>
    </div>
  );
}

export default App;
