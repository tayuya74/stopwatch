const counterElement = document.querySelector('#counter')
let counter = 0
let timerID


const btnStart = document.querySelector('#start')
btnStart.onclick = function() {
	console.log('btnStart')
	clearInterval(timerID)
	timerID = setInterval(function(){
		counter++
		counterElement.innerText = counter
	}, 1000)
}

const btnPause = document.querySelector('#pause')
btnPause.onclick = function() {
	console.log('btnPause')
	clearInterval(timerID)
}

const btnReset = document.querySelector('#reset')
btnReset.onclick = function(){
	console.log('btnReset')
	counter = 0
	counterElement.innerText = counter
	clearInterval(timerID)
}