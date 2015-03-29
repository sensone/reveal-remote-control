'use strict';

const React = require('react/addons')
  , Control = require('./SmallControl')
  , emit = require('./sockets')
  , injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();

class Pointer extends React.Component {
  constructor(props) {
    super(props);

    React.initializeTouchEvents(true);
  }
  handleClick(e) {

    let event = e.touches[0];

    console.log(event);

    emit('pointer', {x: event.clientX, y: event.clientY, bounds: e.target.getBoundingClientRect()});
  }
  render() {
    return (
      <div>
        <div className="pointer-wrapper">
          <div className="canvas" onTouchStart={this.handleClick}>

          </div>
        </div>
        <Control size="small"/>
      </div>
    );
  }
}

module.exports = Pointer;
