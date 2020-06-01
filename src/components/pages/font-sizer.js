import React, { Component } from 'react';

class FontSizer extends Component {
    constructor() {
        super();
        this.state = {
            fontSize: 20
        }

    }

    handleClick = (size) => {
        this.setState(prevState => ({
            fontSize: prevState.fontSize + size
        }))
    }

        
    render () {
        return (
            <div className="wrapper">
                <h1>Font Sizer</h1>
                    <div className="btn-wrapper">
                    <button className="btn" onClick={() => this.handleClick(5)}>Bigger</button>
                    <button className="btn" onClick={() => this.handleClick(-5)}>Smaller</button>
                    </div>
                <div style={{fontSize: `${this.state.fontSize}px`}}>This text is {this.state.fontSize} px</div>
            </div>
        );
    }
}
export default FontSizer;