import 'babel-polyfill';
import 'babel-core/register';

import React, { PureComponent } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { Provider, connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureAnchors } from 'react-scrollable-anchor';
import { config } from './../config';
import rootSaga from '../saga/rootSaga';
import reducer from '../reducers/rootReducer';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Particles from 'react-particles-js';

import { Body } from '../components/body/Body';
import { Header } from '../components/header/Header';

import './../styles/main.scss';
import './MainContainer.scss';

configureAnchors({offset: -60, scrollDuration: 600, keepLastAnchorHash: true});

const sagaMiddleware = createSagaMiddleware();
let store;
if (process.env.NODE_ENV === 'production') {
  store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  );
} else {
  store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger)
  );
}

sagaMiddleware.run(rootSaga);

export default class MainContainer extends PureComponent {
  render() {
    const { } = store.getState().auth;

    const content = (
      <div>
        <Header/>
        <Body/>
        <Particles className="Particles" params={config.particlesConfig} />
      </div>
    );

    return (
      <Provider store={store}>
        <Router>
          <div className="MainContainer">

            <Route exact path="/*" render={() => {
              if (false) {
                return <div>LOADING...</div>;
              } else {
                return null;
              }
            }}/>

            <Route exact path="/" render={() => {
              return content;
            }}/>

          </div>
        </Router>

      </Provider>
    );
  }

}
