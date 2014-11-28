/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var {DefaultRoute, Route, Routes, Link} = require('react-router');

var MainPage = React.createClass({
  render: function() {
    return (
        <div>
            <Link to='/login'>Login</Link>
            <Link to='/room'>Room</Link>
        </div>
    );
  }
});

module.exports = MainPage;
