import React from 'react';
import ReactDOM from 'react-dom';
import './style/app.css';
import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
