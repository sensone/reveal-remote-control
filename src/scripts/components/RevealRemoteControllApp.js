'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Control = require('./Control');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;
// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');
require('purecss');

var imageURL = require('../../images/yeoman.png');

var RevealRemoteControllApp = React.createClass({
  render: function() {
      return (
          <div id="layout">
              <a href="#menu" id="menuLink" className="menu-link">
                  <span></span>
              </a>

              <div id="menu">
                  <div className="pure-menu">
                      <a className="pure-menu-heading" href="/">Remote</a>
                      <ul className="pure-menu-list">
                          <li className="pure-menu-item">
                              <a href="#/control" className="pure-menu-link">Control</a>
                          </li>
                          <li className="pure-menu-item">
                              <a href="#/pointer" className="pure-menu-link">Pointer</a>
                          </li>

                          <li className="pure-menu-item">
                              <a href="#/select" className="pure-menu-link">Select</a>
                          </li>

                          <li className="pure-menu-item">
                              <a href="#/audio" className="pure-menu-link">Audio</a>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="main">
                  <ReactTransitionGroup transitionName="fade">
                      <RouteHandler/>
                  </ReactTransitionGroup>
              </div>
          </div>
      );
  }
});

module.exports = RevealRemoteControllApp;
