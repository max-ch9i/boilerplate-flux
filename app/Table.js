import React from 'react';
import {dispatch} from './AppDispatcher.js'

export default class Table extends React.Component {
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
                            <tr key={item.key}>
                                <td>{item.name}</td>
                                <td>{item.rank}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}