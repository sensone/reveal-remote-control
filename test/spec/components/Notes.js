'use strict';

describe('Notes', function () {
  var React = require('react/addons');
  var Notes, component;

  beforeEach(function () {
    Notes = require('components/Notes.js');
    component = React.createElement(Notes);
  });

  it('should create a new instance of Notes', function () {
    expect(component).toBeDefined();
  });
});
