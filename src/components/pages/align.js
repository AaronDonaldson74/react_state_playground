import React, { Component } from 'react';

class Align extends Component {
    constructor() {
        super();
        this.state = {
            alignment: "Left"

        }

    }

    handleClick = position => {
        this.setState({
            alignment: position
        })
    }

    render () {
        return (
            <div>
                <div className="align-page-container">
                    <div>
                    <h3>Align page...</h3>
                    </div>
                    <div className="btn-wrapper">
                        <button className="btn" onClick={() => this.handleClick("Left")}>Left</button>
                        <button className="btn" onClick={() => this.handleClick("Center")}>Center</button>
                        <button className="btn" onClick={() => this.handleClick("Right")}>Right</button>
                    </div>
                </div>
                    <div className="align-text" style={{textAlign: `${this.state.alignment}`}}>This text is aligned {this.state.alignment}!</div>
            </div>
        );
    }
}
export default Align;