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
    let event = e.touches[0]
      , img = document.querySelector('.pointer-zoomer-image')
      , width = img.width
      , height = img.height
      , realWidth = img.naturalWidth
      , realHeight = img.naturalHeight
      , ratioHeight = realHeight / height
      , ratioWidth = realWidth / width
      , offsetLeft = img.offsetLeft
      , offsetTop = img.offsetTop
      , x = (event.pageX - offsetLeft) * ratioWidth
      , y = (event.pageY - offsetTop) * ratioHeight;

    console.log(x, y);
    emit('pointer', {x: x, y: y});
  }
  render() {
    return (
      <div>
        <div className="pointer-wrapper">
          <div className="canvas pointer-zoomer" >
            <img className="pointer-zoomer-image" src={this.state.screenshot} onTouchStart={this.handleClick} />
          </div>
        </div>
        <Control size="small"/>
      </div>
    );
  }
}

module.exports = Pointer;
