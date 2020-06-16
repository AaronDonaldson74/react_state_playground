import React, { useState } from 'react';

export default function ChangeColorClass() {

    const [color, setColor] = useState("")
    const [newColor, setNewColor] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        setNewColor(color)
        setColor("")
    }

    return (
        <div className="change-color-wrapper">
            <h1>ChangeColor page...with hooks</h1>
            <form onSubmit={handleSubmit} >
                <label>
                Enter Font color here:
                </label>
                <input type="text" placeholder="enter color, press enter" value={color} onChange={(event) => setColor(event.target.value)} />
            </form>
            <div className="rainbow-font" style={{color: newColor}}>Congratulations! Your font is now {newColor}!</div>
        </div>
    );
}
