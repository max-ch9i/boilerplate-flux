import AppDispatcher, {dispatch} from './AppDispatcher.js';
import {ReduceStore} from 'flux/utils';
import Firebase from 'firebase';
import Immutable from 'immutable';
import type {Action} from './Actions';
import data from './data';

var _order = Immutable.List.of(-1, 1);

class DataStore extends ReduceStore<Immutable.List<Immutable.Map>> {
    getInitialState(): Immutable.List<Immutable.Map>  {
        var list = Immutable.List();
        return list.merge(data);
    }

    reduce(state: Immutable.List<Immutable.Map>, action: Action) {
        switch(action.type) {
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