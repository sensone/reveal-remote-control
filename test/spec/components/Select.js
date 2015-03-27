'use strict';

describe('Select', function () {
  var React = require('react/addons');
  var Select, component;

  beforeEach(function () {
    Select = require('components/Select.js');
    component = React.createElement(Select);
  });

  it('should create a new instance of Select', function () {
    expect(component).toBeDefined();
  });
});
