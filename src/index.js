import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import Store from './store';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(<Provider store={Store}>
    <Router>
        <App />
    </Router>
</Provider >, document.getElementById('root'));


