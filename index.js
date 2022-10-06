const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd6bf0d4287msh34e784f611f1ab0p1cdaa4jsnadcb166d5ad1',
		'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
	}
};

let artists = document.getElementById('description')
let listeningList = document.getElementById('listening-list')
let testDiv = document.createElement('div')
artists.append(testDiv)
fetch('https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners', options)
	.then(response => response.json())
	.then((data) => {
		artistData = data.slice(0,20)

		artistData.forEach((artObj) => {
			createRankDiv(artObj)
			//console.log(artistData)
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
	//let artists = document.getElementById('description')

	artists.removeChild(artists.lastElementChild)
	let artistDiv = document.createElement('div')
	artistDiv.textContent = artObj.artist
	artists.appendChild(artistDiv)
	//artists.removeEventListener("mouseover", showMonthly);
	artistDiv.addEventListener("mouseover", () => {

		showMonthly(artObj)
	})
}

function showMonthly(artObj) {
	
	console.log('I was hovered!')
	let monthlyCount = document.getElementById('monthly-count')
	monthlyCount.textContent = `Monthly Listeners ${artObj.monthlyListeners} million`
	artists.addEventListener('mouseout', () => {
	monthlyCount.textContent = 'Monthly Listeners'
	console.log('I moused out')
		
	})
	addArtist(artObj)
}

function addArtist(artObj){
	//let artistName = document.getElementById('description')
	
	let addButton = document.getElementById ('add')
	addButton.addEventListener('click', () => {
		
		listeningList.append(artists.textContent)
		console.log('Add was clicked')
		makeClearButton(artObj)
	})
	}

function makeClearButton(artObj){
	let clearButton = document.getElementById('clear')
	clearButton.addEventListener('click', () => {
		listeningList.textContent = ''
		console.log(clearButton)
	})
}
//event.preventDefault()
//crossOffTask.addEventListener('click', (deleteEvent) => delete(deleteEvent))
