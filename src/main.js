'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/App.tsx'
import './global.css'

// var React = require('react');
// var ReactDOM = require('react-dom');
// var App = require('./App');
// require('./global.css');

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(React.StrictMode, null, React.createElement(App, null))
)
