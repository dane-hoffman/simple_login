//Variables
const loginMessage = String `Please enter your credentials:`;
const input = prompt (loginMessage);
const errorMessage = String `Not Authorized`;
const successMessage = String `Access Granted`;
const pageHeader = `Hello World`;

//Constructor?
const displayText = () => {
    const messageSection = document.getElementById("pageHeader");
    messageSection.innerHTML = pageHeader;
}

window.addEventListener(`load`, displayText);

const userIdCheck = (input) => {
    if (input === `Dane`){
        console.log(successMessage);
    }
    else {
        console.log(errorMessage);
    }
}

userIdCheck(input);