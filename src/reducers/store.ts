/**
 *
 * Redux Store
 *
 *  */

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import displayReducer from './display';
import userReducer from './user';
import contentReducer from './content';

// import { FONT_LOADED, FONT_LOADING, SET_IS_SCROLLED } from 'actions/display';

const logger = createLogger({
  predicate: (getState: any, action: any) => true,
  // action.type !== FONT_LOADED &&
  // action.type !== FONT_LOADING &&
  // action.type !== SET_IS_SCROLLED,
});

export function initializeStore(initialState = {}) {
  return createStore(
    combineReducers({
      user: userReducer,
      display: displayReducer,
      content: contentReducer,
    }),
    initialState,
    applyMiddleware(thunkMiddleware, logger),
  );
}
