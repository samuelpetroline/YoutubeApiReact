var React = require('react');
var SearchBar = require('./SearchBar.js');
var VideoList = require('./VideoList.js');

var Page = React.createClass({
  getInitialState: function() {
    return {
      videoList: [],
    }
  },

  updateVideoList: function(items) {
    this.setState({videoList: items});
  }

  render: function() {
    return (
      <div className="container">
        <SearchBar
         updateVideoList={this.updateVideoList}
        />
        <VideoList
          data={this.state.videoList}
        />
      </div>
    );
  }


});
