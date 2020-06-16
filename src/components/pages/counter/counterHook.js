import React, { useState } from 'react';

export default function CounterHook() {
    
    const [count, setCount] = useState(0);

    return (
        <div className="wrapper">
            <h3>Counter by Hooks</h3>
            <div>{count}</div>
                <button className="btn"
                    onClick={() => setCount(count + 1)}> Oooh Oooh Oooh...CLICK ME TO GO UP!
                </button>
                <button className="btn"
                    onClick={() => setCount(count - 1)}> Oooh Oooh Oooh...CLICK ME TO GO DOWN!
                </button>
        </div>
    )
}