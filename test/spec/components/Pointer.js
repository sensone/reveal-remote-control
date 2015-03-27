'use strict';

describe('Pointer', function () {
  var React = require('react/addons');
  var Pointer, component;

  beforeEach(function () {
    Pointer = require('components/Pointer.js');
    component = React.createElement(Pointer);
  });

  it('should create a new instance of Pointer', function () {
    expect(component).toBeDefined();
  });
});
