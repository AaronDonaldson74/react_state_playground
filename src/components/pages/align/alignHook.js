import React, { useState } from 'react';

export default function AlignHook() {

    const [alignment, setAlign] = useState("left")

    return (
        <div>
            <div className="align-page-container">
                <div>
                <h3>Align page... with hooks!</h3>
                </div>
                <div className="btn-wrapper">
                    <button className="btn" onClick={() => setAlign("Left")}>Left</button>
                    <button className="btn" onClick={() => setAlign("Center")}>Center</button>
                    <button className="btn" onClick={() => setAlign("Right")}>Right</button>
                </div>
            </div>
                <div className="align-text" style={{textAlign: `${alignment}`}}>This text is aligned {alignment}!</div>
        </div>
    );
}