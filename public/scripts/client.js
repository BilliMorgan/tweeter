/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}


const renderTweets = (tweets) => {
$("#tweets-container").html("")
  for (tweet of tweets) {
    $("#tweets-container").prepend(createTweetElement(tweet))
  }
}
//need to add escape to each user's inputs.
createTweetElement = (tweet) => {
  let $tweet = $("<article>").addClass("tweet");
  $tweet.html(`
  <header>
          <div class="top-header">
            <img src=${tweet.user.avatars}>${tweet.user.name}</i>
          </div>
          <div class="top-header">${tweet.user.handle}</div>
        </header>
        <div id="tweet-text">
          ${escape(tweet.content.text)}
        </div>
        <footer>
          <span>${jQuery.timeago((tweet.created_at / 1000) * 1000)}</span>
          <div class="icon">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>
  `)
  return $tweet;
};


const loadTweets = () => {
  $.get("/tweets", function (data) {
    renderTweets(data)
  })
}

const clearForm = () => {
  $("#tweet-text").val("")
  $('.counter').text(140)
}


$(document).ready(function () {
  //renderTweets(data);
  loadTweets();

  $("#form").submit(function (event) {
    event.preventDefault();
    let data = $("#form").serialize()

    if($('#tweet-text').val() === "" || $('#tweet-text').val() === null ){
      alert("Enter your tweet, please")
    } 
    else if($('.counter').val() <= 0 ){
      alert("Your tweet exceeds maximum length, please shorten it up to 140 characters!")
    }else {
    $.post("/tweets", data)
      .done(function(){
        
        loadTweets();
        clearForm();
      
      })
    }
  });
});

