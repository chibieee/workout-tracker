import React, { Component } from 'react';

export default class DayView extends Component {
    render() {
        const workouts = Object.keys(this.props.workouts).map((workout, i) => (
            <div className="workout-item">
                <div className="workout-name">
                    <h3>{this.props.workouts[workout].name}</h3>
                </div>
                <div className="workout-sets">
                    {this.props.workouts[workout].sets}
                </div>
                <div className="workout-reps">
                    {this.props.workouts[workout].reps}
                </div>
            </div>
        ));

        return (
            <div className="day-item">
                <h2>{this.props.name}</h2>
                {workouts}
            </div>
        )
    }
}
