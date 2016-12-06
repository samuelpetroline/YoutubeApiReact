var React = require('react');
var SearchBar = require('./SearchBar.js');
var VideoList = require('./VideoList.js');

var Page = React.createClass({
  getInitialState: function() {
    return {
      items: [],
    };
  },

  updateVideoList: function(items) {
    this.setState({items: items});
  },

  render: function() {
    return (
      <div className="container">
        <div id="search-bar" className="row top-buffer">
          <SearchBar
           updateVideoList={this.updateVideoList}
          />
        </div>
        <div id="video-list">
          <VideoList
            items={this.state.items}
          />
        </div>
      </div>
    );
  }
});

module.exports = Page;
