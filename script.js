let arr = []
let dbDoc;
let localDoc;
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

docRef.orderBy("RecipeTitle").limit(3)
function newRecipe()
{
	document.getElementById('container').style.visibility='visible'
}

function makeRecipe()
{
	let vTitle = document.getElementById('title-id')
	let vIngred = document.getElementById('ingred-id')
	let vPrepare = document.getElementById('prepare-id')
	
	if(localStorage.getItem("unique-id")===null)
	{
		addData()
	}
		else if(localStorage.getItem("unique-id").length > 0)
		{
			console.log('coding sucks')
					docRef
			.add({
				UniqueId:localStorage.getItem("unique-id"),
				RecipeTitle: vTitle.value,
				RecipeIngredients: vIngred.value,
				RecipePreparation: vPrepare.value,
			})
		}
//	database.collection("Recipe")
	docRef
	.get()
		.then((querySnapshot) => 
		{
			querySnapshot.forEach((doc) =>
			{
				dbDoc = doc.data().UniqueId

				arr.push(doc.data().UniqueId)
				arr.sort(function(a, b){return a-b})
						console.log(arr)
			})
		})		
}	
				/*.doc(localStorage.getItem('documentId'))
					.update({
						UniqueId: arr[arr.length - 1] + 1
					})*/
	function addData()
	{
	let vTitle = document.getElementById('title-id')
	let vIngred = document.getElementById('ingred-id')
	let vPrepare = document.getElementById('prepare-id')
	
	localStorage.setItem("unique-id", arr[arr.length - 1] + 1)
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
		
