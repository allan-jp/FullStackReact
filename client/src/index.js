//Redux (data layer control)
import 'materialize-css/dist/css/materialize.min.css';
import React from  'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';



const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}><App /></Provider>, //store passed to Provider as prop, App is a child to Provider
  document.querySelector('#root')
);