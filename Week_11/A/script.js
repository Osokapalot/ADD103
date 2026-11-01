

const switchButton = document.getElementById("switchButton");
const changeText = document.getElementById("changeText");
const message = document.getElementById("message");


switchButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        switchButton.textContent = "Turn On Lights";
    } else {
        switchButton.textContent = "Turn Off Lights";
    }
});


changeText.addEventListener("click", function() {
    message.textContent = "You successfully changed the text with JavaScript!";
});
