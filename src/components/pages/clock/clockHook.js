import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ClockHook() {
    const[date, setDate] = useState(new Date());

    useEffect(() => {
        let timerId = setInterval( tick, 1000 )

        return () => clearInterval(timerId)
    })


    const tick = () => {
        setDate(new Date())
        console.log('tick')
    }

    return (
        <div className="clock-container">
            <h2>You're seeing the time by hooks.</h2>
            <div className="clock-wrapper">
                <FontAwesomeIcon icon="clock" />
            </div>
            <h2>{date.toLocaleTimeString()}</h2>
        </div>
    )
}