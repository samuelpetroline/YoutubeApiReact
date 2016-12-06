var axios = require('axios');
var API_KEY = 'AIzaSyCETmhYq-ed314VpSWeRuMbAvNNlMQnS8w';

var YoutubeVideoList = {

  getVideoListByKeyword: function(keyword){
    return axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=' + keyword + '&type=video&key=' + API_KEY);
  },

  getRelatedVideosByVideoId: function(videoId) {
    console.log('https://www.googleapis.com/youtube/v3/search?part=id%2C+snippet&maxResults=2&relatedToVideoId='+ videoId + '&type=video&key=' + API_KEY);
    return axios.get('https://www.googleapis.com/youtube/v3/search?part=id%2C+snippet&maxResults=2&relatedToVideoId='+ videoId + '&type=video&key=' + API_KEY);

  }

}

module.exports = YoutubeVideoList;
