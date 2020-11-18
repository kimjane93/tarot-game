/*-------------------------------- Constants --------------------------------*/
let threeCardGrid, oneCardSlot





/*---------------------------- Variables (state) ----------------------------*/






/*------------------------ Cached Element References ------------------------*/

const askTheDeck = document.getElementById('ask-the-deck')
const unhappyCustomer = document.getElementById('unhappy-customer')
const reset = document.getElementById('reset-deck')
const pastCard = document.getElementById('past')
const presentCard = document.getElementById('present')
const futureCard = document.getElementById('future')
const mainDeck = document.getElementById('main-deck')

/*----------------------------- Event Listeners -----------------------------*/

mainDeck.addEventListener('click', grabACard)
// askTheDeck.addEventListener('click', oneCardAnswer)
// unhappyCustomer.addEventListener('click', releaseTheFortune)
reset.addEventListener('click', initDeck)
/*-------------------------------- Functions --------------------------------*/
// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading

function initDeck(){
    threeCardGrid = [null, null, null]
    oneCardSlot = [null]
    document.getElementById('past').innerHTML = null
    document.getElementById('present').innerHTML = null
    document.getElementById('future').innerHTML = null
    document.getElementById('question').innerText = null
}

// On-Click function:
// Set up what happens when one of the elements
// is clicked

function grabACard(){
    fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1')
    .then(function (response) {
        return response.json()
        // handle 1 random cards
      })
    .then(function(cardContent){
        console.log(cardContent)
        let cardCalled = {}
        cardCalled['name'] = cardContent['cards'][0]['name']
        console.log(cardCalled['name'])
        cardCalled['meaning'] = cardContent['cards'][0]['meaning_up']
        console.log(cardCalled['meaning'])
        cardCalled['value'] = cardContent['cards'][0]['value']
        console.log(cardCalled['value'])
        cardCalled['shortName'] = cardContent['cards'][0]['name_short']
        console.log(cardCalled['shortName'])
        // values don't match card image folders, but their names do
        // match by name value
        appendCard()

    })
      .catch(function (error) {
          // handle what went wrong
      })
    }



function appendCard() {
    
}

// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so

// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is