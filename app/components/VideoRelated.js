var React = require('react');
var VideoDescription = require('./VideoDescription');
var YoutubeVideoList = require('../services/YoutubeVideoList');

var VideoRelated = React.createClass ({
  getInitialState: function() {
    return {
      active: false,
      related: [],
    };
  },

  componentWillReceiveProps: function(props) {
    YoutubeVideoList.getRelatedVideosByVideoId(props.videoId).then(function(response) {
      this.setState({related: response.data.items});
    }.bind(this));
  },

  handleClick: function () {
    this.setState({active : !this.state.active})
    this.props.updateVideoState();
    this.toggleVideoAudio();
  },

  toggleVideoAudio: function() {
    if (!this.state.active) {
      {/*
        console.log(this.props);
        pausar o iframe ao minimizá-lo
      */}
    }
  },

  render: function() {
    return (
      <div>
        <div className="col-md-6">
          <div className="row">
            <p className="lead" style={this.props.style}> Videos Relacionados: </p>
          </div>
        </div>
        <div className="col-md-6">
          {this.state.related.map(function(video, key) {
              console.log(video);
              return (
                  <div className="row left-buffer video-related">
                    <iframe
                        key={video.id.videoId}
                        width="150"
                        height="130"
                        src={"https://www.youtube.com/embed/" + video.id.videoId + "?enablejsapi=1"}
                        frameBorder="0"
                        allowFullScreen="false"
                        style={this.props.style}>
                      </iframe>
                  </div>
              );
            }.bind(this))}
        </div>
      </div>
    );
  }
});

VideoRelated.propTypes = {
  style: React.PropTypes.object,
  videoId: React.PropTypes.string,
}

module.exports = VideoRelated;
