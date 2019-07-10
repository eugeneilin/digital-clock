// Make the clock work
function clock() {
  const fullDate = new Date();
  let hours = fullDate.getHours();
  let mins = fullDate.getMinutes();
  let secs = fullDate.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }

  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minute').innerHTML = ':' + mins;
  document.getElementById('second').innerHTML = ':' + secs;
}

setInterval(clock, 1000);

// Show a different greeting for a different time of day
function greetingRules() {
  const fullDate = new Date();
  let hours = fullDate.getHours();
  const goodMorning = 'Good morning!';
  const goodAfternoon = 'Good afternoon!';
  const goodEvening = 'Good evening';
  const goodNight = 'Good night...';

  if (hours < 12) {
    document.getElementById('greeting').innerHTML = goodMorning;
  }
  if (hours < 17) {
    document.getElementById('greeting').innerHTML = goodAfternoon;
  }
  if (hours < 21) {
    document.getElementById('greeting').innerHTML = goodEvening;
  }
  if (hours < 24) {
    document.getElementById('greeting').innerHTML = goodNight;
  }
}

setInterval(greetingRules, 1000);
