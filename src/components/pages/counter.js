import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {number: 0};

        this.handleClickUp = this.handleClickUp.bind(this);
        // this.handleClickDown = this.handleClickDown.bind(this);
    }

    handleClickUp() {
        this.setState(numchange => ({
            number: state += 1
        }));
    }

    // handleClickDown()
    render () {
        return (
            <div>
                <h3>Counter</h3>
                <div>{numchange()}</div>
                <button className="btn" on Click={this.handleClickUp}>{this.state.number}, Up</button>
                <button className="btn">Down</button>
            </div>
        );
    }
}
export default Counter;