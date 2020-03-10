import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import SideBar from './SideBar';
import HomeFooter from './HomeFooter';
import Header from './Header';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<SideBar />, document.getElementById('sidebar'));
ReactDOM.render(<HomeFooter />, document.getElementById('footer'));
