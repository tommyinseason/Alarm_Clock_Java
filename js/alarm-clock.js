exports.alarmClock = function(alarm) {
    setInterval( function(){if (moment().format("HH:mm") === alarm) {
      alert("WAKE UP");
      return;
    }
  }, 1000);
};
