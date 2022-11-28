import React, {Component} from "react";

interface NewUserProps {
    setUsername: (arg: string | undefined) => void
}

export default class NewUser extends Component<NewUserProps> {

   _input: HTMLInputElement | null;

   constructor(props: NewUserProps) {
       super(props);
       this._input = null;
   }

    render() {
        return <form onSubmit={(e) => {
            e.preventDefault();
            if (this._input)
            {
                this.props.setUsername(this._input.value)
            }
        }}>
            <input type="text" placeholder="Enter name" ref={(data) => { this._input = data} } />
            <button type="submit">Add user</button>
        </form>;
    }
}
