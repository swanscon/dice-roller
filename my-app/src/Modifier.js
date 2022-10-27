import React from 'react';

export function diceMod() {
    const input = props => {
        const[textInput, setTextInput] = React.useState('');

        const handleChange = (event) => {
            props.send(textInput);
            setTextInput(event.target.value)
        }
    return (
        <div>
            <input onChange={handleChange} placeholder="Modifier here"></input>
        </div>
    )
    }
}

const domContainer = document.querySelector('#test_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(diceMod));