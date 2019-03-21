import React, { Component } from 'react';

export default class Options extends Component {
    render() {
        return (
            <div className="view__container">
                <select>
                    <option value="day">Day</option>
                    <option value="2day">2 Day</option>
                    <option value="week">Week</option>
                    <option value="2week">2 Week</option>
                </select>
            </div>
        )
    }
}