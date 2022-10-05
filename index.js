const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd6bf0d4287msh34e784f611f1ab0p1cdaa4jsnadcb166d5ad1',
		'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
	}
};

let currentArtist = null

fetch('https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners', options)
	.then(response => response.json())
	.then((data) => {
		artistData = data.slice(0,20)

		artistData.forEach((artist) => {
			createRankDiv(artist)
			console.log(artistData)
		})
})

function createRankDiv(artObj){

	let rankBar = document.getElementById('div-rank')
	let artRank = document.createElement('span')

	artRank.textContent = artObj.rank
	rankBar.append(artRank)

}