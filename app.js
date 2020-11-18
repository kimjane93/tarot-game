/*-------------------------------- Constants --------------------------------*/
let cardCalled = {}
let fortuneCalled = {
    dose: 'Tarot Cards, like fortune cookies, are meant to prompt introspection, but are not actual direct answers to your specific lot in life, merely randomized information to which we assign significance. Look for meaning in a way that benefits you.'
}
let cards = [
    {
      "name": "The Fool",
      "img": "m00.jpg"
    },
    {
      "name": "The Magician",
      "img": "m01.jpg"
    },
    {
      "name": "The High Priestess",
      "img": "m02.jpg"
    },
    {
      "name": "The Empress",
      "img": "m03.jpg"
    },
    {
      "name": "The Emperor",
      "img": "m04.jpg"
    },
    {
      "name": "The Hierophant",
      "img": "m05.jpg"
    },
    {
      "name": "The Lovers",
      "img": "m06.jpg"
    },
    {
      "name": "The Chariot",
      "img": "m07.jpg"
    },
    {
      "name": "Strength",
      "img": "m08.jpg"
    },
    {
      "name": "The Hermit",
      "img": "m09.jpg"
    },
    {
      "name": "Wheel of Fortune",
      "img": "m10.jpg"
    },
    {
      "name": "Justice",
      "img": "m11.jpg"
    },
    {
      "name": "The Hanged Man",
      "img": "m12.jpg"
    },
    {
      "name": "Death",
      "img": "m13.jpg"
    },
    {
      "name": "Temperance",
      "img": "m14.jpg"
    },
    {
      "name": "The Devil",
      "img": "m15.jpg"
    },
    {
      "name": "The Tower",
      "img": "m16.jpg"
    },
    {
      "name": "The Star",
      "img": "m17.jpg"
    },
    {
      "name": "The Moon",
      "img": "m18.jpg"
    },
    {
      "name": "The Sun",
      "img": "m19.jpg"
    },
    {
      "name": "Judgement",
      "img": "m20.jpg"
    },
    {
      "name": "The World",
      "img": "m21.jpg"
    },
    {
      "name": "Ace of Cups",
      "img": "c01.jpg"
    },
    {
      "name": "Two of Cups",
      "img": "c02.jpg"
    },
    {
      "name": "Three of Cups",
      "img": "c03.jpg"
    },
    {
      "name": "Four of Cups",
      "img": "c04.jpg"
    },
    {
      "name": "Five of Cups",
      "img": "c05.jpg"
    },
    {
      "name": "Six of Cups",
      "img": "c06.jpg"
    },
    {
      "name": "Seven of Cups",
      "img": "c07.jpg"
    },
    {
      "name": "Eight of Cups",
      "img": "c08.jpg"
    },
    {
      "name": "Nine of Cups",
      "img": "c09.jpg"
    },
    {
      "name": "Ten of Cups",
      "img": "c10.jpg"
    },
    {
      "name": "Page of Cups",
      "img": "c11.jpg"
    },
    {
      "name": "Knight of Cups",
      "img": "c12.jpg"
    },
    {
      "name": "Queen of Cups",
      "img": "c13.jpg"
    },
    {
      "name": "King of Cups",
      "img": "c14.jpg"
    },
    {
      "name": "Ace of Swords",
      "img": "s01.jpg"
    },
    {
      "name": "Two of Swords",
      "img": "s02.jpg"
    },
    {
      "name": "Three of Swords",
      "img": "s03.jpg"
    },
    {
      "name": "Four of Swords",
      "img": "s04.jpg"
    },
    {
      "name": "Five of Swords",
      "img": "s05.jpg"
    },
    {
      "name": "Six of Swords",
      "img": "s06.jpg"
    },
    {
      "name": "Seven of Swords",
      "img": "s07.jpg"
    },
    {
      "name": "Eight of Swords",
      "img": "s08.jpg"
    },
    {
      "name": "Nine of Swords",
      "img": "s09.jpg"
    },
    {
      "name": "Ten of Swords",
      "img": "s10.jpg"
    },
    {
      "name": "Page of Swords",
      "img": "s11.jpg"
    },
    {
      "name": "Knight of Swords",
      "img": "s12.jpg"
    },
    {
      "name": "Queen of Swords",
      "img": "s13.jpg"
    },
    {
      "name": "King of Swords",
      "img": "s14.jpg"
    },
    {
      "name": "Ace of Wands",
      "img": "w01.jpg"
    },
    {
      "name": "Two of Wands",
      "img": "w02.jpg"
    },
    {
      "name": "Three of Wands",
      "img": "w03.jpg"
    },
    {
      "name": "Four of Wands",
      "img": "w04.jpg"
    },
    {
      "name": "Five of Wands",
      "img": "w05.jpg"
    },
    {
      "name": "Six of Wands",
      "img": "w06.jpg"
    },
    {
      "name": "Seven of Wands",
      "img": "w07.jpg"
    },
    {
      "name": "Eight of Wands",
      "img": "w08.jpg"
    },
    {
      "name": "Nine of Wands",
      "img": "w09.jpg"
    },
    {
      "name": "Ten of Wands",
      "img": "w10.jpg"
    },
    {
      "name": "Page of Wands",
      "img": "w11.jpg"
    },
    {
      "name": "Knight of Wands",
      "img": "w12.jpg"
    },
    {
      "name": "Queen of Wands",
      "img": "w13.jpg"
    },
    {
      "name": "King of Wands",
      "img": "w14.jpg"
    },
    {
      "name": "Ace of Pentacles",
      "img": "p01.jpg"
    },
    {
      "name": "Two of Pentacles",
      "img": "p02.jpg"
    },
    {
      "name": "Three of Pentacles",
      "img": "p03.jpg"
    },
    {
      "name": "Four of Pentacles",
      "img": "p04.jpg"
    },
    {
      "name": "Five of Pentacles",
      "img": "p05.jpg"
    },
    {
      "name": "Six of Pentacles",
      "img": "p06.jpg"
    },
    {
      "name": "Seven of Pentacles",
      "img": "p07.jpg"
    },
    {
      "name": "Eight of Pentacles",
      "img": "p08.jpg"
    },
    {
      "name": "Nine of Pentacles",
      "img": "p09.jpg"
    },
    {
      "name": "Ten of Pentacles",
      "img": "p10.jpg"
    },
    {
      "name": "Page of Pentacles",
      "img": "p11.jpg"
    },
    {
      "name": "Knight of Pentacles",
      "img": "p12.jpg"
    },
    {
      "name": "Queen of Pentacles",
      "img": "p13.jpg"
    },
    {
      "name": "King of Pentacles",
      "img": "p14.jpg"
    }
  ]




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
const unhappyCustomer = document.getElementById('unhappy-customer')
const fortuneCookie = document.getElementById('fortune-cookie')
const doseOfReality = document.getElementById('dose-of-reality')
const reset = document.getElementById('reset-deck')
const questionInput = document.getElementById('question')
const askTheDeck = document.getElementById('ask-the-deck')
const questionCardTitle = document.getElementById('card-title')
const questionCardMeaning = document.getElementById('card-meaning')

/*----------------------------- Event Listeners -----------------------------*/

mainDeck.addEventListener('click', grabACard)
askTheDeck.addEventListener('click', oneCardAnswer)
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
    questionCardTitle.innerText = ''
    questionCardMeaning.innerText = ''
    questionInput.value = ''
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

function oneCardAnswer(e) {
    initDeck()
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
        appendAnswer()

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

function appendCard(e){
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

function appendAnswer() {
    questionCardTitle.innerText = `${cardCalled.name}`
    questionCardMeaning.innerText = `${cardCalled.meaning}`
}


function appendFortune() {
    fortuneCookie.innerText = `Have A Fortune Cookie:  
    ${fortuneCalled.fortune}`
    doseOfReality.innerText = `${fortuneCalled.dose}`
    let iterator = cards.values()
    for(let value of iterator){
        if(value.name === cardCalled.name){
            let futureImage = document.createElement('img')
            futureImage.setAttribute('src', "/tarot-json/cards/`${value.img}`")
            futureCardImage.appendChild(futureImage)
        }
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


