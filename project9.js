function countdownTimer(targetDate) {
    var targetTime = new Date(targetDate).getTime();
    var timerInterval = setInterval(function () {
        var currentTime = new Date().getTime();
        var timeRemaining = targetTime - currentTime;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            console.log("Countdown timer has ended!");
        }
        else {
            var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            console.log("Time Remaining: ".concat(days, " days, ").concat(hours, " hours, ").concat(minutes, " minutes, ").concat(seconds, " seconds"));
        }
    }, 1000);
}
var targetDate = "2023-12-31T23:59:59Z";
countdownTimer(targetDate);
