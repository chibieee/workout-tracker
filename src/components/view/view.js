import React, { Component } from 'react'

import DayView from './dayView';
import './view.css';

export default class View extends Component {
    constructor(props) {
        super(props);
        this.dayItems = this.dayItems.bind(this);
    }
    dayItems() {
        let dayItems = [];
        for(let i = 0; i < this.props.view; i++) {
            dayItems.push(
                <DayView key={i} {...this.props.workouts[i]}/>
            )
        }
        return dayItems;
    } 
    render() {
    //     const dayItems = Object.keys(this.testData).map((keyName, i) => (
    //         <div className="day-item">
    //             <h1>Day {i}</h1>
    //             <h2>{this.testData[keyName].name}</h2>
    //             <p>{this.testData[keyName].workouts.length}</p>
    //             <div className="day-item-content">
    //                 <h4>{this.testData[keyName].workouts[i].name}</h4>
    //                 <p></p>
    //             </div>
    //         </div>
    //     ));
    //     return (
    //         <div className="day__container">
    //             {dayItems}
    //         </div>
    //     )
    return (
        <div>
            <h1>View Number is {this.props.view}</h1>
            {this.dayItems()}
        </div>
    )
    }
}
