import React, { Component } from 'react'

export default class View extends Component {
    render() {
        return (
            <div>
                <div className="day-item">{this.props.view}</div>
                <div className="day-item"></div>
                <div className="day-item"></div>
                <div className="day-item"></div>
                <div className="day-item"></div>
                <div className="day-item"></div>
                <div className="day-item"></div>
            </div>
        )
    }
}
