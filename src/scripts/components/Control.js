'use strict';

const React = require('react/addons')
  , emit = require('./sockets');

require('styles/Control.styl');

class Control {
  handleClick(e) {
    let action = e.target.firstChild.nodeValue.toLowerCase();

    console.log(action);

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
          <button className="pure-button" onClick={this.handleClick}>Down</button>
        </div>
      </div>
    );
  }
}

module.exports = Control;

