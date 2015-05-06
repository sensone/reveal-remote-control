'use strict';

const React = require('react/addons')
  , Control = require('./SmallControl');


let model = require('./../models/model');

class Notes extends React.Component {
  constructor(props) {
    super(model);
    this.state = model.toJSON();

    model.on('change', function(model) {
      this.setState(model.toJSON());
    }, this);
  }
  createMarkup() {
    return {__html: this.state.notes};
  }
  render() {
    return (
      <div>
        <div className="notes-wrapper" dangerouslySetInnerHTML={this.createMarkup()} />
        <Control size="small"/>
      </div>
    );
  }
}

module.exports = Notes;
