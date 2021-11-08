const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')
const quoteWall = document.getElementById('quoteWall')
var count = document.getElementById('count');
var input = document.getElementById('input');

quoteInputElement.addEventListener('input', () => {
 const arrayQuote = quoteDisplayElement.querySelectorAll('span')
 const arrayInput = quoteInputElement.value.split('')

 let allCorrect = true
 arrayQuote.forEach((characterSpan, index) => {
 	const characterInput = arrayInput[index]
 	if (characterInput == null) {
 		characterSpan.classList.remove('correct')
 		characterSpan.classList.remove('incorrect')
 		allCorrect = false 
 	}
 	else if (characterInput === characterSpan.innerText) {
 		characterSpan.classList.add('correct')
 		characterSpan.classList.remove('incorrect')
 	} else {
 		characterSpan.classList.remove('correct')
 		characterSpan.classList.add('incorrect')
 		allCorrect = false
 	}
 })

	var displayquote = arrayInput.join('')
	console.log(displayquote)
if (allCorrect) {
	const quotewallpaper = document.createElement("P")
	quotewallpaper.textContent = displayquote
	quoteWall.appendChild(quotewallpaper)
	quotewallpaper.classList.add('background-text')
}
if (allCorrect) renderNewQuote()
})


function getRandomQuote() {
	return fetch(RANDOM_QUOTE_API_URL)
		.then(response => response.json())
		.then(data => data.content)

}

async function renderNewQuote() {
	const quote = await getRandomQuote()
	//const quote = "test"
	quoteDisplayElement.innerHTML = ''
	quote.split('').forEach(character => {
		const characterSpan = document.createElement('span')
		characterSpan.innerText = character
	 	quoteDisplayElement.appendChild(characterSpan)
	})
	quoteInputElement.value = null
	startTimer()
}

let startTime

var timeLeft = 30;
var elem = document.getElementById('timer');

   
timerId = setInterval(countdown, 1000);
    
// function startTimer() {
//   timerElement.innerText = 0
//   startTime = new Date()
//   setInterval(() => {
//     timer.innerText = getTimerTime()
//   }, 1000)

function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
      }
    }
countdown()
function wordCounter(text) {
  var text = quoteInput.value;
  var wordCount = 0;
  for (var i = 0; i <= text.length; i++) {
    if (text.charAt(i) == ' ') {
      wordCount++;
    }
  }
  count.innerText = wordCount;
}

function doSomething(){
	quoteDisplayElement = wordCount
}
renderNewQuote()