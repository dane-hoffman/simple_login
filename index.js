//Variables
const errorMessage = String `Not Authorized`;
const successMessage = String `Access Granted`;
const input = prompt (`Please enter your credentials:`);

//Define Functions
const displayText = () => {
    const messageSection = document.getElementById("pageHeader");
    messageSection.innerHTML = pageHeader;
    //if- the input is equal to 'Dane', print 'successMessage'
    if (input === `Dane`)
    messageSection.innerHTML = successMessage;
    //if- the input does is not equal to 'Dane, print 'errorMessage
    else {
        messageSection.innerHTML = errorMessage;
    }
    
}

window.addEventListener(`load`, displayText);
