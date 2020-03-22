import { createStore } from 'redux';

import reducer from '../reducers/reducerCounter';

const store = createStore(reducer);

export default store;
