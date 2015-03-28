'use strict';

const React = require('react/addons')
  , emit = require('./sockets');

let model = require('./model');

require('styles/Control.styl');

class Control extends React.Component {
  constructor(props) {
    super(model);
    this.state = model.toJSON();

    model.on('change', function(model) {
      this.setState(model.toJSON());
    }, this);
  }
  handleClick(e) {
    let action = e.target.firstChild.nodeValue.toLowerCase();

    model.set('test', model.get('test') + 1);
    emit(action , {});
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4 col-xs-4 col-md-offset-4 col-xs-offset-4">
            <button className={'btn btn-primary ' + this.state.buttons.up} onClick={this.handleClick}>Up</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-xs-4">
            <button className={'btn btn-primary ' + this.state.buttons.left} onClick={this.handleClick}>Left</button>
          </div>
          <div className="col-md-4 col-xs-4 col-xs-offset-4 col-md-offset-4">
            <button className={'btn btn-primary ' + this.state.buttons.right} onClick={this.handleClick}>Right</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-xs-4 col-xs-offset-4 col-md-offset-4">
            <button className={'btn btn-primary ' + this.state.buttons.down} onClick={this.handleClick.bind(this)}>Down</button>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Control;
