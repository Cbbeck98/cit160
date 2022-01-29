document.querySelector('#copyright').textContent = new Date().getFullYear();

function myFunction () {
	// INPUT
	let first = document.getElementById('firstname').value;
	let fruit = document.getElementById('fruit').value;
	let aml1 = document.getElementById('animal1').value;
	let aml2 = document.getElementById('animal1').value;

	// PROCESSING

	
	//OUTPUT - Example output: "And it came to pass that the people of ___ did till the land, and raise all manner of ___, and flocks of herds, and flocks of all manner of ___ of every kind, and ___."
	let outputString = '"And it came to pass that the people of ${first} did till the land, and raise all manner of ${fruit}, and flocks of herds, and flocks of all manner of ${aml1} of every kind, and ${aml2."'
}