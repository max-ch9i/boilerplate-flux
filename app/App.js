import React from 'react';
import {Container} from 'flux/utils';
import DataStore from './data/DataStore';
import Table from './components/Table';

type State = {
    data: Immutable.List<Immutable.Map>
};

class Fire extends React.Component<{}, {}, State> {
    static getStores(): Array<Store> {
        return [DataStore];
    }

    static calculateState(prevState): State {
        return {
            data: DataStore.getState()
        };
    }

    render() {
        return <Table data={this.state.data}/>;
    }
}

const fire = Container.create(Fire);
export default fire;