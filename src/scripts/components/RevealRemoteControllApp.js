'use strict';

let React = require('react/addons')
    , ReactTransitionGroup = React.addons.TransitionGroup
    , Control = require('./Control')
    , Router = require('react-router')
    , { Route, DefaultRoute, RouteHandler, Link } = Router;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');
require('purecss');

let imageURL = require('../../images/yeoman.png');

let RevealRemoteControllApp = React.createClass({
  render: function() {
      return (
          <div id="layout">
              <a href="#menu" id="menuLink" className="menu-link">
                  <span></span>
              </a>

              <div id="menu">
                  <div className="pure-menu">
                      <a className="pure-menu-heading" href="#/">Remote</a>
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
