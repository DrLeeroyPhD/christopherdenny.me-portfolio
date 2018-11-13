/***************************************
            TIME FUNCTIONALITY
***************************************/
function setTime(){
  var currentDate = new Date();

  var amPM = "AM";

  var date = currentDate.getDate();
  var month = currentDate.getMonth();
  var year = currentDate.getFullYear();

  var hour = currentDate.getHours();
  var minute = currentDate.getMinutes();

  // Determine if AM or PM and format by 12-hour clock
  if(hour > 12) {
    hour = hour-12;
  }

  if(hour >= 12) {
    amPM = "PM";
  }

  // Help format time to turn things like 12:7 -> 12:07
  if(minute < 10){
    minute = "0" + minute.toString();
  } else if (minute < 1) {
    minute = "00";
  }

  var timeString = hour + ":" + minute + " " + amPM;
  var dateString = month + "/" +(date + 1) + "/" + year;

  document.getElementById("time").innerHTML = timeString;
  document.getElementById('date').innerHTML = dateString;

  // Check the time every 10 seconds
  setTimeout(setTime, 10000);
}
// Set the time on page load
setTime();
