import {createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const stores = createStore(
    reducers,
);

export default stores;