const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd6bf0d4287msh34e784f611f1ab0p1cdaa4jsnadcb166d5ad1',
		'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
	}
};

fetch('https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));






const listenedButton = document.getElementById('listened')
listenedButton.addEventListener('click', clickyclick)

function clickyclick(){
console.log(listenedButton)
}