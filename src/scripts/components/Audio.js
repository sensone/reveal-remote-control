'use strict';

const React = require('react/addons');

class Audio extends React.Component {
  toggleAudioStream() {
    console.log('toggle audio stream!');

    var audioEl = document.getElementById('live_audio');

    var aCtx,
      analyser,
      microphone;

    navigator.webkitGetUserMedia({audio:true},
      function(stream) {
        console.log(stream);

        aCtx = new AudioContext();
        analyser = aCtx.createAnalyser();
        microphone = aCtx.createMediaStreamSource(stream);
        microphone.connect(analyser);
        analyser.connect(aCtx.destination);

      },
      () => {
        console.warn("Error getting audio stream from getUserMedia")
      }
    );
  }

  render() {
    return (
      <div>
        <p>Content for Audio</p>
        <audio id="live_audio" autoplay></audio>
        <button className="pure-button" onClick={this.toggleAudioStream}>Enable AUDIO STREAM!</button>
      </div>
    );
  }
}

module.exports = Audio;

