import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './main.css';
import employees from './employees';

ReactDOM.render(<App data={employees} />, document.getElementById('root'));
