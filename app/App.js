import React from 'react';
import {Container} from 'flux/utils';
import DataStore from './DataStore.js';
import Table from './Table.js';

class App extends React.Component {
    static getStores() {
        return [DataStore];
    }

    static calculateState(prevState) {
        return {
            data: DataStore.getState()
        }
    }

    render() {
        return <Table data={this.state.data}/>;
    }
}

const app = Container.create(App);
export default app;