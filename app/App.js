import React from 'react';
import {Component} from 'react';
import {Container} from 'flux/utils';
import DataStore from './DataStore.js';

class App extends Component {
    static getStores() {
        return [DataStore];
    }

    static calculateState(prevState) {
        return {
            counter: DataStore.getState()
        }
    }

    render() {
        return <h1>Test</h1>;
    }
}

export default Container.create(App);