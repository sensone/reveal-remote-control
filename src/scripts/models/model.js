'use strict';

const Backbone = require('backbone');

let params, model;

params = {
  buttons: {
    left: 'invisible',
    right: 'invisible',
    up: 'invisible',
    down: 'invisible'
  },
  name: 'no name',
  notes: '<p> no notes </p>',
  test: 0,
  screenshot: undefined
};

model = new Backbone.Model(params);

module.exports = model;
