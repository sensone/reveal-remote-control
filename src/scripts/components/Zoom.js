'use strict';

const React = require('react/addons')
  , Control = require('./SmallControl');

class Zoom extends React.Component {
  render() {
    return (
      <div>
        <div className="zoom-wrapper">Content for Zoom</div>
        <Control size="small"/>
      </div>
    );
  }
}

module.exports = Zoom;

