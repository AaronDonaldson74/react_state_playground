import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class ClockClass extends Component {
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
            <div className="clock-container">
                <h2>You're seeing the time by state.</h2>
                <div className="clock-wrapper">
                    <FontAwesomeIcon icon="clock" />
                </div>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}


export default ClockClass;