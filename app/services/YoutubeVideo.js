var axios = require('axios');
var API_KEY = 'AIzaSyCETmhYq-ed314VpSWeRuMbAvNNlMQnS8w	';

var YoutubeVideoList = {

  getVideoListByKeyword: function(keyword){
    return axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=' + keyword '&type=video&key=' + API_KEY);
  }

}
