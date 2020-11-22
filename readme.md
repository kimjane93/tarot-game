# Virtual Tarot Reading

![Screenshots of Tarot Game](https://i.imgur.com/IvFlA38.png)
![Screenshots of Tarot Game](https://i.imgur.com/mujh7r5.png)
![Screenshots of Tarot Game](https://i.imgur.com/z06jfZK.png)
![Screenshots of Tarot Game](https://i.imgur.com/XWMqm5L.png)

## List of Technologies Used:
* Javascript
* HTML
* CSS
* APIs: [Tarot Text Api](https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1) & [Fortune Cookie API](https://api.adviceslip.com/advice)
* Cloned Github Repository: [Tarot Card Images]((https://github.com/equokka/tarot-json))

## Getting Started: 
* [Deployed Tarot Game](http://tarot-game.surge.sh/)
* Simply follow the prompts on the page to get your reading, and see the buttons at the bottom of the screen for more options or to reset the deck
* The APIs are sometimes a little slow to respond, so if you click for a card and nothing appears, refresh the page and wait a few seconds before trying again!

## Next Steps:
* Add in a shuffle deck animation on the main deck when reset button is clicked
* Add additonal types of readings, with more cards, etc.  
     
## Pseudo Code Breakdown Of Tarot Reading
#### **Screenshots of Postman API Calls, Wireframe and Game Flow at Bottom of Read Me**


* Set Your HTML Boilerplate:
  * link your js and css files in the head tag
    * (use defer in the script tag if in the head - don't forget!)
* HTML Scaffolding:
  * set empty div shell that will hold all your page content to be manipualted with CSS Grid
  * set header in your body to "Get A Virtual Tarot Reading!"
  * Set An Image of A Tarot Deck to your body in a div (css styling y'all)
  * Set a header above the deck image indicating to the user to click the deck to select 3 cards for a past, present, future reading
  * set parent div to hold grid of child elements to which card information received from API will be appended
  * set button to reset your deck for a new reading
  * set button to allow user to ask specfic questions of the deck(one card responses) 
  * set button for if a user doesn't like or understand their reading

* JS: Establish Deck
  * Set Deck image on browser to an event listener:
    * event listener triggers a callback function upon being clicked to set the innerText to the API card text.
      * [Tarot Text Api - url call for 1 random card](https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1) 
      * ![methods of calling the deck](https://i.imgur.com/J8a6R8h.png)
    * If that called card's name value matches the that of an indexed image in our tarot image JSON, add that into the container as well 
      * [Cloned Github JSON of card images](https://github.com/equokka/tarot-json)
    *  if child elements of the card divs are empty, fill it with content from API Call, else return, to prevent replacing card calls

* JS: Buttons
  * add event listener to Reset Button:
    * a click triggers a function which should initialize the settings, clearing innerHTML of preset divs from called card text and images, and setting card divs to hidden(specify this also in css so that they are also hidden upon page load until triggered).
  * add event listener to Ask Specific Question button, with same API Call logic and append/render function
  * add event listener to I DONT GET IT button:
    * a click triggers a fortune cooke api call that is set as innerHTML of a div or card, along with a 'dose of reality' message
    * [Fortune Cookie API](https://api.adviceslip.com/advice)

[Wireframe of Tarot Main Page](https://whimsical.com/tarot-LVEyEG58EggpCTPTT9a1Uv)
![Wireframe](https://i.imgur.com/EP1Br3V.png)

[Tarot Game Flow on Whimsical](https://whimsical.com/tarot-LVEyEG58EggpCTPTT9a1Uv)
![Game Flow - sans arrows?](https://i.imgur.com/I3XUTXw.png)

![API Screenshot](https://i.imgur.com/aBZP3hh.png)
![API Screenshot](https://i.imgur.com/LMxsNrw.png)