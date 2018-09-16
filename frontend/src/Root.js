import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import reducers from 'reducers';

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(logger, thunkMiddleware, reduxPromise)));

const Root = ({ children }) => (
  <Provider store={store}>
    { children }
  </Provider>
)

export default Root;