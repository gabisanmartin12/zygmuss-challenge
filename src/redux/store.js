import { createStore } from 'redux';
import enhancers from './enhancers';
import reducers from './reducers';

const store = createStore(reducers, enhancers);

export default store;
