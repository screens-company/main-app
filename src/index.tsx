import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import {rootReducer} from "./reducers/reducers";
import {Provider} from "react-redux";
import {rootSaga} from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();
const enhancers = composeWithDevTools(
  applyMiddleware(sagaMiddleware)
);
const store = createStore(rootReducer, enhancers);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
