import React from 'react';
import {Container} from 'flux/utils';
import DataStore from './data/DataStore';
import Table from './components/Table';
import './data/data';

class App extends React.Component {
    static getStores() {
        return [DataStore];
    }

    static calculateState(prevState) {
        return {
            data: DataStore.getState()
        };
    }

    render() {
        return <Table data={this.state.data}/>;
    }
}

const app = Container.create(App);
export default app;