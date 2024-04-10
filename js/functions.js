function myFunction() {
    if (seconds > 1) {
        seconds--;
        document.getElementById("countdown").innerText = seconds;
    } else {
        clearInterval(count);
        document.getElementById("countdown").innerHTML = "Buon anno!";
    }
}
