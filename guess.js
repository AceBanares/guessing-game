      
      // STEP 1: Initialize game variables
      var num;

      // STEP 1a: Pick random number
      setNum();

      function setNum() {
        num = Math.floor((Math.random() * 100) + 1);
        console.log(num);
      }

      // STEP 1b: Create variables to represent the three paragraphs above that will contain user feedback
      var guesses = document.querySelector('#guesses');
      var lastResult = document.querySelector('#lastResult');
      var result = document.querySelector('#lowOrHi');

      // STEP 1c: Create variables to represent the guessing form
      var guessBox = document.querySelector('#guessField');
      var guess = document.querySelector('#guess');
      
      guessBox.addEventListener('keyup', submitGuess);

      function submitGuess(event) {
        if(event.keyCode == 13) {
          guess.click();
        }
      }

      // STEP 1d: Create variables to initialize counter for number of guesses
      var guessCount = 1;
       
      // STEP 1e: Create a variable to represent the game reset button
      var reset = document.querySelector('#reset');
      
      // STEP 2: Put focus on the field that allows user to type in guesses
      guessBox.focus();

      // STEP 3: Build a function to check the user's guess
      var lastGuess;

      function checkGuess() {
        // STEP 3a: Create a variable to contain what number the user entered
        var guess = guessBox.value;

        // STEP 3b: If this is the first guess, add some text to the screen as a label for listing previous guesses for reference
        if(guessCount == 1) {
          guesses.textContent = "List of guesses: " + guess;
        } 
        // STEP 3c: Add the user's current guess to that list, plus a space
        else {
          guesses.textContent += ", " + guess;
          lastResult.textContent = "Your last guess is " + lastGuess
        }

        lastGuess = guess;
        // STEP 3d: Conditional - the user guessed correctly
        if(guess == num) {
          result.textContent = 'GAME OVER: You got the number!';
          // Output a success message, then end the game
          endGame();
        }
      
        // STEP 3e: Conditional - the user is all out of guesses
        else if(guessCount >= 10) {
          // Output an appropriate message, then end the game
          result.textContent = 'OUT OF GUESSES: The number is ' + num + "."
          endGame();
        }
        // STEP 3f: Conditional - the user's guess is incorrect
        else {
          // Output an appropriate message
          result.textContent = 'WRONG GUESS: ';
          
          // If the guess is too low, let the user know
          if(guess < num) {
            result.textContent += 'Too low.'
          }          
          // Else if the guess is too high, let the user know
          else {
            result.textContent += 'Too high.'
          }
        }      
        // STEP 3g: Increment the guess count, move focus to the guess field for the next guess, and clear out the old input
        guessCount++;
        newGuess();
        
        // STEP 3h: Proceed to the bottom of this file, just before we close out the SCRIPT element
      }

      function newGuess() {
        guessField.value = null;
        guessField.focus();
      }

      // STEP 4: Build a function to end the game
      function endGame() {
        // STEP 4a: Disable the guessing field and submit button
        guess.disabled = true;
        guessField.disabled = true;
      }
        // STEP 4b: Build a new button to start a new game
          // ADDED A NEW BUTTON TO HTML (for now)

        // STEP 4c: Add a click event to the new button that calls resetGame function        
        reset.addEventListener('click', resetGame);

      // STEP 5: Build a function to start a new game
      function resetGame() {

        // STEP 5a: Restore the guessCount variable to 1
        guessCount = 1;
        
        // STEP 5b: Clear out all the old messages in the paragraphs below the guessing form - this will need a loop
        result.textContent = null;
        lastResult.textContent = null;
        guesses.textContent = null;
        
        // STEP 5c: Remove the reset button
          // NO MORE RESET BUTTON (changed to New Game)

        // STEP 5d: Re-enable the guessing form, clear out any old input, then put focus on the field
        guess.disabled = false;
        guessField.disabled = false;
   
        // STEP 5e: Change background color of lastResult paragraph back to white
          // SET TO BLACK BY DEFAULT

        // STEP 5f: Generate a new random number
        console.clear();
        setNum();
        newGuess();
      }
      
        // STEP 3i: Add an event listener for the guess form button that calls the checkGuess function
      
      // STEP 1: Initialize game variables
      var num;

      // STEP 1a: Pick random number
      setNum();

      function setNum() {
        num = Math.floor((Math.random() * 100) + 1);
        console.log(num);
      }

      // STEP 1b: Create variables to represent the three paragraphs above that will contain user feedback
      var guesses = document.querySelector('#guesses');
      var lastResult = document.querySelector('#lastResult');
      var result = document.querySelector('#lowOrHi');

      // STEP 1c: Create variables to represent the guessing form
      var guessBox = document.querySelector('#guessField');
      var guess = document.querySelector('#guess');
      
      guessBox.addEventListener('keyup', submitGuess);

      function submitGuess(event) {
        if(event.keyCode == 13) {
          guess.click();
        }
      }

      // STEP 1d: Create variables to initialize counter for number of guesses
      var guessCount = 1;
       
      // STEP 1e: Create a variable to represent the game reset button
      var reset = document.querySelector('#reset');
      
      // STEP 2: Put focus on the field that allows user to type in guesses
      guessBox.focus();

      // STEP 3: Build a function to check the user's guess
      var lastGuess;

      function checkGuess() {
        // STEP 3a: Create a variable to contain what number the user entered
        var guess = guessBox.value;

        // STEP 3b: If this is the first guess, add some text to the screen as a label for listing previous guesses for reference
        if(guessCount == 1) {
          guesses.textContent = "List of guesses: " + guess;
        } 
        // STEP 3c: Add the user's current guess to that list, plus a space
        else {
          guesses.textContent += ", " + guess;
          lastResult.textContent = "Your last guess is " + lastGuess
        }

        lastGuess = guess;
        // STEP 3d: Conditional - the user guessed correctly
        if(guess == num) {
          result.textContent = 'GAME OVER: You got the number!';
          // Output a success message, then end the game
          endGame();
        }
      
        // STEP 3e: Conditional - the user is all out of guesses
        else if(guessCount >= 10) {
          // Output an appropriate message, then end the game
          result.textContent = 'OUT OF GUESSES: The number is ' + num + "."
          endGame();
        }
        // STEP 3f: Conditional - the user's guess is incorrect
        else {
          // Output an appropriate message
          result.textContent = 'WRONG GUESS: ';
          
          // If the guess is too low, let the user know
          if(guess < num) {
            result.textContent += 'Too low.'
          }          
          // Else if the guess is too high, let the user know
          else {
            result.textContent += 'Too high.'
          }
        }      
        // STEP 3g: Increment the guess count, move focus to the guess field for the next guess, and clear out the old input
        guessCount++;
        newGuess();
        
        // STEP 3h: Proceed to the bottom of this file, just before we close out the SCRIPT element
      }

      function newGuess() {
        guessField.value = null;
        guessField.focus();
      }

      // STEP 4: Build a function to end the game
      function endGame() {
        // STEP 4a: Disable the guessing field and submit button
        guess.disabled = true;
        guessField.disabled = true;
      }
        // STEP 4b: Build a new button to start a new game
          // ADDED A NEW BUTTON TO HTML (for now)

        // STEP 4c: Add a click event to the new button that calls resetGame function        
        reset.addEventListener('click', resetGame);

      // STEP 5: Build a function to start a new game
      function resetGame() {

        // STEP 5a: Restore the guessCount variable to 1
        guessCount = 1;
        
        // STEP 5b: Clear out all the old messages in the paragraphs below the guessing form - this will need a loop
        result.textContent = null;
        lastResult.textContent = null;
        guesses.textContent = null;
        
        // STEP 5c: Remove the reset button
          // NO MORE RESET BUTTON (changed to New Game)

        // STEP 5d: Re-enable the guessing form, clear out any old input, then put focus on the field
        guess.disabled = false;
        guessField.disabled = false;
   
        // STEP 5e: Change background color of lastResult paragraph back to white
          // SET TO BLACK BY DEFAULT

        // STEP 5f: Generate a new random number
        console.clear();
        setNum();
        newGuess();
      }
      
        // STEP 3i: Add an event listener for the guess form button that calls the checkGuess function
        guess.addEventListener('click', checkGuess);