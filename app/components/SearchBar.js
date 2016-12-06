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
      <div className="input">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input type="text" className="form-control" ref="keywords" placeholder="Pesquisar"/>
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <i className="glyphicon glyphicon-search"></i>
                </button>
              </div>
          </div>
        </form>
      </div>

    );
  }
});

SearchBar.propTypes = {
  updateVideoList: React.PropTypes.func.isRequired,
}

module.exports = SearchBar;
