import AppDispatcher, {dispatch} from './AppDispatcher.js';
import {ReduceStore} from 'flux/utils';
import Firebase from 'firebase';
import Immutable from 'immutable';
import type {Action} from './Actions';

var _order = Immutable.List.of(-1, 1);

class DataStore extends ReduceStore<Immutable.List<Immutable.Map>> {
    getInitialState(): Immutable.List<Immutable.Map>  {
        return Immutable.List();
    }

    reduce(state: Immutable.List<Immutable.Map>, action: Action) {
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