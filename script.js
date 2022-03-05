let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
]

window.onload = function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`
  }
  randomQuote()

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  document.getElementById('main-title').innerText = "Dom's Playground"
  // Part 2
  document.querySelector('body').style.backgroundColor = '#ADD8E6'
  // // Part 3
  document
    .getElementById('favorite-things')
    .removeChild(document.getElementById('favorite-things').lastElementChild)
  // // Part 4
  const specTitles = document.querySelectorAll('.special-title')
  specTitles.forEach((specTitle) => {
    specTitle.style.fontSize = '2 rem'
    specTitle.style.color = 'purple'
  })
  // // Part 5
  const pastRaces = document.getElementById('past-races')
  if (pastRaces.hasChildNodes()) {
    pastRaces.removeChild(pastRaces.children[3])
  }
  // Part 6
  const newRace = document.createElement('li')
  newRace.appendChild(document.createTextNode('Miami'))
  document.querySelector('#past-races').appendChild(newRace)
  // Part 7
  const newDiv = document.createElement('div')
  const mainDiv = document.querySelector('.main')
  newDiv.className = 'blog-post purple'
  const newHOne = document.createElement('h1')
  newHOne.appendChild(document.createTextNode('Miami'))
  const newP = document.createElement('p')
  newDiv.appendChild(newHOne)
  newP.appendChild(
    document.createTextNode("I FIGURED OUT THE SPEED LIMIT, THERE ISN'T ONE")
  )
  newDiv.appendChild(newP)
  console.log(mainDiv)
  mainDiv.appendChild(newDiv)
}
