import React, { Component } from 'react'

export default class View extends Component {
    render() {
        var items = [];
        for (let i = 0; i < this.props.view; i++) {
            items.push(<div className="day-item">hello {i}</div>)
        }
        return items
    }
}
