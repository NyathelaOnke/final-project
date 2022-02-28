const countDown = new Date("Apr 3, 2023 13:00:00").getTime();
let theInterval = setInterval(() => {
  const theTime = new Date().getTime();
  const remainingTime = countDown - theTime;
  let theDays = Math.round(Math.floor(remainingTime / (1000 * 60 * 60 * 24)));
  let theHours = Math.round(
    Math.floor(remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let theMinutes = Math.round(
    Math.floor(remainingTime % (1000 * 60 * 60)) / (1000 * 60)
  );
  let theSeconds = Math.round(Math.floor(remainingTime % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = theDays + " days";
  document.getElementById("hour").innerHTML = theHours + " hours";
  document.getElementById("minutes").innerHTML = theMinutes + " minutes";
  document.getElementById("seconds").innerHTML = theSeconds + " seconds";
  console.log(theDays, theHours, theMinutes, theSeconds);
}, 1000);
