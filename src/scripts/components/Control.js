'use strict';

var React = require('react/addons');
var emit = require('./sockets');

require('styles/Control.styl');

var Control = React.createClass({
    handleClick: function (e) {
        var action = e.target.firstChild.nodeValue.toLowerCase();

        console.log(action);

        emit(action, {});
    },
    render: function () {
        return (
            <div>
                <p>Content for Control</p>
                <div>
                    <button className="pure-button" onClick={this.handleClick}>Left</button>
                </div>
                <div>
                    <button className="pure-button" onClick={this.handleClick}>Right</button>
                </div>
                <div>
                    <button className="pure-button" onClick={this.handleClick}>Up</button>
                </div>
                <div>
                    <button className="pure-button" onClick={this.handleClick}>Down</button>
                </div>
            </div>
        );
    }
});

module.exports = Control;

