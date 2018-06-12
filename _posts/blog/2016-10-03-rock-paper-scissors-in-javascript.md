title: Rock Paper Scissors in Javascript
link: http://52.55.189.73/2016/10/03/rock-paper-scissors-in-javascript/
author: angyixin
description: 
post_id: 124
created: 2016/10/03 06:02:14
created_gmt: 2016/10/03 06:02:14
comment_status: closed
post_name: rock-paper-scissors-in-javascript
status: publish
post_type: post

# Rock Paper Scissors in Javascript

// get user choice
    var userChoice = prompt("Do you choose rock, paper or scissors?");
    console.log ("user: " + userChoice);
    
    // get computer choice
    var computerChoice = Math.random();
    
    if (computerChoice < 0.34) {
    	computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
    	computerChoice = "paper";
    } else {
    	computerChoice = "scissors";
    } 
    
    console.log("computer: " + computerChoice);
    
    // function to compare between computer and user
    var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
        } 
        
    else if (choice1 === "rock"){
            if (choice2 === "scissors") {
                return "rock wins";
                } else {
                    return "paper wins";
                    }
    }
    
    else if (choice1 === "paper"){
            if (choice2 === "rock") {
                return "paper wins";
                } else {
                    return "scissors wins";
                    }
    }
    
    else if (choice1 === "scissors"){
            if (choice2 === "rock") {
                return "rock wins";
                } else {
                    return "scissors wins";
                    }
      }
    };
    
    results = compare(userChoice, computerChoice);
    console.log(results);
    

 

  * What if a user makes an inappropriate choice like 'dog'? How can we extend the function to handle that?
  * What if players in the game could also choose Rope in this game?
  * In this version, if both players make the same choice, the game returns a tie. What if the game didn't end there but instead asked both players for new choices?