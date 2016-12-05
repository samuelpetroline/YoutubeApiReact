var React = require('react');

var VideoList = React.createClass({
  render: function (){

    var videoListInfo = this.props.data ?
      (
        <div className="row">
          <div className="col-lg-4">
            <img className="square" src={this.props.data.items.snippet.thumbnails.high.url} alt="avatar" width="480" height="360">
            <h2>{this.props.data.items.snippet.title}</h2>
          </div>
        </div>
      ) : null;

    return videoListInfo;
  }

})

module.exports = VideoList;
