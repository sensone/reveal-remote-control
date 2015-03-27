'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var RevealRemoteControllApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    RevealRemoteControllApp = require('components/RevealRemoteControllApp.js');
    component = React.createElement(RevealRemoteControllApp);
  });

  it('should create a new instance of RevealRemoteControllApp', function () {
    expect(component).toBeDefined();
  });
});
