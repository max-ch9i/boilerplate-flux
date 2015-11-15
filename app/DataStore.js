import AppDispatcher from './AppDispatcher.js';
import {ReduceStore} from 'flux/utils';
import Firebase from 'firebase';
import DataSorter from './DataSorter.js';

class DataStore extends ReduceStore {
    getInitialState() {
        // const firebaseRef = new Firebase('https://volleyup.firebaseio.com/games');
        const data = [
          {
            "key": "56488a335b3ae958f3eb6343",
            "name": "Caln",
            "rank": 4258
          },
          {
            "key": "56488a33d24d7d8fee539a8a",
            "name": "Bendon",
            "rank": 3858
          },
          {
            "key": "56488a33dcbc28e958edf5f3",
            "name": "Kansas",
            "rank": 3491
          },
          {
            "key": "56488a33e0e68af901227913",
            "name": "Sultana",
            "rank": 53
          },
          {
            "key": "56488a334809a5ae582d9f17",
            "name": "Juarez",
            "rank": 8439
          }
        ];
        return data;
    }

    reduce(state, action) {
        switch(action.type) {
            case 'sort:rank':
                return DataSorter.toggleSort(state);
                break;
            default:
                return state;
        }
    }
}

const store = new DataStore(AppDispatcher);
export default store;