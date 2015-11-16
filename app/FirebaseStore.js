import AppDispatcher, {dispatch} from './AppDispatcher.js';
import {ReduceStore} from 'flux/utils';
import Firebase from 'firebase';
import Immutable from 'immutable';

var _order = Immutable.List.of(-1, 1);

class DataStore extends ReduceStore {
    getInitialState() {
        const firebaseRef = new Firebase('https://volleyup.firebaseio.com/flux');
        firebaseRef.on('value', function(snapshot) {
            dispatch({
                type: 'fire:load',
                data: snapshot.val()
            });
        });
        return Immutable.List();
    }

    reduce(state: Immutable.List, action) {
        switch(action.type) {
            case 'sort:rank':
                _order = _order.reverse();
                return state.sort(function(a, b) {
                    return a.get('rank') > b.get('rank') ? _order.first() : _order.last();
                });
                break;
            case 'fire:load':
                return state.merge(action.data);
                break;
            default:
                return state;
        }
    }
}

const store = new DataStore(AppDispatcher);
export default store;