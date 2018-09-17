import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./rootHeader.css"
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PageHeader from "./rootHeader"
import rootHeader from "./rootHeader"

ReactDOM.render(<PageHeader />, document.getElementById('root'));
registerServiceWorker();
