import React, { Component } from 'react';
// import Options from './options/options';
import View from './view/view';
import '../App.css';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.changeCycleView(e.target.value);
    }
    render() {
        return (
            <div id="main__container">
                <div className="view__container">
                    <select onChange={this.handleChange}>
                        <option value="1">Day</option>
                        <option value="2">2 Day</option>
                        <option value="3">3 Day</option>
                        <option value="4">4 Day</option>
                        <option value="5">5 Day</option>
                    </select>
                </div>
                {<View view={this.props.view} workouts={this.props.workouts} />}
            </div>
        )
    }
}
