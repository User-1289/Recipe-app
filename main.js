function newRecipe(){
	document.getElementById('add-recippe').innerHTML = "Add or edit a recipe"
	document.getElementById('edit-btn').style.display='inline'
let txtContainer = document.getElementById('container')

txtContainer.innerHTML = `<u><div id="title">Name of the food</div></u>
<textarea id="title-text"></textarea><br><br><br><br><br>
<u><div id="ingred">Ingredients</div></u>
<textarea id="ingred-text"></textarea> <br><br><br><br><br><br><br><br><br><br><br><br>
<u><div id="prepare">Preparation</div></u>
<textarea id="how-to-make"></textarea> <br><br><br><br><br><br><br><br><br><br><br><br><br>
<button onclick="makeRecipe()"id="submitt">Make the recipe</button>
`
}

let submitBtn = document.getElementById('submitt')

function makeRecipe() {
//let titleAppend = document.getElementById('append-title')
let recipeTitle = document.getElementById('title-text')
let txtContainer = document.getElementById('container')
let ingredText = document.getElementById('ingred-text')
let preparation = document.getElementById('how-to-make')

txtContainer.style.display = 'none'
let header = document.createElement('h1')
header.id="headerr"
header.innerText = recipeTitle.value
document.getElementById('append-title').appendChild(header)

let ingredientsText = document.createElement('div')
ingredientsText.id="content-ingred"

ingredientsText.innerText = ingredText.value
document.getElementById('append-ingred').appendChild(ingredientsText)

let prepareText = document.createElement('div')

prepareText.id = "prepare-txt"
prepareText.innerText = preparation.value
document.getElementById('recipe-container').style.display='inline'
document.getElementById('append-preparation').appendChild(prepareText)

localStorage.setItem('recipe-title', recipeTitle.value)
localStorage.setItem('recipe-ingredients', ingredText.value)
localStorage.setItem('recipe-preparation', preparation.value)

}
//getign the stored data 
function ret(){
	let recipeTitle = document.getElementById('title-text')
	let txtContainer = document.getElementById('container')
	let ingredText = document.getElementById('ingred-text')
    let preparation = document.getElementById('how-to-make')
	
	txtContainer.style.display = 'inline'
	document.getElementById('recipe-container').style.display='none'
	
    recipeTitle.value = localStorage.getItem('recipe-title')
	ingredText.value = localStorage.getItem('recipe-ingredients')
	preparation.value = localStorage.getItem('recipe-preparation')
	
}
//let recipeTitle = document.getElementById('title-text')
