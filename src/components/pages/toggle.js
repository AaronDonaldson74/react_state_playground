import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
        this.toggleGreeting = this.toggleGreeting.bind(this);
    
    }

    toggleGreeting() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render () {
        return (
            <div className="wrapper">
            <h1>This is a Toggle Button!</h1>
            <button className="btn" onClick={this.toggleGreeting}>Toggle Here
            </button>
            <div><h1>{this.state.isToggleOn ? 'Hello' : 'Go Away Now'}</h1></div>
            </div>
        );
    }
}
export default Toggle;
