console.log("hello world");



// function handleSubmit(evt) {
// 	evt.preventDefault();
	
// 	console.log('form submit');



let form = document.querySelector('#contact');

form.addEventListener('submit', function(){alert("Your form has been submitted!");});



let img =document.querySelector('img')
img.addEventListener('mouseover', function(){alert('You got any Grapes???');});