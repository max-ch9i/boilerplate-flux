import AppDispatcher from './AppDispatcher.js';
import {ReduceStore} from 'flux/utils';

class DataStore extends ReduceStore {
    getInitialState() {
        return [];
    }
    reduce(state, action) {
        return state;
    }
}

export default new DataStore(AppDispatcher);