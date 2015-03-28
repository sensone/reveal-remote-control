'use strict';

describe('Timer', function () {
  var React = require('react/addons');
  var Timer, component;

  beforeEach(function () {
    Timer = require('components/Timer.js');
    component = React.createElement(Timer);
  });

  it('should create a new instance of Timer', function () {
    expect(component).toBeDefined();
  });
});
