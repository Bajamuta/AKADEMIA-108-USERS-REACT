import React, {Component, MouseEventHandler} from "react";
import './Users.css'
import {User} from "./App";

interface UserListProps {
    users: User[],
    cancelUser: (key: number) => void
}

/*export default class Users extends Component<UserListProps> {

    deleteUser(key: number)
    {
        this.props.cancelUser(key);
    }

    showUsers = () => {
        return this.props.users.map((user) => {
            return <li key={user.id + 1}>{user.name} <button onClick={() => this.deleteUser(user.id)}>X</button></li>
        })
    }

    render() {
        return <main>
            <ol>
                {this.showUsers()}
            </ol>
        </main>;
    }
}*/

export default function Users(props: UserListProps)
{

    const deleteUser = (key: number) => {
        props.cancelUser(key);
    }

    const showUsers = () => {
        return props.users.map((user) => {
            return <li key={user.id + 1}>{user.name} <button onClick={() => deleteUser(user.id)}>X</button></li>
        })
    }

    return <main>
        <ol>
            {showUsers()}
        </ol>
    </main>;
}
