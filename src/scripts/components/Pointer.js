'use strict';

let React = require('react/addons');

require('styles/Pointer.styl');

let Pointer = React.createClass({
  render: function () {
    return (
        <div>
          <p>Content for Pointer</p>
        </div>
      );
  }
});

module.exports = Pointer;
