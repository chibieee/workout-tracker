import React, { Component } from 'react';
import Options from './options/options';
import View from './view/view';

export default class Main extends Component {
    render() {
        return (
            <div id="main__container">
                <Options />
                <View />
            </div>
        )
    }
}
