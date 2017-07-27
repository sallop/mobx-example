import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import { App, Store } from './App';
import registerServiceWorker from './registerServiceWorker';

const store = new Store();
ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
