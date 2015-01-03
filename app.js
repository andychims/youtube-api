
$(document).ready(function(){


// $(function(){
  $('#search-form').submit(function(event){
	    event.preventDefault();

	    var searchTerm = $('#query').val();

	    getRequest(searchTerm);
  
  });
// })



function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    key: 'AIzaSyAx4ypvxia6SqmEZy8T5Owaon-MZmKvXAc',
    q: searchTerm
  };
  url = 'https://www.googleapis.com/youtube/v3/search'

  $.getJSON(url, params, function(data){
    showResults(data.items);
    console.log(data.items[1].snippet.thumbnails.medium.url);
  });
}


function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    var thumb = value.snippet.thumbnails.medium.url;
    var vidUrl = 'https://www.youtube.com/watch?v=' + value.id.videoId;
    var channelUrl = 'https://www.youtube.com/channel/' + value.id.channelId;
    $(function(){
      if(value.id.videoId) {theUrl = vidUrl} else {theUrl = channelUrl};
    });
    var theTitle = value.snippet.title;
    html += '<a href="' + theUrl + '">' + '<div class="thumbs"><p>' + theTitle + ':</p><img width="200px" src="' + thumb + '"></div></a>';
    console.log(index + thumb);
  });
  $('#search-results').html(html);
}








});
