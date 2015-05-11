'use strict';

const React = require('react/addons'),
  emit = require('./../sockets'),
  injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

let model = require('./../models/model');

class Control extends React.Component {
  constructor(props) {
    super(model);
    this.state = model.toJSON();

    model.on('change', function (model) {
      this.setState(model.toJSON());
    }, this);
  }

  handleClick(e) {
    let target = e.target;

    if (target.nodeName !== 'DIV') {
      target = target.parentElement;
    }

    let action = target.dataset.action;

    console.log(action);

    model.set('test', model.get('test') + 1);
    emit(action, {});
  }

  render() {
    return (
      <div className={this.props.size}>
        <div className="row row--up">
          <div data-action="up" className={this.state.buttons.up} onTouchTap={this.handleClick}>
            <i className="fa fa-chevron-up"></i>
          </div>
        </div>

        <div className="row row--left-right">
          <div  data-action="left" className={'row--left ' + this.state.buttons.left} onTouchTap={this.handleClick}>
            <i className="fa fa-chevron-left"></i>
          </div>

          <div data-action="right" className={'row--right ' + this.state.buttons.right} onTouchTap={this.handleClick}>
            <i className="fa fa-chevron-right"></i>
          </div>
        </div>

        <div className="row row--down">
          <div data-action="down" className={this.state.buttons.down} onTouchTap={this.handleClick}>
            <i className="fa fa-chevron-down"></i>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Control;
