/** @jsx React.DOM */

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var MainPage = require('./MainPage.jsx');
var ChatPage = require('./ChatPage.jsx');
var LoginPage = require('./LoginPage.jsx');
var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute } = Router;


var routes = (
    <Route handler={MainPage} >
        <DefaultRoute handler={LoginPage} />
        <Route name="login" handler={LoginPage} />
        <Route name="chat" handler={ChatPage} />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('content'));
});

