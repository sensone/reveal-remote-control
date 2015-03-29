'use strict';

const React = require('react/addons')
  , emit = require('./sockets')
  , Control = require('./SmallControl');

class Zoom extends React.Component {
  constructor(opts) {
    super(opts);

    React.initializeTouchEvents(true);
  }
  handleClick(e) {

    let event = e.touches[0];

    console.log(event);

    emit('zoom', {x: event.clientX, y: event.clientY, bounds: e.target.getBoundingClientRect()});
  }
  render() {
    return (
      <div>
        <div className="zoom-wrapper">
          <div className="canvas" onTouchStart={this.handleClick}></div>
        </div>
        <Control size="small"/>
      </div>
    );
  }
}

module.exports = Zoom;

