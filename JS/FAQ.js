const feedback = document.getElementById("feedback-textarea");
const sendButton = document.getElementById("feedback-button");
const alertContainer = document.getElementById("alert-container");

sendButton.addEventListener("click", () => {
    //creating p tag to create an alert
    const alert = document.createElement("p");
    //adding alert-text class to our p tag
    alert.classList.add("alert-text");
    //adding text to alert
    alert.textContent = "Thanks for your feedback!";
    //adding alert to html
    alertContainer.appendChild(alert);
    //the code inside of setTimeout runs after 2 seconds
    setTimeout(function() {
        //setting opacity to 0 after 2 seconds
        alert.style.opacity = 0;
    }, 2000);
    //the code inside of setTimeout runs after 5.2 seconds
    setTimeout(function() {
        //removing alert from html
        alert.remove();
    }, 5200);
});