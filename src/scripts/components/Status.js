'use strict';

const React = require('react/addons');

class Status extends React.Component{
  render() {
    return (
      <div className="status">
        <span className="status__text">Slides list</span>
        <span className="status__text status__text--right">Status: Connected!</span>
      </div>
    );
  }
}

module.exports = Status;

