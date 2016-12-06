var React = require('react');
var VideoPage = require('./VideoPage');
var VideoDescription = require('./VideoDescription');

const styles = {
  active: {
    display: 'inherit'
  },
  inactive: {
    display: 'none'
  }
};

var VideoListItem = React.createClass ({
  getInitialState: function() {
    return {
      active: false,
    };
  },

  handleClick: function () {
    /*console.log(this.props.videoId);*/
    this.toggle();
  },

  toggle: function(){
    this.setState({
      active: !this.state.active
    });
  },

  updateVideoState: function(){
    this.setState({style: this.state.active ? styles.active : styles.inactive});
  },

  render: function() {
    const stateStyle = this.state.active ? styles.active : styles.inactive;

    return (
      <div key={this.props.videoId} className="row top-buffer" onClick={this.handleClick} width="300" height="180">
        <div className="col-md-12">
          <div className="col-md-4" >
            <img className="thumbnail"
              src={this.props.snippet.thumbnails.high.url} alt="thumbnail" width="300" height="180"
            />
          </div>
          <div className="col-md-8 caption title-border top-buffer h-100" >
            <h4 className="video-title">{this.props.snippet.title}</h4>
            <VideoDescription
              className="video-description lead"
              description={this.props.snippet.description}
            />
          </div>
        </div>
        <div className="video-player top-buffer row left-buffer">
            <VideoPage
                style={stateStyle}
                snippet={this.props.snippet}
                videoId={this.props.videoId}
                updateVideoState={this.updateVideoState}
              />
          </div>
      </div>
    );
  }
});

VideoListItem.propTypes = {
  videoId: React.PropTypes.string,
  snippet: React.PropTypes.object,
  state: React.PropTypes.bool,
}

module.exports = VideoListItem;
