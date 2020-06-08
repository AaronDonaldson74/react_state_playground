import React, { Component } from 'react';

class ChangeColor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontcolor: ""
        }
    }

    handleColorChange = (event) => {
        this.setState({
            fontcolor: event.target.value,
        })
    }

    render () {
        return (
            <div className="change-color-wrapper">
                <h1>ChangeColor page...</h1>
                <form>
                    <label>
                    Enter Font color here:
                    </label>
                    <input type="text" value={this.state.fontcolor} onChange={this.handleColorChange} />
                </form>
                <div className="rainbow-font" style={{color: this.state.fontcolor}}>Congratulations! Your font is now {this.state.fontcolor}!</div>
            </div>
        );
    }
}
export default ChangeColor;