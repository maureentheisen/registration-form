document.addEventListener('DOMContentLoaded', () => {

  const selectJob = document.getElementById('title');
  const otherJobTitle = document.getElementById('other-title');
  const tshirtDesign = document.getElementById('design');
  const tshirtColor = document.getElementById('color');


  otherJobTitle.style.display = 'none';

  // show the your job role text input box on changing selection value
  title.addEventListener('change', (e) => {
    if(selectJob.options[selectJob.selectedIndex].value === 'other'){
        otherJobTitle.style.display = 'block';
    };
  })

//changing color options based on design choice
  tshirtDesign.addEventListener('change', (event) => {
    if(event.target.value === 'js puns'){
      for(let i=0; i<tshirtColor.options.length; i++){
        if(
          (tshirtColor.options[i].value === 'tomato') ||
          (tshirtColor.options[i].value === 'steelblue') ||
          (tshirtColor.options[i].value === 'dimgrey')
        ){
          tshirtColor.options[i].style.display = 'none';
        }else{
          tshirtColor.options[i].style.display = 'block';
        }
      }
    } else if(event.target.value === 'heart js'){
      for(var i=0; i<tshirtColor.options.length; i++){
        if(
          (tshirtColor.options[i].value === 'cornflowerblue') ||
          (tshirtColor.options[i].value === 'darkslategrey') ||
          (tshirtColor.options[i].value === 'gold')
        ){
          tshirtColor.options[i].style.display = 'none';
        }else{
          tshirtColor.options[i].style.display = 'block';
        }
      }
    }
    // if the design theme selection is Select Theme than show all color options
      else{
        for(var i=0; i<tshirtColor.options.length; i++){
          tshirtColor.options[i].style.display = 'block';
      }
    }

  });












});
