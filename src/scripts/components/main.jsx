/** @jsx React.DOM */

var ReactPockerApp = require('./ReactPockerApp');
var React = require('react');
var {DefaultRoute, Route, Routes} = require('react-router');

React.renderComponent((
  <Routes location="history">
    <Route path="/" handler={ReactPockerApp}>
    </Route>
  </Routes>
), document.getElementById('content'));
