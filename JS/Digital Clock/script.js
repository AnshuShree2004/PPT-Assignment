const display = document.getElementById("display");

setInterval(displayTime, 1000);
function displayTime() {
  let d = new Date();
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();

  hour = hour > 12 ? "0" + (hour % 12) : 12;

  min = min < 10 ? "0" + min : min;

  sec = sec < 10 ? "0" + sec : sec;

  display.innerHTML = hour + " : " + min + " : " + sec;
}
