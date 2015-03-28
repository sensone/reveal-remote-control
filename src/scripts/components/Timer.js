'use strict';

const React = require('react/addons')
  , model = require('./model');

require('styles/Timer.styl');

class Timer extends React.Component {
  constructor(props) {
    super(props);

    let now = Date.now();

    model.on('change', function(model) {
      console.log('current slide name: ' + model.get('name'));
      console.log('prev : ' + this.state.prevSlideName);

      if (model.get('name') !== this.state.prevSlideName) {
        this.changeSlide();

        this.setState({
          prevSlideName: model.get('name')
        });
      }
    }, this);

    this.state = {
      start: now,
      slideStart: now
    };

    this.tick = this.tick.bind(this);
    this.getFormattedDate = this.getFormattedDate.bind(this);
    this.changeSlide = this.changeSlide.bind(this);

    setInterval(this.tick , 1000);
  }

  getFormattedDate(milliseconds) {
    let seconds = milliseconds / 1000 % 60
      , minutes = (milliseconds / (1000*60)) % 60;

    minutes = Math.floor(minutes);
    seconds = Math.floor(seconds);

    return (minutes < 10 ? '0' + minutes : minutes) + ' : ' + (seconds < 10 ? '0' + seconds : seconds);
  }

  tick() {
    let now = Date.now();

    this.setState({
      presentationTime: this.getFormattedDate(now - this.state.start),
      slideTime: this.getFormattedDate(now - this.state.slideStart)
    });
  }

  changeSlide() {
    this.setState({
      slideStart: Date.now()
    });
  }

  render() {
    return (
      <div className="row timer-wrapper">
        <div className="col-xs-6 timer-row">
          <span>Presentation:</span> {this.state.presentationTime}
        </div>
        <div className="col-xs-6 timer-row">
          <span>Slide:</span> {this.state.slideTime}
        </div>
      </div>
    );
  }
}

module.exports = Timer;

