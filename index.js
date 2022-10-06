const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd6bf0d4287msh34e784f611f1ab0p1cdaa4jsnadcb166d5ad1',
		'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
	}
};

let currentArtist = null
let artists = document.getElementById('description')
let listeningList = document.getElementById('listening-list')

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

	artRank.textContent = `# ${artObj.rank}`
	rankBar.append(artRank)

	artRank.addEventListener('click', () => {

		showArtists(artObj)
		
	})

}

function showArtists(artObj){
	console.log('I was clicked')

	currentArtist = artObj

	//let artists = document.getElementById('description')

	artists.textContent = currentArtist.artist

	artists.addEventListener("mouseover", () => {

		showMonthly(artObj)

	})
}

function showMonthly(artObj) {
	console.log('ouch!')
	let monthlyCount = document.getElementById('monthly-count')
	monthlyCount.textContent = `Monthly Listeners ${artObj.monthlyListeners} million`
	artists.addEventListener('mouseout', () => {
		monthlyCount.textContent = 'Monthly Listeners'
	addArtist(artObj)
	})
}

function addArtist(artObj){
	//let artistName = document.getElementById('description')
	let addButton = document.getElementById ('add')
	addButton.addEventListener('click', () => {
		
		listeningList.append(artists.textContent)
		makeClearButton()
	})
	}

function makeClearButton(){
	let clearButton = document.getElementById('clear')
	clearButton.addEventListener('click', () => {
		listeningList.textContent = ''
		console.log (clearButton)
	})
}
//event.preventDefault()
//crossOffTask.addEventListener('click', (deleteEvent) => delete(deleteEvent))
