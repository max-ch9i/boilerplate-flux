import AppDispatcher, {dispatch} from './AppDispatcher.js';
import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';

var _order = Immutable.List.of(-1, 1);

class DataStore extends ReduceStore {
    getInitialState() {
        return Immutable.List();
    }

    reduce(state, action: Action) {
        switch(action.type) {
            case 'populate:init':
                return state.merge(action.data);
                break;
            case 'sort:rank':
                _order = _order.reverse();
                return state.sort(function(a, b) {
                    return a.get('rank') > b.get('rank') ? _order.first() : _order.last();
                });
                break;
            default:
                return state;
        }
    }
}

const store = new DataStore(AppDispatcher);
export default store;