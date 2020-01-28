import { createStore, applyMiddleware  } from 'redux'
import { users } from './Reducers/users';
// import rootReducer from './reducers/index';

import thunk from 'redux-thunk';

const store = createStore(users, applyMiddleware(thunk));

export default store;