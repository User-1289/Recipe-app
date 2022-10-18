let firebaseConfig = {
  apiKey: "AIzaSyB2dc7G54nZg1H-tKUbxRtWmADEQxRJv10",
  authDomain: "simple-login-page-736b4.firebaseapp.com",
  databaseURL: "https://simple-login-page-736b4-default-rtdb.firebaseio.com",
  projectId: "simple-login-page-736b4",
  storageBucket: "simple-login-page-736b4.appspot.com",
  messagingSenderId: "787439045671",
  appId: "1:787439045671:web:7f597366a3893300fed202",
  measurementId: "G-WTGQ0B68PM"
};
firebase.initializeApp(firebaseConfig)
let database = firebase.firestore()

let docId;

function makeRecipe() {
	document.getElementById('container').style.display='none'
	let vTitle = document.getElementById('title-id')
	let vIngred = document.getElementById('ingred-id')
	let vPrepare = document.getElementById('how-to-make')
	
database.collection("Recipe")
.add({
	RecipeTitle:vTitle.value,
	RecipeIngredients:vIngred.value,
	RecipePreparation:vPrepare.value,
})
.then(function(docRef) 
		{
			//alert(docRef.id)
			docId = localStorage.setItem("Recipe-1" , docRef.id)	
		})
		
let titleAppend = document.createElement("h2")
let ingredAppend = document.createElement("h4")
let prepareAppend = document.createElement("div")
titleAppend.innerText = vTitle.value
ingredAppend.innerText = vIngred.value
prepareAppend.innerText = vPrepare.value

document.getElementById('recipe-container').style.display='inline'	
document.getElementById('recipe-container').appendChild(titleAppend)
document.getElementById('recipe-container').appendChild(ingredAppend)
document.getElementById('recipe-container').appendChild(prepareAppend)
}
//getign the stored data 
function ret(){
	
}
let viewBtn = document.getElementById('view-btn')
viewBtn.addEventListener('click', () => {
document.getElementById('container').style.display='none'
document.getElementById('recipe-container').style.display='inline'

let titleAppend = document.createElement("h2")
let ingredAppend = document.createElement("h4")
let prepareAppend = document.createElement("div")

	database.collection("Recipe")
	.doc(localStorage.getItem("Recipe-1"))
	.get()
	.then((doc) => 
	{
		if(doc.exists)
		{
			titleAppend.innerText = doc.data().RecipeTitle
			ingredAppend.innerText = doc.data().RecipeIngredients
			prepareAppend.innerText = doc.data().RecipePreparation
			//console.log(doc.data())
		}
	})
	document.getElementById('recipe-container').append(titleAppend)
	document.getElementById('recipe-container').append(ingredAppend)
	document.getElementById('recipe-container').append(prepareAppend)
//titleAppend.innerText = vTitle.value
//ingredAppend.innerText = vIngred.value
//prepareAppend.innerText = vPrepare.value
})