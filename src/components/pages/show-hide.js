import React, { Component } from 'react';

class ShowHide extends Component {
    constructor() {
        super();
        this.state = {
            visual: false
        }
    }

    showHide = () => {
        this.setState (prevState => ({
            visual: !prevState.visual
        }))
    }


    render () {
        return (
            <div className="showPage-container">
                <h1>This is a Show or Hide page.</h1>
                <h2>Click the button to show or hide text!</h2>
                <button onClick={this.showHide}>{`${this.state.visual ? 'Hide' : 'Show'}`}
                </button>
                <div><h1>{this.state.visual ? 'The treasure is hidden in the cave. Click the button to keep the secret!' : ''}</h1></div>
            </div>
        );
    }
}
export default ShowHide;