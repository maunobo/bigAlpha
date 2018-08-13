import 'materialize-css/dist/css/materialize.min.css';
// The CSS library is used as an NPM package instead of a CDN, because it is becoming increasingly more popular to do it like this 
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());

// Reducers, we need two: 
// authReducer: is responsible for deciding whether or not the user is logged in
// surveysReducer: is responsible for recording a list of all the different surveys that a user has created

ReactDOM.render(
<Provider store={store}><App /></Provider>,
    document.querySelector('#root'));

