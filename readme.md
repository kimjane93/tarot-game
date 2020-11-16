## Pseudo Code Breakdown Of Tarot Reading
#### Screenshots of Postman and Wireframe + Game Flow at Bottom of Read Me

* Set Your HTML Boilerplate:
  * link your js and css files in the head tag
    * (use defer in the script tag if in the head - don't forget!)
  * set header in your body to "Get A Virtual Tarot Reading!"
  * Set An Image of A Tarot Deck to your body in a div (css styling y'all)
  * Set a header above the deck image indicating to the user to click the deck to select 3 cards for a past, present, future reading
  * set empty d
  * set button to reset your deck for a new reading
  * set button to allow user to ask specfic questions of the deck(one card responses) 
  * set button for if a user doesn't like or understand their reading

* JS: Establish Deck
  * Set Deck image on browser to an event listener:
    * event listener triggers a callback function upon being clicked to create a container and set the innerHTML to tarot-api call with card text  
      * [Tarot Text Api - url call for 1 random card](https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1) 
      * ![methods of calling the deck](https://i.imgur.com/J8a6R8h.png)
       * If that called card text matches the key of an image in our tarot card JSON, add that into the container as well 
      * [JSON of card images](https://www.kaggle.com/lsind18/tarot-json?select=tarot-images.json)
    * (Take care of calling the text api first, much more straightforward deal with assigning images once text works, it's making your brain hurt)
  * Set a variable that is an empty array with three indexes
    * each time a card is called, turn one of the elements to 1 in that same event listener
  *  Write a function to check values of that array
     *  if three cards have been selected, aka there are no null values left in the array, return the function to prevent new cards from being clicked

* JS: Buttons
  * add event listener to Reset Button:
    * a click triggers a function which should initialize the settings, clearing innerHTML of preset divs from called card text and images ( or should I put it in a bootstrap card?), and sets nested input button to hidden if it isn't
  * add event listener to Ask Specific Questions:
    * click triggers function that **reveals** an input and button that user can type questions into
      * add event listener to that button that triggers an api call for 1 random card text and image
  * add event listener to I DONT GET IT button:
    * a click triggers and fortune cooke api call that is set as innerHTML of a div or card, along with a 'dose of reality' message
    * [Fortune Cookie API](http://yerkee.com/api)

JS/HTML:
* set and pick mood music
* Pretty It Up
  * add audio button/listener for mood music (soft speakeady jazz?)
  * Determine if Need to Learn How To Upload Graphics Into Digital Card Format, or if there is an api with a tarot deck fully stored
  * background styling# tarot-game

[Wireframe of Tarot Main Page](https://whimsical.com/tarot-LVEyEG58EggpCTPTT9a1Uv)
![Wireframe](https://i.imgur.com/EP1Br3V.png)

[Tarot Game Flow on Whimsical](https://whimsical.com/tarot-LVEyEG58EggpCTPTT9a1Uv)
![Game Flow - sans arrows?](https://i.imgur.com/I3XUTXw.png)

![API Screenshot](https://i.imgur.com/aBZP3hh.png)
![API Screenshot](https://i.imgur.com/LMxsNrw.png)