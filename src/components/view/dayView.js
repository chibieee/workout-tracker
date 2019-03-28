import React, { Component } from 'react';

import './dayView.css';

export default class DayView extends Component {
    render() {
        const workouts = Object.keys(this.props.workouts).map((workout, i) => (
            <div className="workout-item" key={i}>
                <div className="workout-name">
                    <h3>{this.props.workouts[workout].name}</h3>
                </div>
                <div className="workout-info">
                    <div className="workout-amount">
                        <h4>Weight</h4>
                        <p>{this.props.workouts[workout].weight}</p>
                    </div>
                    <div className="workout-sets">
                        <h4>Sets</h4>
                        <p>{this.props.workouts[workout].sets}</p>
                    </div>
                    <div className="workout-reps">
                        <h4>Reps</h4>
                        <p>{this.props.workouts[workout].reps}</p>
                    </div>
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
