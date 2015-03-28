'use strict';

const React = require('react/addons');

require('styles/Status.styl');

class Status extends React.Component{
  render() {
    return (
        <div className="label label-success">
          Status: Connected!
        </div>
      );
  }
}

module.exports = Status;

