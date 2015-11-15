import AppDispatcher, {dispatch} from './AppDispatcher.js';
import {ReduceStore} from 'flux/utils';
import Firebase from 'firebase';
import Immutable from 'immutable';

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

    reduce(state, action) {
        switch(action.type) {
            case 'sort:rank':
                //return DataSorter.toggleSort(state);
                // TODO: rewrite with the immutable
                return state;
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