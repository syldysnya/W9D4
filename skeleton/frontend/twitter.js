const FollowToggle = require('./follow_toggle.js');

$(function() {
  $("button.follow-toggle").each(function (idx, $el) {new FollowToggle($el);}), 
  $("button.follow-toggle").on("submit", e => {
    e.preventDefault();
    handleClick();
  })
  // $(),
})