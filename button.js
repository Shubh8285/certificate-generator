var modal = document.getElementById('simplemodal');
console.log(modal);
function openmodal(){
	modal.style.display = 'block';
}

function closemodal(){
	modal.style.display = 'none';
}

function clickoutside(e){
	if (e.target == modal) {
	modal.style.display = 'none';
}
} 


var modalbtn = document.getElementById('modalbtn');

var closebtn = document.getElementsByClassName('closebtn')[0];

modalbtn.addEventListener('click', openmodal);

closebtn.addEventListener('click', closemodal);

window.addEventListener('click', clickoutside);


