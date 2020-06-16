import React from 'react';
import CounterHook from './counterHook';
import CounterClass from './counterClass'

export default function Counter () {
    return(
        <div>
            <CounterClass />
            <CounterHook />
        </div>
    )
}