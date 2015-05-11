'use strict';

const React = require('react/addons'),
  emit = require('./../sockets'),
  Control = require('./SmallControl');

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
    let event = e.touches[0],
      img = document.querySelector('.pointer-zoomer-image'),
      width = img.width,
      height = img.height,
      realWidth = img.naturalWidth,
      realHeight = img.naturalHeight,
      ratioHeight = realHeight / height,
      ratioWidth = realWidth / width,
      offsetLeft = img.offsetLeft,
      offsetTop = img.offsetTop,
      x = (event.pageX - offsetLeft) * ratioWidth,
      y = (event.pageY - offsetTop) * ratioHeight;

    console.log(x, y);

    emit('zoom', {x: x, y: y});
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

