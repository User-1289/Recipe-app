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

/*localStorage.setItem('recipe-title', recipeTitle.value)
localStorage.setItem('recipe-ingredients', ingredText.value)
localStorage.setItem('recipe-preparation', preparation.value)*/
Cookies.set('recipe-title', recipeTitle.value)
Cookies.set('recipe-ingredients', ingredText.value)
Cookies.set('recipe-preparation', preparation.value)
}
//getign the stored data 
function ret(){
	let recipeTitle = document.getElementById('title-text')
	let txtContainer = document.getElementById('container')
	let ingredText = document.getElementById('ingred-text')
    let preparation = document.getElementById('how-to-make')
	
	txtContainer.style.display = 'inline'
	document.getElementById('recipe-container').style.display='none'
	
   /* recipeTitle.value = localStorage.getItem('recipe-title')
	ingredText.value = localStorage.getItem('recipe-ingredients')
	preparation.value = localStorage.getItem('recipe-preparation')*/
	recipeTitle.value = Cookies.get('recipe-title')
	ingredText.value = Cookies.get('recipe-ingredients')
	preparation.value = Cookies.get('recipe-preparation')
}

let viewBtn = document.getElementById('view-btn')
viewBtn.addEventListener('click', () => {
	
	const viewTitle = Cookies.get('recipe-title')
	const viewIngred = Cookies.get('recipe-ingredients')
	const viewPrepare = Cookies.get('recipe-preparation')
	
	
	//Cookies.set('')
	
	Cookies.remove('recipe-title')
	Cookies.remove('recipe-ingredients')
	Cookies.remove('recipe-preparation')
	
	localStorage.setItem('title-backup' , viewTitle)
	localStorage.setItem('ingredients-backup' , viewIngred)
	localStorage.setItem('prepare-backup' , viewPrepare)
	
	let counter = '0'
	
	for(let i = 0; i < 50; i++)
{
	if (localStorage.getItem('title-backup'.length > 1))
	{
		counter++
		localStorage.setItem('title-backup-' + counter, localStorage.getItem('title-backup'))
		localStorage.removeItem('title-backup')
	}
}
	
		document.getElementById('container').style.display='none'
	let main = document.querySelectorAll('.main')
	for (let box of main)
	{
		box.style.display='inline'
	}
})
