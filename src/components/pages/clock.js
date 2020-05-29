import React, { Component } from 'react';

class Clock extends Component {
    constructor() {
        super();
        this.state={
            date: new Date()
        }
    
    }

    componentDidMount() {
        this.timerId = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick = () => {
        this.setState({
            date: new Date()
        })
    }

    render () {
        return (
            <div>
                <h1>Clock</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}


export default Clock;