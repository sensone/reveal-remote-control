'use strict';

describe('Status', function () {
  var React = require('react/addons');
  var Status, component;

  beforeEach(function () {
    Status = require('components/Status.js');
    component = React.createElement(Status);
  });

  it('should create a new instance of Status', function () {
    expect(component).toBeDefined();
  });
});
