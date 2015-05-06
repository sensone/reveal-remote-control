'use strict';

var RevealRemoteControllApp = require('./RevealRemoteControllApp')
  , React = require('react')
  , Router = require('react-router')
  , { Route, NotFoundRoute} = Router
  , Control = require('./Control')
  , Pointer = require('./Pointer')
  , Audio = require('./Audio')
  , Zoom = require('./Zoom')
  , Timer = require('./Timer')
  , Notes = require('./Notes')
  , session = require('./session')
  , Select = require('./Select');

var content = document.getElementById('content');

var Routes = (
  <Route handler={RevealRemoteControllApp} path="/">
    // TODO: change NotFoundRoute to DefaultRoute
    // and fix get params
    <NotFoundRoute handler={Control} />

    <Route name="control" handler={Control}/>
    <Route name="pointer" handler={Pointer}/>
    <Route name="select" handler={Select}/>
    <Route name="audio" handler={Audio}/>
    <Route name="notes" handler={Notes}/>
    <Route name="zoom" handler={Zoom}/>
  </Route>
);

Router.run(Routes , function (Handler, state) {
  var getParams = state.params
    , params;

  if (getParams.splat) {
    params = getParams.splat.split('/');
    session.set({
      id: params[0],
      token: params[1]
    });
  }

  React.render(<Handler/> , content);
});
