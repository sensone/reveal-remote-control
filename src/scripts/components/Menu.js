'use strict';

const React = require('react/addons'),
  Router = require('react-router'),
  Link = Router.Link;

class Menu extends React.Component {
  render() {
    return (
      <div className="menu-wrapper">
        <ul className="menu">
          <li className="menu__item">
            <Link to="control" className="menu__link">Slides</Link>
          </li>
          <li className="menu__item">
            <Link to="notes" className="menu__link">Notes</Link>
          </li>
          <li className="menu__item">
            <Link to="pointer" className="menu__link">Pointer</Link>
          </li>
          <li className="menu__item">
            <Link to="zoom" className="menu__link">Zoom</Link>
          </li>
        </ul>
      </div>
    );
  }
}

module.exports = Menu;
