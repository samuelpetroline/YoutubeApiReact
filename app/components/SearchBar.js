var React = require('react');
var YoutubeVideoList = require('../services/YoutubeVideoList');

var SearchBar = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    YoutubeVideoList.getVideoListByKeyword(this.refs.keywords.value).then(function(response) {
      this.props.updateVideoList(response.data.items);
    }.bind(this));
  },
  render: function() {
    return (
      <div className="input-group">
        <form className= "form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control form-control-lg" ref="keywords" placeholder="Pesquisar "/>
          </div>
          <button type="submit" className="btn btn-default">Go!</button>
        </form>
      </div>

    );
  }
});

module.exports = SearchBar;
