import React from 'react';
import {dispatch} from '../data/AppDispatcher'

type Props = {
    data: Immutable.List<Immutable.Map>
};

class Table extends React.Component<{}, Props, {}> {
    constructor(props) {
        super(props);
    }

    _sortRank(e) {
        e.preventDefault();
        dispatch({
            type: 'sort:rank'
        });
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th><a href onClick={this._sortRank}>Rank</a></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map(function(item){
                        return (
                            <tr key={item.get('key')}>
                                <td>{item.get('name')}</td>
                                <td>{item.get('rank')}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

export default Table;