import React from 'react';
import ClockHook from './clockHook';
import ClockClass from './clockClass';

export default function Clock () {
    return(
        <div>
            <ClockClass />
            <ClockHook />
        </div>
    )
}