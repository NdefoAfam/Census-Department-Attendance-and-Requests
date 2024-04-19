function updateTime() {
    var currentTimeElement = document.getElementById("currentTime");
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var currentTimeString = hours + ":" + minutes + ":" + seconds;
    currentTimeElement.textContent = currentTimeString;

    // Set the value of the attendance time input field to the current time
    document.getElementById("attendanceTime").value = currentTimeString;
}

// Update time when the page loads
updateTime();

// Update time every second
setInterval(updateTime, 1000);
