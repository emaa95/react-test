import React from 'react';
import './slide-button.css'

const SlideButton = () => {

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        
        <label class="switch">
        <input type="checkbox" onChange={(event) => handleChange(event)}></input>
        <span class="slider round"></span>
        </label>
        
    );
}

export default SlideButton;