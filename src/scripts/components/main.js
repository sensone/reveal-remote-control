'use strict';

var RevealRemoteControllApp = require('./RevealRemoteControllApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var sockets = require('./sockets');

var content = document.getElementById('content');

var Routes = (
  <Route handler={RevealRemoteControllApp}>
    <Route name="/" handler={RevealRemoteControllApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
