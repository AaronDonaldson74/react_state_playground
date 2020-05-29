import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {number: 0};

        this.handleClickUp = this.handleClickUp.bind(this);
        this.handleClickDown = this.handleClickDown.bind(this);
    }
    
    handleClickUp() {
        this.setState((prevState) => ({number: prevState.number + 1}));
    }

    handleClickDown() {
        // this.setState(() => (this.state.number = this.state.number - 1));
        this.setState((prevState) => ({number: prevState.number - 1}))
        // this.setState({
        //     number: this.state.number - 1
        // })
    }
    render () {
        return (
            <div>
                <h3>Counter</h3>
                <div>{this.state.number}</div>
                <button className="btn" onClick={this.handleClickUp}>Up</button>
                <button className="btn" onClick={this.handleClickDown}>Down</button>
            </div>
        );
    }
}
export default Counter;

//TODO Try to include By the way.  You could also convert this all into one handleClick that accepts an argument to increase and decrease.