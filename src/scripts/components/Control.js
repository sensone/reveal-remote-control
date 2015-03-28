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
        <p>Content for Control</p>
        <div>
          <button className="pure-button" onClick={this.handleClick}>Left</button>
        </div>
        <div>
          <button className="pure-button" onClick={this.handleClick}>Right</button>
        </div>
        <div>
          <button className="pure-button" onClick={this.handleClick}>Up</button>
        </div>
        <div>
          <button className="pure-button" onClick={this.handleClick.bind(this)}>Down {this.state.test}</button>
        </div>
      </div>
    );
  }
}

module.exports = Control;
