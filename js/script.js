document.addEventListener('DOMContentLoaded', () => {


    //setting up  main variables
  const selectJob = document.getElementById('title');
  const otherJobTitle = document.getElementById('other-title');
  const design = document.getElementById('design');
  const shirtColor = document.getElementById('color');
  const activities = document.querySelectorAll('input[type=checkbox]');
  const activity = document.querySelector('.activities');
  const paymentType = document.getElementById('payment');
 const register = document.getElementsByTagName("button")[0];
  const creditCard = document.getElementById('credit-card');
  const paypal = creditCard.nextElementSibling;
  const bitcoin = paypal.nextElementSibling;
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("mail");
  const ccInput = document.getElementById("cc-num");
  const zipInput = document.getElementById("zip");
  const cvvInput = document.getElementById("cvv");




//by default, the other job text field is not displayed
otherJobTitle.style.display = 'none';

  // show the your job role text input box on changing selection value
  title.addEventListener('change', (e) => {
    if(selectJob.options[selectJob.selectedIndex].value === 'other'){
        otherJobTitle.style.display = 'block';
    };
  })

//changing color options based on design choice

function filterChoice() {
    if (design.value === 'js puns') { //if they choose JS Puns, only these color show
        for (var i = 0; i <= shirtColor.length; i++) {
            if (shirtColor.options[i].value === 'steelblue'
                || shirtColor.options[i].value === 'tomato'
                || shirtColor.options[i].value === 'dimgrey'
            ) {
                shirtColor.options[i].style.display = "none";
            } else {
                shirtColor.options[i].style.display = "block"; //make sure other color options are available
            }
        }
    } else if (design.value === 'heart js'){//if they choose HEART JS , only these color show
        for (var j= 0; j <= shirtColor.length; j++) {
            if (shirtColor.options[j].value === 'cornflowerblue'
                || shirtColor.options[j].value === 'darkslategrey'
                || shirtColor.options[j].value === 'gold'
            ) {
                shirtColor.options[j].style.display = "none";
            }
            else {
                shirtColor.options[j].style.display = "block"; //make sure other color options are available
            }
        }
    }
}

//chance color options based on the design choice
design.addEventListener("change", filterChoice, false);


//setting up variables for different timeslots that could have conflicts
//let timeSlot;
let tuesdayMorning = 'Tuesday 9am-12pm';
let tuesdayAfternoon = 'Tuesday 1pm-4pm';

function checkConflict(e) {
    target = e.target;
    label = e.target.parentNode;
    activitySlot = label.textContent;

    if ((activitySlot.includes(tuesdayMorning)) && (target.checked === true)) {
        for (let i = 0; i < activities.length; i++) {
            if ((activities[i].parentNode.textContent.includes(tuesdayMorning)) &&
                (activities[i].checked === false)) {
               // activities[i].parentNode.classList.toggle('disabled');
                activities[i].disabled = true;
            }
        }
    }
    else if((activitySlot.includes(tuesdayMorning)) && (target.checked === false)){
        for (let k = 0; k < activities.length; k++) {
            if ((activities[k].parentNode.textContent.includes(tuesdayMorning)) &&
                (activities[k].checked === false)) {
                // activities[i].parentNode.classList.toggle('disabled');
                activities[k].disabled = false;
            }
        }

    }
    else if ((activitySlot.includes(tuesdayAfternoon)) && (target.checked === true)) {
        for (let j = 0; j < activities.length; j++) {
            if ((activities[j].parentNode.textContent.includes(tuesdayAfternoon)) && (activities[j].checked === false)) {
              //  activities[j].parentNode.classList.toggle('disabled');
                activities[j].disabled = true;
            }

        }
    }
    else if ((activitySlot.includes(tuesdayAfternoon)) && (target.checked === false)) {
        for (let m = 0; m < activities.length; m++) {
            if ((activities[m].parentNode.textContent.includes(tuesdayAfternoon)) && (activities[m].checked === false)) {
                //  activities[j].parentNode.classList.toggle('disabled');
                activities[m].disabled = false;
            }

        }
    }

}


// setting up variables for the running cost of activities.
let runningCost = 0;
const activityFieldset = document.getElementById('activities');
const activityCost = document.createElement('div');
activityFieldset.insertBefore(activityCost, activityFieldset.lastChild);

//function for adding up total cost of activities
function runTotal(e) {
    let target = e.target;
    runningCost = 0;
    for(let v=0; v < activities.length; v++){
        if(activities[v].checked === true){
            if(activities[v].parentNode.textContent.includes("$100")) {
                runningCost = runningCost + 100;
                activityCost.textContent = runningCost ;
            }
            else if(activities[v].parentNode.textContent.includes("$200")){
                runningCost = runningCost + 200;
                activityCost.textContent = runningCost ;
            }
        }
    }


    //setting up variables for getting total cost of activities
}




activity.addEventListener("change", checkConflict, false);
activity.addEventListener("change", runTotal, false);

//checking for payment type

paymentType.value = "credit card"; //setting default payment type to credit card
paypal.style.display = 'none'; //hiding the paypal info
bitcoin.style.display = 'none'; //hiding the bitcoin info

paymentType.addEventListener("change", payment, false); //setting an event listener for if the payment type is changed

function payment() {
    if (paymentType.value === 'select_method') {
        register.disabled = true; //if they haven't chosen a method they can't register
        paypal.style.display = 'none';
        creditCard.style.display = 'none';
        bitcoin.style.display = 'none';
    }
    else if (paymentType.value === 'paypal') { //if they choose the paypal method show the paypal info &  hide others
        paypal.style.display = 'block';
        creditCard.style.display = 'none';
        bitcoin.style.display = 'none';
    } else if (paymentType.value === 'creditCard') { //if they choose the credit card method show the credit card info &  hide others
        paypal.style.display = 'none';
        creditCard.style.display = 'block';
        bitcoin.style.display = 'none';
    } else if (paymentType.value === 'bitcoin') { //if they choose the bitcoin method show the botcoin info &  hide others
        paypal.style.display = 'none';
        creditCard.style.display = 'none';
        bitcoin.style.display = 'block';
    } else {
        creditCard.style.display = 'block';  //show the credit card info by default and hide others
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
    }
}





//FORM VALIDATION


// set variables for creating an error message when the name field is empty
const nameError = document.createElement('div');
const nameErrorText = document.createTextNode("Please enter your name");
const fieldSetBasic = nameInput.parentNode;



// set variables for creating an error message for the email field
const emailError = document.createElement('div');
const emailErrorText = document.createTextNode("Please enter a valid email");


// set variables for creating an error message for the activities
const activitiesError = document.createElement('div');
const activitiesErrorText = document.createTextNode("Please select at least one activity");


// set variables for creating an error message for credit card
const ccError = document.createElement('div');
const ccErrorText = document.createTextNode("Please enter a valid credit card number");
const divCC = document.getElementById('credit-card');


// set variables for creating an error message for zip code
const zipError = document.createElement('div');
const zipErrorText = document.createTextNode("Please enter a valid zip code");


// set variables for creating an error message for cvv
const cvvError = document.createElement('div');
const cvvErrorText = document.createTextNode("Please enter a valid CVV");



// create the error message for when the name field is empty
nameError.setAttribute('id','name-error');
nameError.classList.add('error');
nameError.appendChild(nameErrorText);


// create the error message for the email field
emailError.setAttribute('id','email-error');
emailError.classList.add('error');
emailError.appendChild(emailErrorText);

// create the error message for the activities section
activitiesError.setAttribute('id','activities-error');
activitiesError.appendChild(activitiesErrorText);
activitiesError.classList.add('error');

// create the error message for the credit card number
ccError.setAttribute('id','cc-error');
ccError.appendChild(ccErrorText);
ccError.classList.add('error');


// create the error message for the zip code
zipError.setAttribute('id','zip-error');
zipError.appendChild(zipErrorText);
zipError.classList.add('error');


// create the error message for the cvv
cvvError.setAttribute('id','cvv-error');
cvvError.appendChild(cvvErrorText);
cvvError.classList.add('error');


function nameValidate(){
    if(nameInput.value === '') { //if the name is blank add an error message
        fieldSetBasic.insertBefore(nameError, nameInput);
        nameInput.classList.add('inputError');
    }else if((nameInput.value !== '') &&  (nameError !== null)){ //if there is a name and the error message is there remove it
        nameError.remove();
        nameInput.classList.remove('inputError');
}
    }


function emailValidate(){
    var atpos = emailInput.value.indexOf("@"); //set variable for existence of "@" symbol
    var dotpos = emailInput.value.lastIndexOf("."); //set variable for existence of "."
    if(emailInput.value === '') { //error if email is blank
        fieldSetBasic.insertBefore(emailError, emailInput);
        emailInput.classList.add('inputError');
    } else if(atpos < 1 || dotpos < atpos+2 || dotpos+2 >= emailInput.value.length){ //error is no "@" symbol or "."
        fieldSetBasic.insertBefore(emailError, emailInput);
        emailInput.classList.add('inputError');
    }else {
        if (emailError !== null) { //remove error message if the email is valid and exists
            emailError.remove();
            emailInput.classList.remove('inputError');
        }
        return;
    }
}

function activitiesValidate(){
    okay = false; //by default nothing has been checked
    for(let x=0; x < activities.length; x++) { //loop through all checkboxes
        if (activities[x].checked === true) { //if at least one is check, set okay to true and exit the loop
            okay = true;
            break;
        }
    }
    if(okay === false){
            activity.insertBefore(activitiesError, activity.childNode); //if there are no checkboxes checked, then add error message
        }
        else if ((okay === true) && (activitiesError !== null)){ //if it's okay, but the error message is there - remove it
            activitiesError.remove();
            okay = true;
            return;
    }
}

function ccValidate(){ //checking to make sure there is a credit card number and has the correct number of digits

    if((ccInput.value.length < 14 || ccInput.value.length > 16) || (isNaN(ccInput.value))){
        divCC.insertBefore(ccError, ccInput.parentNode);
        ccInput.classList.add('inputError');

    } else{
        if(ccError !== null) { //if the credit card number is there, remove error message
            ccError.remove();
            ccInput.classList.remove('inputError');

        }else {

            return;
        }
    }
}


function zipValidate(){//checking to make sure there is a zip code number and has the correct number of digits
    if((zipInput.value.length !== 5) || (isNaN(zipInput.value))){
        divCC.insertBefore(zipError, ccInput.parentNode);
        zipInput.classList.add('inputError');
    } else{
        if(zipError !== null) {//if the zip code number is there, remove error message
            zipError.remove();
            zipInput.classList.remove('inputError');
        }else {
            return;
        }
    }
}



function cvvValidate(){//checking to make sure there is a cvv number and has the correct number of digits
    if(cvvInput.value.length !== 3){
        divCC.insertBefore(cvvError, ccInput.parentNode);
        cvvInput.classList.add('inputError');
    } else{
        if(cvvError !== null) {//if the cvv number is there, remove error message
            cvvError.remove();
            cvvInput.classList.remove('inputError');
        }else {
            return;
        }
    }
}


//function that runs when the Register button is clicked
function formValidation(e) {
    e.preventDefault(); // make sure it doesn't submit until all errors are fixed
    nameValidate();
    emailValidate();
    activitiesValidate();
    if (paymentType.value === "credit card") {
        ccValidate();
        zipValidate();
        cvvValidate();
    }
}

register.addEventListener("click", formValidation, false); //add click event to register button

});
