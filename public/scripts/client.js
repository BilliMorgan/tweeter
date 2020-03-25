/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = (tweets) => {
  //console.log(tweets)
  for (tweet of tweets){
    $("#tweets-container").append(createTweetElement(tweet))
  }
}

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
          ${tweet.content.text}
        </div>
        <footer>
          <span>${jQuery.timeago((tweet.created_at/1000)*1000)}</span>
          <div class="icon">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>
  `)
  return $tweet;
};

$(document).ready(function(){
  renderTweets(data);
});
