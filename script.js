// Check if a countdown end date is already stored in local storage
var countDownDate = localStorage.getItem("countDownDate");

// If no countdown end date is found, set it to 69 days from now
if (!countDownDate) {
    countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 69);
    localStorage.setItem("countDownDate", countDownDate);
} else {
    countDownDate = new Date(countDownDate);
}

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="days", "hours", "minutes", "seconds"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);
