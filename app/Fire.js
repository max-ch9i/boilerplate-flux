import React from 'react';
import {Container} from 'flux/utils';
import FirebaseStore from './FirebaseStore.js';
import Table from './Table.js';

class Fire extends React.Component {
    static getStores() {
        return [FirebaseStore];
    }

    static calculateState(prevState) {
        return {
            data: FirebaseStore.getState()
        };
    }

    render() {
        var list = [];

        this.state.data.forEach(function(val) {
            list.push({
                key: val.get('key'),
                name: val.get('name'),
                rank: val.get('rank')
            });
        });
        return <Table data={list}/>;
    }
}

const fire = Container.create(Fire);
export default fire;