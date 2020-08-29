// settingup eventdate
let launchDate = new Date('Dec 24, 2020, 23:59:59');

// settingup timer to tick in every 1 second
let timer = setInterval(tick, 1000);

function tick() {
  // get current time
  let now = new Date().getTime();

  // get the difference in time to get the time until it reaches 0
  let t = launchDate - now;

  // check if the time is above 0
  if (t > 0) {
    // setting days, hours, minutes, seconds
    // algorithim to calculate days
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    // any number comes below 10 will come with '0', E.g. 1 = 01
    if (days < 10) { days = '0' + days; }

    // algorithim to calculate hours
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) { hours = '0' + hours; }

    // algorithim to calculate hours
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes < 10) { minutes = '0' + minutes; }

    // algorithim to calculate seconds
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    if (seconds < 10) { seconds = '0' + seconds; }

    // create tiem-string
    let time = `${days} days, ${hours} : ${minutes} : ${seconds}`;

    // set time in page header
    document.querySelector('.countdown').innerText = time;
  }
}