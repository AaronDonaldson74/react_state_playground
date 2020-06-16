import React, { useState } from 'react';

export default function CounterHooks() {
    
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Counter by Hooks {count}</p>
                <button
                    onClick={() => setCount(count + 1)}> Oooh Oooh Oooh...CLICK ME TO GO UP!
                </button>
                <button
                    onClick={() => setCount(count - 1)}> Oooh Oooh Oooh...CLICK ME TO GO DOWN!
                </button>
        </div>
    )
}