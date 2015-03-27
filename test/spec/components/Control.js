'use strict';

describe('Control', function () {
  var React = require('react/addons');
  var Control, component;

  beforeEach(function () {
    Control = require('components/Control.js');
    component = React.createElement(Control);
  });

  it('should create a new instance of Control', function () {
    expect(component).toBeDefined();
  });
});
