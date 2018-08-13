document.addEventListener('DOMContentLoaded', () => {

  const selectJob = document.getElementById('title');
  const otherJobTitle = document.getElementById('other-title');
  const design = document.getElementById('design');
  const shirtColor = document.getElementById('color');
  const activities = document.querySelectorAll('input[type=checkbox]');

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






});
