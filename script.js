//
let arr = []
//configuring firebase
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

const docRef = database.collection("Recipe")

	docRef
	.get()
		.then((querySnapshot) => 
		{
			querySnapshot.forEach((doc) =>
			{
				dbDoc = doc.data().UniqueId

				arr.push(doc.data().UniqueId)
				arr.sort(function(a, b){return a-b})
						//console.log(arr)
			})
		})		
function newRecipe()
{
	document.getElementById('container').style.display='inline'
}

function makeRecipe()
{
	let vTitle = document.getElementById('title-id')
	let vIngred = document.getElementById('ingred-id')
	let vPrepare = document.getElementById('prepare-id')
	
	if(localStorage.getItem("Unique-Id")===null)
	{
		addData()
	}
		else if(localStorage.getItem("Unique-Id").length > 0)
		{
			console.log('coding sucks')
					docRef
			.add({
				UniqueId:parseInt(localStorage.getItem("Unique-Id")),
				RecipeTitle: vTitle.value,
				RecipeIngredients: vIngred.value,
				RecipePreparation: vPrepare.value,
			})
		}
}	
	function addData()
	{
	let vTitle = document.getElementById('title-id')
	let vIngred = document.getElementById('ingred-id')
	let vPrepare = document.getElementById('prepare-id')
	
	localStorage.setItem("Unique-Id", arr[arr.length - 1] + 1)
		console.log('function is working')
		//database.collection("Recipe")
		docRef
		.add({
			UniqueId: arr[arr.length - 1] + 1,
			RecipeTitle: vTitle.value,
			RecipeIngredients: vIngred.value,
			RecipePreparation: vPrepare.value,
		})
		console.log(arr)
	}
	
let viewBtn = document.getElementById('view-btn')
viewBtn.onclick = function()
{
	document.getElementById('container').style.display='none'
	document.getElementById('btn-ids').style.display='none'
	document.getElementById('back-btn').style.display='inline'
	docRef
	.get()
	.then((querySnapshot) =>
	{
		querySnapshot.forEach((doc) =>
		{
			if(localStorage.getItem("Unique-Id") == doc.data().UniqueId)
			{
				let jContainer = document.createElement("div")
				let jTitle = document.createElement("h1")
				let jIngred = document.createElement("h3")
				let jPrepare = document.createElement("span")
				
				jContainer.classList.add("styleing")
				jTitle.innerHTML = doc.data().RecipeTitle
				jIngred.innerHTML = doc.data().RecipeIngredients
				jPrepare.innerHTML = doc.data().RecipePreparation
				
				jContainer.append(jTitle)
				jContainer.append(jIngred)
				jContainer.append(jPrepare)
				
				document.getElementById('output-container').append(jContainer)
			}
		})
	})
}
function goBack()
{
	document.getElementById('output-container').style.display='none'
	document.getElementById('container').style.display='inline'
	document.getElementById('btn-ids').style.display='inline'
}
