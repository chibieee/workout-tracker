import React, { Component } from 'react';
// import Options from './options/options';
import View from './view/view';
import '../App.css';

export default class Main extends Component {
    render() {
        return (
            <div id="main__container">
                <div className="view__container">
                    <select>
                        <option value="1">Day</option>
                        <option value="2">2 Day</option>
                        <option value="7">Week</option>
                        <option value="14">2 Week</option>
                    </select>
                </div>
                {<View view={this.props.view} workouts={this.props.workouts} />}
            </div>
        )
    }
}
