const panels = document.querySelectorAll('.panel');
const background = document.querySelector('body');
const activePan = document.querySelectorAll('.panel.active')

 panels.forEach(panel => {
   panel.addEventListener('click', () => {
     removeActiveClasses();
     panel.classList.add('active');
	   background.style.backgroundImage = panel.style.backgroundImage;
		 
   })
 })
	
function removeActiveClasses() {
	panels.forEach(panel => {
  	panel.classList.remove('active');
  })
}






