'use strict';

const React = require('react/addons')
  , Control = require('./SmallControl')
  , emit = require('./../sockets')
  , injectTapEventPlugin = require('react-tap-event-plugin');

let model = require('./../models/model');

injectTapEventPlugin();

class Pointer extends React.Component {
  constructor(props) {
    super(model);

    this.state = { screenshot: model.get('screenshot') };

    model.on('change', function(m) {
      this.setState({screenshot: m.get('screenshot')});
    }, this);

    React.initializeTouchEvents(true);
  }
  handleClick(e) {

    let event = e.touches[0];

    emit('pointer', {x: event.clientX, y: event.clientY, bounds: e.target.getBoundingClientRect()});
  }
  render() {
    return (
      <div>
        <div className="pointer-wrapper">
          <div className="canvas pointer-zoomer" onTouchStart={this.handleClick}>
            <img className="pointer-zoomer-image" src={this.state.screenshot} />
          </div>
        </div>
        <Control size="small"/>
      </div>
    );
  }
}

module.exports = Pointer;
