'use strict';

const React = require('react/addons')
  , ReactTransitionGroup = React.addons.TransitionGroup
  , Control = require('./Control')
  , Router = require('react-router')
  , Timer = require('./Timer')
  , Menu = require('./Menu')
  , Status = require('./Status')
  , model = require('./model')
  , { Route, DefaultRoute, RouteHandler, Link } = Router;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');
require('purecss');

class RevealRemoteControllApp extends React.Component {
  constructor(props) {
    super(model);
    this.state = model.toJSON();

    model.on('change', function(m) {
      this.setState(m.toJSON());
    }, this);
  }
  changeState(e) {
    e.preventDefault();

    model.set('test', model.get('test') + 1);
  }
  render() {
    return (
      <div>
        <Status/>
        <Menu/>
        <Timer/>
        <div className="main">
          <ReactTransitionGroup transitionName="fade">
            <RouteHandler/>
          </ReactTransitionGroup>
        </div>
      </div>
    );
  }
}

module.exports = RevealRemoteControllApp;
