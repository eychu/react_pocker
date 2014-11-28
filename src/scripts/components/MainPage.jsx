/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;


var MainPage = React.createClass({
  render: function() {
    return (
        <div>
            <Link to='chat'>chat link</Link>
        </div>
    );
  }
});

module.exports = MainPage;
