import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reduce';

const logger = createLogger({ level: 'log'})
const middlewares = [thunk, logger];

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));
export default store;