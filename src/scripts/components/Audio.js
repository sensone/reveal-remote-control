'use strict';

const React = require('react/addons');

require('styles/Audio.styl');

class Audio extends React.Component {
  toggleAudioStream() {
    console.log('toggle audio stream!');
  }

  render() {
    return (
      <div>
        <p>Content for Audio</p>
        <button className="pure-button" onClick={this.toggleAudioStream}>Enable AUDIO STREAM!</button>
      </div>
    );
  }
}

module.exports = Audio;

