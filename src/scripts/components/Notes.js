'use strict';

const React = require('react/addons');
let model = require('./model');

require('styles/Notes.styl');

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
      <div dangerouslySetInnerHTML={this.createMarkup()} />
    );
  }
}

module.exports = Notes;
