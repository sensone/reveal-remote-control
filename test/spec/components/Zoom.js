'use strict';

describe('Zoom', function () {
  var React = require('react/addons');
  var Zoom, component;

  beforeEach(function () {
    Zoom = require('components/Zoom.js');
    component = React.createElement(Zoom);
  });

  it('should create a new instance of Zoom', function () {
    expect(component).toBeDefined();
  });
});
