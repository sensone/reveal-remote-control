'use strict';

var React = require('react/addons');

require('styles/Audio.styl');

var Audio = React.createClass({
  toggleAudioStream: () => {
    console.log('toggle audio stream!');
  },
  render: function () {
    return (
        <div>
          <p>Content for Audio</p>
          <button className="pure-button" onClick={this.toggleAudioStream}>Enable AUDIO STREAM!</button>
        </div>
      );
  }
});

module.exports = Audio;

