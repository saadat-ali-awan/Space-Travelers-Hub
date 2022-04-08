import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
import dragonReducer from './dragons/dragon';
import missionReducer from './missions/missions';

const rootReducer = combineReducers({
  rocketsReducer,
  dragonReducer,
  missionReducer,
});

const logger = createLogger();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);

export default store;
