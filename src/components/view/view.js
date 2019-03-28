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
        return (
            <div>
                <div className={`day__container d${this.props.view}`}>
                    {this.dayItems()}
                </div>
            </div>
        )
    }
}