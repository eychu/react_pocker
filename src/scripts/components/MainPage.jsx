/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;


var MainPage = React.createClass({
  render: function() {
    return <div>
      <RouteHandler />
    </div>
  }
});

module.exports = MainPage;
