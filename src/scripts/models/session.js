'use strict';

const Backbone = require('backbone');

let params, session;

params = {
  id: undefined,
  token: undefined
};

session = new Backbone.Model(params);

module.exports = session;
