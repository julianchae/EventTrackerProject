window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});

//event listener calls
function init() {
	
	//find by id
	document.dogById.lookup.addEventListener('click', function(event) {
		let dataDiv = document.getElementById('dogData');
		dataDiv.textContent = '';
		event.preventDefault();
		let dogId = document.dogById.dogId.value;
		if (!isNaN(dogId) && dogId > 0) {
			findDogById(dogId);
		}else{
			dataDiv.textContent = 'Dogs not found . . .'
		}
		
	})
	//intake dog form 
	document.dogIntakeForm.submit.addEventListener('click', intakeDog);
	//index dog form
	document.findAll.findAll.addEventListener('click', (e) => {
		let dataDiv = document.getElementById('dogData');
		dataDiv.textContent = '';
		e.preventDefault();
		findAllDogs();
	});
	//find by keyword
	document.dogByKeyword.findByKeyword.addEventListener('click', (e) => {
		let dataDiv = document.getElementById('dogData');
		dataDiv.textContent = '';
		e.preventDefault();
		let keyword = document.dogByKeyword.keyword.value;
		findByKeyword(keyword);
	});
	//delete by id 
	document.deleteById.delete.addEventListener('click',(e)=>{
		e.preventDefault();
		let id = document.deleteById.id.value;
		deleteById(id);
		
	} )
	//update by id
	document.dogUpdateForm.submit.addEventListener('click', updateDog);
	
	//pounds
	document.pounds.findPounds.addEventListener('click',(e)=>{
		e.preventDefault();
		let div =  document.getElementById('pounds');
		div.textContent = '';
		findDogFood();
	} );
	
	
	//toggle hide/show for update form
	
	let btn = document.getElementById("showHide")
	let form = document.getElementById('updateForm');
	form.style.display = 'none';
	
	btn.addEventListener('click', (e)=>{
		e.preventDefault();
		
		if(form.style.display==='none'){
			form.style.display = 'block';
		}else {
			form.style.display = 'none'
		}
		
	});

//toggle hide/show for intake form

let form2 = document.getElementById('intakeForm');
form2.style.display='none'
let btn2 = document.getElementById("showHide2")
	btn2.addEventListener('click', (e)=>{
		e.preventDefault();
		
		if(form2.style.display==='none'){
			form2.style.display = 'block';
		}else {
			form2.style.display = 'none'
		}
	});



// update dog ***************
function updateDog(e){
	e.preventDefault();
	let dog = {
		name: document.dogUpdateForm.name.value,
		breed: document.dogUpdateForm.breed.value,
		age: document.dogUpdateForm.age.value,
		sex: document.dogUpdateForm.sex.value,
		weight: document.dogUpdateForm.weight.value,
		color: document.dogUpdateForm.color.value,
		fixed: document.dogUpdateForm.fixed.value,
		imageUrl: document.dogUpdateForm.image.value
	};
	console.log(dog)
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/dogs/'+document.dogUpdateForm.id.value, true);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				let data = JSON.parse(xhr.responseText);
				console.log(data);
				displayDog(data);
			}
			else {
				console.error("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};
	xhr.send(JSON.stringify(dog));
	
}
//create dog ***************
function intakeDog(e) {
	e.preventDefault();
	let dog = {
		name: document.dogIntakeForm.name.value,
		breed: document.dogIntakeForm.breed.value,
		age: document.dogIntakeForm.age.value,
		sex: document.dogIntakeForm.sex.value,
		weight: document.dogIntakeForm.weight.value,
		color: document.dogIntakeForm.color.value,
		fixed: document.dogIntakeForm.fixed.value,
		imageUrl: document.dogIntakeForm.image.value
	};
	console.log(dog)
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/dogs', true);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				let data = JSON.parse(xhr.responseText);
				console.log(data);
				displayDog(data);
			}
			else {
				console.error("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};
	xhr.send(JSON.stringify(dog));
}
//find dog by id******************
function findDogById(dogId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/dogs/' + dogId)
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let dog = JSON.parse(xhr.responseText);
				console.log(dog);
				displayDog(dog);
			} else {
				console.log("Dog Not Found")
				let dataDiv = document.getElementById('dogData');
				dataDiv.textContent = '';
				let notFoundDiv = document.createElement('div');
				notFoundDiv.textContent = "Dog not found. . ."
				dataDiv.appendChild(notFoundDiv);
			}
		};
	}
	xhr.send();
}
function displayDog(dog) {
	let dataDiv = document.getElementById('dogData');
	let h1 = document.createElement('h1');
	h1.textContent = dog.name;
	dataDiv.appendChild(h1);
	let bq = document.createElement('blockquote');
	dataDiv.appendChild(bq)
	let ul = document.createElement('ul')
	let age = document.createElement('li')
	let breed = document.createElement('li')
	let sex = document.createElement('li')
	let color = document.createElement('li')
	let fixed = document.createElement('li')
	let weight = document.createElement('li')
	let id = document.createElement('li')
	
	id.textContent = "Kennel ID: "+dog.id;
	ul.textContent = 'dog info';
	age.textContent = "Age: "+dog.age;
	breed.textContent ="Breed: " +dog.breed;
	sex.textContent = "Sex: "+dog.sex;
	color.textContent = "Color: "+dog.color;
	weight.textContent ="Weight "+ dog.weight;	
	fixed.textContent = dog.fixed;
	if(dog.fixed){
		fixed.textContent = "Fixed";
	}else{
		fixed.textContent = "Not fixed"
	}
	dataDiv.appendChild(id);
	dataDiv.appendChild(age);
	dataDiv.appendChild(breed);
	dataDiv.appendChild(sex);
	dataDiv.appendChild(weight);
	dataDiv.appendChild(color);
	dataDiv.appendChild(fixed);
}
//find all dog
function findAllDogs(){
	console.log("index function hit")
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/index')
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let dogs = JSON.parse(xhr.responseText);
				displayAllDogs(dogs);	
			} else {
				console.log("Dogs Not Found")
				let dataDiv = document.getElementById('dogData');
				dataDiv.textContent = '';
				let notFoundDiv = document.createElement('div');
				notFoundDiv.textContent = "Dogs not found. . ."
				dataDiv.appendChild(notFoundDiv);
			}
		};
	}
	xhr.send();
}
function displayAllDogs(dogs){
	let dataDiv = document.getElementById('dogData');
	dataDiv.textContent = '';
	if(dogs.length>0){
	let h1 = document.createElement('h1');
	h1.textContent = "Dogs"
	for(let dog of dogs){
	displayDog(dog);}
	}
	else{
		dataDiv.textContent = '';
		let h1 = document.createElement('div');
	h1.textContent = "Dogs not found . . .";
	dataDiv.appendChild(h1);
	}
}
//find by keyword
function findByKeyword(keyword){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/dogs/search/' + keyword)
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let dogs = JSON.parse(xhr.responseText);
				displayAllDogs(dogs)
			} else {
				console.log("Dogs Not Found")
				let dataDiv = document.getElementById('dogData');
				dataDiv.textContent = '';
				let notFoundDiv = document.createElement('div');
				notFoundDiv.textContent = "Dogs not found. . ."
				dataDiv.appendChild(notFoundDiv);
			}
		};
	}
	xhr.send();
}
//delete id
function deleteById(id){
		let xhr = new XMLHttpRequest();
		xhr.open('DELETE', 'api/dogs/' + id)
		xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
					let dataDiv = document.getElementById('dogData');
					dataDiv.textContent = 'Dog was deleted';
				
			} else {
				console.log("Dogs Not Found")
				let dataDiv = document.getElementById('dogData');
				dataDiv.textContent = '';
				let notFoundDiv = document.createElement('div');
				notFoundDiv.textContent = "Dogs not found. . ."
				dataDiv.appendChild(notFoundDiv);
			}
		};
	}
	xhr.send();
}

function findDogFood(){
	console.log("food function hit")
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/index')
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let dogs = JSON.parse(xhr.responseText);
				let numDogs = dogs.length;
				let showPounds = document.getElementById('pounds');
				let h3 = document.createElement('h3');
				let poundsWeekly = (numDogs*4)*7;
				h3.textContent = "Our dogs consume: "+ poundsWeekly+" pounds weekly! ";
				showPounds.appendChild(h3)
				
			} else {
				console.log("Dogs Not Found")
				let dataDiv = document.getElementById('dogData');
				dataDiv.textContent = '';
				let notFoundDiv = document.createElement('div');
				notFoundDiv.textContent = "Dogs not found. . ."
				dataDiv.appendChild(notFoundDiv);
			}
		};
	}
	xhr.send();



	
	
	
	
}




}
