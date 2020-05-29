import React, { Component } from 'react';

class FontSizer extends Component {
    constructor() {
        super();
        this.state = {
            
        }
        this.handleClickBigger = this.handleClickBigger.bind(this);
        this.handleClickSmaller = this.handleClickSmaller.bind(this);
    }

    handleClickBigger() {
        this.setState()
    }

    handleClickSmaller() {
        this.setState()
    }
    
    render () {
        return (
            <div className="wrapper">
                <h1>Font Sizer</h1>
                <button className="btn" onClick={this.handleClickBigger}>Bigger</button>
                <button className="btn" onClick={this.handleClickSmaller}>Smaller</button>
                <div className="wordsToStyle">This text is ... px</div>
            </div>
        );
    }
}
export default FontSizer;