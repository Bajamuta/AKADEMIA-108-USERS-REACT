import React, {Component, useRef, useState} from "react";

interface NewUserProps {
    setUsername: (arg: string | undefined) => void
}

/*export default class NewUser extends Component<NewUserProps> {
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
}*/

export default function NewUser(props: NewUserProps) {

    /*const [input, updateInput] = useState<HTMLInputElement>();*/

    const inputElement = useRef<HTMLInputElement>(null);

    return <form onSubmit={(e) => {
        e.preventDefault();
        /*if (input)
        {
            props.setUsername(input.value)
        }*/
        if (inputElement)
        {
            props.setUsername(inputElement.current?.value);
        }
    }}>
{/*
        <input type="text" placeholder="Enter name" ref={(data) => { updateInput(data!)} } />
*/}
        <input type="text" placeholder="Enter name" ref={inputElement} />
        <button type="submit">Add user</button>
    </form>;
}
