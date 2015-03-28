'use strict';

const React = require('react/addons');

require('styles/Menu.styl');

class Menu extends React.Component {
  render() {
    return (
      <div className="flex-container">
        <div className="flex-item">
          <a href="#/control" className="menu__link">Slides</a>
        </div>
        <div className="flex-item">
          <a href="#/notes" className="menu__link">Notes</a>
        </div>
        <div className="flex-item">
          <a href="#/pointer" className="menu__link">Pointer</a>
        </div>
        <div className="flex-item">
          <a href="#/audio" className="menu__link">Audio</a>
        </div>
        <div className="flex-item">
          <a href="#/zoom" className="menu__link">Zoom</a>
        </div>
      </div>
    );
  }
}

module.exports = Menu;

