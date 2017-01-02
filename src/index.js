import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';
import './styles/mainstyle.scss';

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('app'));
};