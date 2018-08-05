document.addEventListener('DOMContentLoaded', () => {

  const selectJob = document.getElementById('title');

  const otherJobTitle = document.getElementById('other-title');

  otherJobTitle.style.display = 'none';

title.addEventListener('change', (e) => {
  if(selectJob.options[selectJob.selectedIndex].value === 'other'){
      otherJobTitle.style.display = 'block';
  };
})









});
