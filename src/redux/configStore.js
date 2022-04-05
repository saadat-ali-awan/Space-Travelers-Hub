import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rockets';
import dragonReducer from './dragons/dragon';
import missonsReducer from './missions/missions';

const rootReducer = combineReducers({
  rocketsReducer,
  dragonReducer,
  missonsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
);

export default store;
