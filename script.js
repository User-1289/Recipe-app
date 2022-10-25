
//in this project we are using firebase as database with js
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

let arr = []
let counter = 99
let existing;
let data;
function makeRecipe() {
	counter++;
	localStorage.setItem("counter" , counter)
	document.getElementById('container').style.display='none'
	let vTitle = document.getElementById('title-id')
	let vIngred = document.getElementById('ingred-id')
	let vPrepare = document.getElementById('how-to-make')
	
database.collection("Recipe")
.add({
	//UniqueId:localStorage.getItem("counter"),
	RecipeTitle:vTitle.value,
	RecipeIngredients:vIngred.value,
	RecipePreparation:vPrepare.value,
})
.then(function(docRef) 
		{
			docId = docRef.id
			localStorage.setItem("firebaseDoc" , docId)
		})
		
let titleAppend = document.createElement("h2")
let ingredAppend = document.createElement("h4")
let prepareAppend = document.createElement("div")
titleAppend.innerText = vTitle.value
ingredAppend.innerText = vIngred.value
prepareAppend.innerText = vPrepare.value

//document.getElementById('recipe-container').style.display='inline'	
document.getElementById('recipe-container').appendChild(titleAppend)
document.getElementById('recipe-container').appendChild(ingredAppend)
document.getElementById('recipe-container').appendChild(prepareAppend)
}

//getting the stored data
let viewBtn = document.getElementById('view-btn')
viewBtn.addEventListener('click', () => {
document.getElementById('container').style.display='none'

database.collection("Recipe")
.get()
	.then((querySnapshot) => 
	{
		querySnapshot.forEach((doc) =>
		{
				 if(doc.get('UniqueId') == null)
				 {
					 database.collection("Recipe")
					 .doc(localStorage.getItem("firebaseDoc"))
					// .doc("gIrVpQWsTPsmqJuF8zDO")
					 .update
					 ({
						 UniqueId: 100
					 })
				//	 arr.push(doc.data().UniqueId)
		 // console.log(doc.id, '=>', doc.data().RecipeTitle);
				}
				else if(doc.get('UniqueId') != null)
				{
					arr.push(doc.data().UniqueId)
					arr.sort()
					 database.collection("Recipe")
					 .doc(localStorage.getItem("firebaseDoc"))
					 .update
					 ({
						 UniqueId: arr[0] + 1
					 })
				}
				
		})
	})
	console.log(arr)
})
