import React, {Component, useRef} from "react";

interface NewUserProps {
    username: string,
    setUsername: (arg: string | undefined) => void
}

export default class NewUser extends Component<NewUserProps> {

   // _input = useRef<HTMLInputElement>(null);
   _input: string | undefined;

    render() {
        return <form>
            <input type="text" placeholder="Enter name" ref={(data) => { this._input = data?.value} } />
            <button type="submit" onClick={() => this.props.setUsername(this._input)}>Add user</button>
        </form>;
    }
}
