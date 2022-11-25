import React, {Component, ReactNode} from "react";
import './Users.css'
import {User} from "./App";

interface UserListProps {
    users: User[]
}

export default class Users extends Component<UserListProps> {

    showUsers = () => {
        return this.props.users.map((user) => {
            return <li>{user.name}</li>
        })
    }

    render() {
        return <main>
            <ol>
                {this.showUsers}
            </ol>
        </main>;
    }
}