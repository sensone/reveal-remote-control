'use strict';

const React = require('react/addons');

require('styles/Menu.styl');

class Menu extends React.Component {
  render() {
    return (
      <ul className="menu">
        <li className="menu__item">
          <a href="#/control" className="menu__link">Slides</a>
        </li>
        <li className="menu__item">
          <a href="#/notes" className="menu__link">Notes</a>
        </li>
        <li className="menu__item">
          <a href="#/pointer" className="menu__link">Pointer</a>
        </li>
        <li className="menu__item">
          <a href="#/audio" className="menu__link">Audio</a>
        </li>
        <li className="menu__item">
          <a href="#/zoom" className="menu__link">Zoom</a>
        </li>
      </ul>
    );
  }
}

module.exports = Menu;

