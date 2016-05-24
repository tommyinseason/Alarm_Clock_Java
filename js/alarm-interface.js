var alarmClock = require('./../js/alarm-clock.js').alarmClock;

$(document).ready(function(){
  $('#alarm-clock').submit(function(event){
    event.preventDefault();
    var alarm = $('#alarm').val();
    $('#alarm-clock').hide();
    $('#solution').prepend('<p>Your alarm has been set for ' + alarm + '</p>');
    alarmClock(alarm);
  });
});
