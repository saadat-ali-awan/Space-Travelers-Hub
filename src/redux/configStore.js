import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
import dragonReducer from './dragons/dragon';
import missonsReducer from './missions/missions';

const rootReducer = combineReducers({
  rocketsReducer,
  dragonReducer,
  missonsReducer,
});

const logger = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
