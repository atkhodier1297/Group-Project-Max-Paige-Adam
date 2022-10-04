const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd6bf0d4287msh34e784f611f1ab0p1cdaa4jsnadcb166d5ad1',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
};

fetch('https://genius-song-lyrics1.p.rapidapi.com/albums/368574', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));






const listenedButton = document.getElementById('listened')
listenedButton.addEventListener('click', clickyclick)

function clickyclick(){
console.log(listenedButton)
}