'use strict';

const React = require('react/addons');

require('styles/Status.styl');

class Status extends React.Component{
  render() {
    return (
        <div>
          <p>Status: Connected!</p>
        </div>
      );
  }
}

module.exports = Status;

