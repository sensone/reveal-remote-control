'use strict';

const React = require('react/addons')
  , emit = require('./../sockets')
  , Control = require('./SmallControl');

let model = require('./../models/model');

class Zoom extends React.Component {
  constructor(opts) {
    super(model);
    this.state = { screenshot: model.get('screenshot') };

    model.on('change', function(m) {
      this.setState({screenshot: m.get('screenshot')});
    }, this);

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
          <div className="canvas pointer-zoomer" onTouchStart={this.handleClick}>
            <img className="pointer-zoomer-image" src={this.state.screenshot} />
          </div>
        </div>
        <Control size="small"/>
      </div>
    );
  }
}

module.exports = Zoom;

