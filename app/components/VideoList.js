var React = require('react');
var VideoListItem = require('./VideoListItem.js');

var VideoList = React.createClass ({
  render: function() {
    console.log(this.props.items);
    var videos = this.props.items.map(function(video, key) {
      return (
        <VideoListItem
          key={key}
          videoId={video.id.videoId}
          snippet={video.snippet}
          state={false}
        />
      );
    });

    return (
      <div className="left-negative-buffer">
        {videos}
      </div>
    );
  }
});

VideoList.propTypes = {
  data: React.PropTypes.array,
}

module.exports = VideoList;
