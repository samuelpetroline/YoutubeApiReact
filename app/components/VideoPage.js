var React = require('react');
var VideoDescription = require('./VideoDescription');
var VideoRelated = require('./VideoRelated');
var YoutubeVideoList = require('../services/YoutubeVideoList');

var VideoPage = React.createClass ({
  getInitialState: function() {
    return {
      active: false,
    };
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
      <div className="col-md-12">
        <div className="video-player row">
          <div className="col-md-7">
            <iframe
              className="video-border"
              key={this.props.videoId}
              width="560"
              height="315"
              src={"https://www.youtube.com/embed/" + this.props.videoId + "?enablejsapi=1"}
              frameBorder="0"
              allowFullScreen="false"
              style={this.props.style}
              onClick={this.handleClick}>
            </iframe>
          </div>
          <div className="col-md-5">
              <VideoRelated
                  style={this.props.style}
                  videoId={this.props.videoId}
              />
            </div>
          </div>
        </div>
    );
  }
});

VideoPage.propTypes = {
  style: React.PropTypes.object,
  videoId: React.PropTypes.string,
  snippet: React.PropTypes.object,
  updateVideoState: React.PropTypes.func.isRequired,
}

module.exports = VideoPage;
