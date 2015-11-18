import {dispatch} from '../data/AppDispatcher';

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

dispatch({
    type: 'populate:init',
    data: data
});