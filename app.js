/*-------------------------------- Constants --------------------------------*/
let cardCalled = {}
let fortuneCalled = {
    dose: 'Tarot Cards, like fortune cookies, are meant to prompt introspection, but are not actual direct answers to your specific lot in life, merely randomized information to which we assign significance. Look for meaning in a way that benefits you.'
}




/*---------------------------- Variables (state) ----------------------------*/






/*------------------------ Cached Element References ------------------------*/


const pastCardImage = document.getElementById('past-image')
const pastCardTitle = document.getElementById('past-title')
const pastCardMeaning = document.getElementById('past-meaning')
const presentCardImage = document.getElementById('present-image')
const presentCardTitle = document.getElementById('present-title')
const presentCardMeaning = document.getElementById('present-meaning')
const futureCardImage = document.getElementById('future-image')
const futureCardTitle = document.getElementById('future-title')
const futureCardMeaning = document.getElementById('future-meaning')
const mainDeck = document.getElementById('main-deck')
const questionInput = document.getElementById('question')
const askTheDeck = document.getElementById('ask-the-deck')
const unhappyCustomer = document.getElementById('unhappy-customer')
const fortuneCookie = document.getElementById('fortune-cookie')
const doseOfReality = document.getElementById('dose-of-reality')
const reset = document.getElementById('reset-deck')

/*----------------------------- Event Listeners -----------------------------*/

mainDeck.addEventListener('click', grabACard)
// askTheDeck.addEventListener('click', oneCardAnswer)
unhappyCustomer.addEventListener('click', releaseTheFortune)
reset.addEventListener('click', initDeck)
/*-------------------------------- Functions --------------------------------*/
// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading

function initDeck(){
    pastCardTitle.innerText = ''
    pastCardMeaning.innerText = ''
    presentCardTitle.innerText = ''
    presentCardMeaning.innerText = ''
    futureCardTitle.innerText = ''
    futureCardMeaning.innerText = ''
    fortuneCookie.innerText = ''
    doseOfReality.innerText = ''
    // document.getElementById('question-card').innerText = ''
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

function releaseTheFortune(e){
    fetch('https://api.adviceslip.com/advice')
    .then(function(response){
        return response.json()
    })
    .then(function(fortuneText){
        console.log(fortuneText)
        fortuneCalled['fortune'] = fortuneText['slip']['advice']
        console.log(fortuneCalled['fortune'])
        appendFortune()
    })
    .catch(function (error) {
        // handle what went wrong
    })
}

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


function appendFortune() {
    fortuneCookie.innerText = `${fortuneCalled.fortune}`
    doseOfReality.innerText= `${fortuneCalled.dose}`
}

// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so

// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is