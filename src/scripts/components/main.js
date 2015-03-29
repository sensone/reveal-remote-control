'use strict';

var RevealRemoteControllApp = require('./RevealRemoteControllApp')
  , React = require('react')
  , Router = require('react-router')
  , {Route, Redirect} = Router
  , Control = require('./Control')
  , Pointer = require('./Pointer')
  , Audio = require('./Audio')
  , Zoom = require('./Zoom')
  , Timer = require('./Timer')
  , Notes = require('./Notes')
  , Select = require('./Select');

var content = document.getElementById('content');

var Routes = (
  <Route path="/" handler={RevealRemoteControllApp}>
    <Redirect from="/" to="control"/>

    <Route name="control" handler={Control}/>
    <Route name="pointer" handler={Pointer}/>
    <Route name="select" handler={Select}/>
    <Route name="audio" handler={Audio}/>
    <Route name="notes" handler={Notes}/>
    <Route name="zoom" handler={Zoom}/>
  </Route>
);

Router.run(Routes , function (Handler) {
  React.render(<Handler/> , content);
});
