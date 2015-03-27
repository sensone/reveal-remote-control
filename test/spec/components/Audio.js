'use strict';

describe('Audio', function () {
  var React = require('react/addons');
  var Audio, component;

  beforeEach(function () {
    Audio = require('components/Audio.js');
    component = React.createElement(Audio);
  });

  it('should create a new instance of Audio', function () {
    expect(component).toBeDefined();
  });
});
