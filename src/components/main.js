import React, { Component } from 'react';
// import Options from './options/options';
import View from './view/view';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewAmount: 1
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            viewAmount: event.target.value
        })
        console.log(this.state.viewAmount);
    }
    render() {
        return (
            <div id="main__container">
                <div className="view__container">
                    <select onChange={this.handleChange}>
                        <option value="1">Day</option>
                        <option value="2">2 Day</option>
                        <option value="7">Week</option>
                        <option value="14">2 Week</option>
                    </select>
                </div>
                <View view={this.state.viewAmount} />
            </div>
        )
    }
}
