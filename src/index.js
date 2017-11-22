import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';

import reducers from './reducers/index.js';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'));