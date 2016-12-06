var React = require('react');

var VideoDescription = React.createClass ({

  toggleVideoAudio: function() {
    if (this.state.active) {
      console.log(this.props);
    }
  },

  render: function() {
    return (
      <div className="video-description" style={this.props.style}>
        <p>{this.props.description}</p>
      </div>
    );
  }
});

VideoDescription.propTypes = {
  description: React.PropTypes.string.isRequired,
  style: React.PropTypes.object,
}

module.exports = VideoDescription;
