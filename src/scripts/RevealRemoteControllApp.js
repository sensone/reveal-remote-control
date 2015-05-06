'use strict';

const React = require('react/addons')
  , ReactTransitionGroup = React.addons.TransitionGroup
  , Control = require('./components/Control')
  , Router = require('react-router')
  , Timer = require('./components/Timer')
  , Menu = require('./components/Menu')
  , Status = require('./components/Status')
  , session = require('./models/session')
  , model = require('./models/model')
  , { Route, DefaultRoute, RouteHandler, Link } = Router;

// CSS
require('../styles/normalize.css');
require('../styles/main.css');

class RevealRemoteControllApp extends React.Component {
  constructor(props) {
    super(model);
    this.state = model.toJSON();
    model.on('change', function(m) {
      this.setState(m.toJSON());
    }, this);
  }
  contextTypes() {
    router: React.PropTypes.func
  }
  changeState(e) {
    e.preventDefault();

    model.set('test', model.get('test') + 1);
  }
  render() {
    return (
      <div className="container">
        <Status/>
        <Menu/>
        <Timer/>
        <RouteHandler/>
      </div>
    );
  }
}

module.exports = RevealRemoteControllApp;
