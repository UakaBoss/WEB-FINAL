//creating p tag to create an alert
const submitButton = document.getElementById("form-button");
const alertText = document.createElement("p");

//function that happens when clicking submit button

submitButton.addEventListener("click", () => {
    const formEmail = document.getElementById("form-input");
    const formTextarea = document.getElementById("textarea");
    const formValue = formEmail.value;
    //checking if there are @ and . in our email input field
    if (!formValue.includes("@") || !formValue.includes(".")) {
        alertFail();
    }
    else {
        //removing text from input and running alertSuccess function
        alertText.remove();
        formEmail.value = "";
        formTextarea.value = "";
        alertSuccess();
    }       
});

//if we failed the requrements
function alertFail() {
    //alert text
    alertText.textContent = "email you wrote doesn't satisfy";
    alertText.classList.remove("alertSuccess");
    alertText.classList.add("alertFail");
    const emailContainer = document.getElementById("form-email-container");
    //adding alert text to html
    emailContainer.append(alertText);
}

//if we successed the requirements
function alertSuccess() {
    //alert text
    alertText.textContent = "thanks for sharing with contact";
    alertText.classList.remove("alertFail");
    alertText.classList.add("alertSuccess");
    const emailContainer = document.getElementById("form-email-container");
    //adding alert text to html
    emailContainer.append(alertText);
}