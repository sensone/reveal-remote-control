'use strict';

const React = require('react/addons')
  , Control = require('./SmallControl');

class Pointer extends React.Component {
  render() {
    return (
      <div>
        <div className="pointer-wrapper">Content for Pointer</div>
        <Control size="small"/>
      </div>
    );
  }
}

module.exports = Pointer;
