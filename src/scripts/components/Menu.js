'use strict';

const React = require('react/addons');

class Menu extends React.Component {
  render() {
    return (
      <div className="menu-wrapper">
        <ul className="menu">
          <li className="menu__item menu__item--active">
            <a href="#/control" className="menu__link">Slides</a>
          </li>
          <li className="menu__item">
            <a href="#/notes" className="menu__link">Notes</a>
          </li>
          <li className="menu__item">
            <a href="#/pointer" className="menu__link">Pointer</a>
          </li>
          <li className="menu__item">
            <a href="#/zoom" className="menu__link">Zoom</a>
          </li>
        </ul>
      </div>
    );
  }
}

/*
<li className="menu__item">
  <a href="#/audio" className="menu__link">Audio</a>
</li>
<li className="menu__item">
<a href="#/zoom" className="menu__link">Zoom</a>
</li>
*/


module.exports = Menu;

