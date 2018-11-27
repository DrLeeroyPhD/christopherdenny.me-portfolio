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
  if(hour >= 12) {
    amPM = "PM";
  }

  if(hour > 12) {
    hour = hour-12;
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



/***************************************
        FULLSCREEN FUNCTIONALITY
***************************************/
function fullscreenToggle() {
  // Checks if currently in fullscreen mode
	var full_screen_element = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null;

	// If no element is in full-screen
	if(full_screen_element === null)
		goFullscreen();
	else
		exitFullscreen();
}

function goFullscreen() {
  var element = document.querySelector("body");

	if(element.requestFullscreen)
		element.requestFullscreen();
	else if(element.mozRequestFullScreen)
		element.mozRequestFullScreen();
	else if(element.webkitRequestFullscreen)
		element.webkitRequestFullscreen();
	else if(element.msRequestFullscreen)
		element.msRequestFullscreen();
}

function exitFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}


/***************************************
        WYSIWYG EDITOR CALL
***************************************/
function activateWord() {
    setTimeout(function () {
      CKEDITOR.replace( 'editor', {


        resize_enabled: false,
        removePlugins: 'elementspath',
        height: '90%',

      // Determines what tools should be available in the toolbar
			toolbar: [

        [ 'Source', '-', 'Print', 'Maximize', '-', 'NumberedList', 'BulletedList', '-', 'Link', '-' ],
    		[ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ],
        '/',
    		[ 'Font', 'FontSize' ],
        [ 'Bold', 'Italic', 'Underline' ],
    		[ 'TextColor', 'BGColor' ],

			]
		} );
  }, 5);
}
