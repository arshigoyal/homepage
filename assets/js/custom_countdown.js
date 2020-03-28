/** code by webdevtrick ( https://webdevtrick.com ) **/
const year = new Date().getFullYear();
const choosenDate = new Date(year, 2, 29, 21, 30).getTime();

let countdown = setInterval(function() {

  const today = new Date().getTime();

  const diff = choosenDate - today;
    if (diff < 0) {
        document.getElementById('isTimeLeft').style.display = 'none';
        document.getElementById('isLive').style.display = 'block';
    } 

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
  document.getElementById("countdown").innerHTML =
    "<div class=\"days\"> \
  <div class=\"c-number\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"c-number\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"c-number\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"c-number\">" + seconds + "</div>seconds</div> \
<div class=\"left\">LEFT</div>\
</div>";

}, 1000);