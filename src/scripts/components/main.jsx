/** @jsx React.DOM */

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var LoginPage = require('./LoginPage.jsx');
var RoomPage = require('./RoomPage.jsx');
var MainPage = require('./MainPage.jsx');
var React = require('react');
var {DefaultRoute, Route, Routes} = require('react-router');

React.renderComponent((
  <Routes location="history">
    <Route path="/" handler={MainPage} />
    <Route path="/login" handler={LoginPage} />
    <Route path="/room" handler={RoomPage} />
  </Routes>
), document.getElementById('content'));
