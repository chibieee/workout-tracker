import React, { Component } from 'react'

import './view.css';

export default class View extends Component {
    testData = {
        0 : {
            name: 'Chest',
            workouts: [
                {
                    name: 'Flat Barbell Bench Press',
                    sets: 4,
                    reps: 8,
                },
                {
                    name: 'Incline Barbell Bench Press',
                    sets: 4,
                    reps: 8,
                },
                {
                    name: 'Decline Barbell Bench Press',
                    sets: 4,
                    reps: 8,
                },
                {
                    name: 'Incline Dumbbell Fly',
                    sets: 4,
                    reps: 8,
                },
            ],
            
        },
        1 : {
            name: 'Back',
            workouts: [
                {
                    name: 'Dumbbell Deadlift',
                    sets: 4,
                    reps: 8,
                },
                {
                    name: 'Kneeling One Arm Row',
                    sets: 4,
                    reps: 8,
                },
                {
                    name: 'Wide Row',
                    sets: 4,
                    reps: 8,
                },
                {
                    name: 'Back Fly',
                    sets: 4,
                    reps: 8,
                },
            ]
        }
    }
    render() {
        const dayItems = Object.keys(this.testData).map((keyName, i) => (
            <div className="day-item">
                <h1>Day {i}</h1>
                <h2>{this.testData[keyName].name}</h2>
                <p>{this.testData[keyName].workouts.length}</p>
                <div className="day-item-content">
                    <h4>{this.testData[keyName].workouts[i].name}</h4>
                    <p></p>
                </div>
            </div>
        ));
        return (
            <div className="day__container">
                {dayItems}
            </div>
        )
    }
}
