'use strict';

let RevealRemoteControllApp = require('./RevealRemoteControllApp')
  , React = require('react')
  , Router = require('react-router')
  , { Route, NotFoundRoute} = Router
  , Control = require('./components/Control')
  , Pointer = require('./components/Pointer')
  , Audio = require('./components/Audio')
  , Zoom = require('./components/Zoom')
  , Timer = require('./components/Timer')
  , Notes = require('./components/Notes')
  , session = require('./models/session')
  , storage = window.localStorage
  , content = document.getElementById('content')
  , Select = require('./components/Select');


let Routes = (
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
  let getParams = state.params
    , params;

  if (getParams.splat) {
    params = getParams.splat.split('/');
    session.set({
      id: params[0],
      token: params[1]
    });
    storage.setItem('presentation_id', params[0]);
    storage.setItem('token', params[1]);
  } else {
    session.set({
      id: storage.getItem('presentation_id'),
      token: storage.getItem('token')
    });
  }

  React.render(<Handler/> , content);
});
