'use strict';

const React = require('react/addons')
  , ReactTransitionGroup = React.addons.TransitionGroup
  , Control = require('./Control')
  , Router = require('react-router')
  , Timer = require('./Timer')
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
      <div id="layout" model={this.getModel}>
        <div className="pure-menu pure-menu-horizontal pure-menu-scrollable">
          <a href="#/" className="pure-menu-link pure-menu-heading" onClick={this.changeState.bind(this)}>Remote Control</a>

          <ul className="pure-menu-list">
            <li className="pure-menu-item">
              <a href="#/control" className="pure-menu-link">Slides</a>
            </li>
            <li className="pure-menu-item">
              <a href="#/notes" className="pure-menu-link">Notes {this.state.test}</a>
            </li>
            <li className="pure-menu-item">
              <a href="#/pointer" className="pure-menu-link">Pointer</a>
            </li>
            <li className="pure-menu-item">
              <a href="#/select" className="pure-menu-link">Select</a>
            </li>
            <li className="pure-menu-item">
              <a href="#/zoom" className="pure-menu-link">Zoom</a>
            </li>
          </ul>
        </div>

        <div className="main">
          <ReactTransitionGroup transitionName="fade">
            <Timer/>
            <RouteHandler/>
          </ReactTransitionGroup>
        </div>
      </div>
    );
  }
}

module.exports = RevealRemoteControllApp;
