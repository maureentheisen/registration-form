document.addEventListener('DOMContentLoaded', () => {

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
  const name = document.getElementById("name");



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

let timeSlot;
let tuesdayMorning = 'Tuesday 9am-12pm';
let tuesdayAfternoon = 'Tuesday 1pm-4pm';

function checkConflict() {
    for (let i = 0; i < activities.length; i++) {
        if (
            (activities[i].checked) &&
            (activities[i].parentNode.textContent.includes(tuesdayAfternoon))
        ) {
            timeSlot = tuesdayAfternoon;
        }
        else if(
            (activities[i].checked) &&
            (activities[i].parentNode.textContent.includes(tuesdayMorning))
        ) {
            timeSlot = tuesdayMorning;
        }

        if(activities[i].parentNode.textContent.includes(timeSlot)){
            activities[i].parentNode.classList.add('disabled');
        } else {

        }
    }




}

activity.addEventListener("change", checkConflict, false);


paymentType.value = "credit card";
paypal.style.display = 'none';
bitcoin.style.display = 'none';

paymentType.addEventListener("change", payment, false);

function payment() {
    if (paymentType.value === 'select_method') {
        register.disabled = true;
    }
    else if (paymentType.value === 'paypal') {
        paypal.style.display = 'block';
        creditCard.style.display = 'none';
        bitcoin.style.display = 'none';
    } else if (paymentType.value === 'creditCard') {
        paypal.style.display = 'none';
        creditCard.style.display = 'block';
        bitcoin.style.display = 'none';
    } else if (paymentType.value === 'bitcoin') {
        paypal.style.display = 'none';
        creditCard.style.display = 'none';
        bitcoin.style.display = 'block';
    } else {
        creditCard.style.display = 'block';
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
    }
}





//FORM VALIDATION

const nameError = document.createElement('div');
nameError.innerHTML="error";
nameError.insertBefore(nameError, name);


function formValidation() {


    // create a new div element
    var newDiv = document.createElement("p");
    // and give it some content
    var newContent = document.createTextNode("Hi there and greetings!");
    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    var currentDiv = getElementById('test').parentNode;
    document.body.insertBefore(newDiv, currentDiv);

}

register.addEventListener("click", formValidation, false);


});



