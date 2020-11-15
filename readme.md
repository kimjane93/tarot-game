## Pseudo Code Breakdown Of Tarot Reading

* Stage One: Establish Deck
  * need randomizer Math.floor(Math.random() * (max - min + 1) + min)
  * set randomizer with a max of 78, to match a full tarot deck
  * OR: Found ekelen/tarot-api on github that has random selector for any number of cards, can have it call every time deck is clicked?
     ```
     const axios = require('axios');

    axios.get('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1')
      .then(function (response) {
        // handle 1 random card
      })
      .catch(function (error) {
    	  // handle what went wrong
      })
![methods of calling the deck](https://i.imgur.com/J8a6R8h.png)
[Json Of Tarot Card Images](https://github.com/equokka/tarot-json/)
[Card Images and Content Object?](https://www.kaggle.com/lsind18/tarot-json?select=tarot-images.json)
  

  * each number assigned manually or through pre-existing API content to a specific card text and graphic
* Stage 3: Customize Reading:
  * create input button with message asking user to enter their name
  * through and event listener on the button their name is then added as HTML to a header: `${input-value}'s Reading`
* Stage 2: Focus Intent On The Deck
  * Add an event listener to the deck that triggers a temporary message saying 'focus your intent on the deck before you select your cards
* Stage 3: Select Cards
  * Add click event listener to the deck
  * a click triggers revealing a card from the deck
  * The first card result is possibly pushed into an array of 3 slots
    * the first slot being a past-associated card
    * the second slot being a present-associated card
    * the third slot being a future-associated card
  * If the array has three truth values, return, do not let them continue to select cards
  * If there are three truth values in the card away, append text: 'May your reading prompt insight!'
  * The cards selected are tied to a specfic text or API-called text that is appended into a id-determined div
* Stage 4: New Reading
  * set button to re-initialize a newwly shuffled deck
  * empty input and heading for new name/player
* Stage 5: Pretty It Up
  * add audio button/listener for mood music (soft speakeady jazz?)
  * Determine if Need to Learn How To Upload Graphics Into Digital Card Format, or if there is an api with a tarot deck fully stored
  * background styling# tarot-game
# tarot-game
# tarot-game
