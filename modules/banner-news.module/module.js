function getCountdown(targetTimestamp, currentTimestamp) {
    if (typeof currentTimestamp === 'undefined') {
        currentTimestamp = Date.now();
    }
    var timeDiff = targetTimestamp - currentTimestamp;
    if (timeDiff <= 0) {
        return [0, 0, 0, 0];
    }
    var totalSeconds = Math.floor(timeDiff / 1000);
    var days = Math.floor(totalSeconds / (24 * 60 * 60));
    var hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    var minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    var seconds = totalSeconds % 60;
    return [days, hours, minutes, seconds];
}
var summitCountdownWrapper = document.querySelector("#summitCountdownWrapper")
if (summitCountdownWrapper) {
  var targetTime = new Date('2025-09-10T08:00:00-08:00').getTime();
  setInterval(() => {
    var result = getCountdown(targetTime)
    var offset = 0
    if (result[0] <= 2) {
      document.querySelector('#summitCountdown .unit1').textContent = 'HOURS'
      document.querySelector('#summitCountdown .unit2').textContent = 'MINS'
      document.querySelector('#summitCountdown .unit3').textContent = 'SECS'
      result[1] = result[1] + 24 * result[0]
      offset = 1
    } else {
      document.querySelector('#summitCountdown .unit1').textContent = 'DAYS'
      document.querySelector('#summitCountdown .unit2').textContent = 'HOURS'
      document.querySelector('#summitCountdown .unit3').textContent = 'MINS'
    }
    document.querySelector('#summitCountdown .time1').textContent = result[offset]
    document.querySelector('#summitCountdown .time2').textContent = result[offset + 1] < 10 ? '0' + result[offset + 1] : result[offset + 1]
    document.querySelector('#summitCountdown .time3').textContent = result[offset + 2] < 10 ? '0' + result[offset + 2] : result[offset + 2]
  }, 1000)
  
}