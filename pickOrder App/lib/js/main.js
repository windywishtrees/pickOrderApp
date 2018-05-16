//main.js holds core application functionality

//global variables for life totals
    var playerOneLife = 40;
    var playerTwoLife = 40;
    var playerThreeLife = 40;
    var playerFourLife = 40;

//get player names from HTML input, put them into an array, print out players entered. 
  function getPlayerNames() {

    var playerOneName = document.getElementById('playerOneNameInput').value;
    var playerTwoName = document.getElementById('playerTwoNameInput').value;
    var playerThreeName = document.getElementById('playerThreeNameInput').value;
    var playerFourName = document.getElementById('playerFourNameInput').value;
    var playerNameArray = new Array(playerOneName, playerTwoName, playerThreeName, playerFourName);

    var playersToHTML = document.getElementById("printPlayers");

   
    playersToHTML.innerHTML = playerNameArray.join(" + ");

    console.log('Player Names are: ' + playerNameArray);
    return playerNameArray;

   
  }

// randomize anything passed into shuffle function as the array parameter.
  function shuffle(array) {

    var currentIndex = array.length,
      temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
    console.log(array);
  }



//pass playerNameArray into shuffle function and print out array to HTML. 
  function pickOrder(){

    var playerNameArray = getPlayerNames();
    playerNameArray = shuffle(playerNameArray);
    var orderToHTML = document.getElementById("printOrder");

    //print out turn order


    orderToHTML.innerHTML = playerNameArray.join(" <br> ");
    
   document.getElementById("playerOneNamePrint").innerHTML = playerNameArray[0];
   document.getElementById("playerTwoNamePrint").innerHTML = playerNameArray[1];
   document.getElementById("playerThreeNamePrint").innerHTML = playerNameArray[2];
   document.getElementById("playerFourNamePrint").innerHTML = playerNameArray[3];
  }

    ////////////////////////////
    // Life Functions///////////
    ////////////////////////////   


    // Adjusts players life based upon amount parameter. 
        function adjustLife(playerLifeTotal, playerElementID, amount)
    {
      var total = parseInt(document.getElementById(playerElementID).value, 10);

      total += amount;
      playerLifeTotal = total;
      document.getElementById(playerElementID).value = playerLifeTotal;
    
    }


   // Reset button, sets player's life to 40 (starting life Total)
    function resetLife(playerLifeTotal, playerElementID)
    {
      var total = parseInt(document.getElementById(playerElementID).value, 10);

      total = 40;
      playerLifeTotal = total;
      document.getElementById(playerElementID).value = playerLifeTotal;    

    }
