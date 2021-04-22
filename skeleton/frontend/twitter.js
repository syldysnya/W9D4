const FollowToggle = require('./follow_toggle.js');

// $(function() {
//   // $(),
// })

const setEventHandlers = () => {
  $("button.follow-toggle").each(function (idx, $el) {new FollowToggle($el);}),

  $("button.follow-toggle").on("click", (e) => {
    e.preventDefault();
    debugger
    let toggle = FollowToggle.find(e.currentTarget)
    toggle.handleClick();
  })

}

$(() => {
  setEventHandlers();
});