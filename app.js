/*-------------------------------- Constants --------------------------------*/
let threeCardGrid, oneCardSlot
let cardCalled = {}





/*---------------------------- Variables (state) ----------------------------*/






/*------------------------ Cached Element References ------------------------*/

const askTheDeck = document.getElementById('ask-the-deck')
const unhappyCustomer = document.getElementById('unhappy-customer')
const reset = document.getElementById('reset-deck')
const pastCardTitle = document.getElementById('past-title')
const pastCardMeaning = document.getElementById('past-meaning')
const presentCardTitle = document.getElementById('present-title')
const presentCardMeaning = document.getElementById('present-meaning')
const futureCardTitle = document.getElementById('future-title')
const futureCardMeaning = document.getElementById('future-meaning')
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
    // threeCardGrid = [null, null, null]
    // oneCardSlot = [null]
    pastCardMeaning.innerText = ''
    presentCardMeaning.innerText = ''
    futureCardMeaning.innerText = ''
    document.getElementById('question-card').innerText = ''
}

// On-Click function:
// Set up what happens when one of the elements
// is clicked

function grabACard(e){
    fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1')
    .then(function (response) {
        return response.json()
        // handle 1 random cards
      })
    .then(function(cardContent){
        console.log(cardContent)
        cardCalled['name'] = cardContent['cards'][0]['name']
        console.log(cardCalled['name'])
        cardCalled['meaning'] = cardContent['cards'][0]['meaning_up']
        console.log(cardCalled['meaning'])
        // values don't match card image folders, but their names do
        // match by name value
        appendCard()

    })
      .catch(function (error) {
          // handle what went wrong
      })
    }



// function appendCard(e.target.id) {
//     for(let i = 0; i < threeCardGrid.length; i++){
//         let slot = threeCardGrid[i]
//         if(slot === null && i === e.target.id){
//             slot = 1

//         }
//     }
// }

function appendCard(){
    if(pastCardMeaning.innerText === '' && pastCardTitle.innerText === ''){
        pastCardMeaning.innerText = `${cardCalled.meaning}`
        console.log(pastCardMeaning)
        pastCardTitle.innerText = `${cardCalled.name}`
        console.log(pastCardTitle)
    }
    else if(presentCardMeaning.innerText === '' && presentCardTitle.innerText === ''){
        presentCardMeaning.innerText = `${cardCalled.meaning}`
        console.log(presentCardMeaning)
        presentCardTitle.innerText = `${cardCalled.name}`
        console.log(presentCardTitle)
    }
    else if(futureCardMeaning.innerText === '' && futureCardTitle.innerText === ''){
        futureCardMeaning.innerText = `${cardCalled.meaning}`
        console.log(futureCardMeaning)
        futureCardTitle.innerText = `${cardCalled.name}`
        console.log(futureCardTitle)
    }
}

// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so

// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is