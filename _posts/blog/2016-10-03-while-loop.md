title: While loop
link: http://52.55.189.73/2016/10/03/while-loop/
author: angyixin
description: 
post_id: 139
created: 2016/10/03 09:14:27
created_gmt: 2016/10/03 09:14:27
comment_status: closed
post_name: while-loop
status: publish
post_type: post

# While loop

The while loop is ideal when you want to use a loop, but you don't know how many times you'll have to execute that loop. 
    
    
    var cards = ['Diamond', 'Spade', 'Heart', 'Club'];
    var currentCard = 'Heart';
    
    while (currentCard !== 'Spade') {
      console.log(currentCard);
    
      var randomNumber = Math.floor(Math.random() * 4);
      //assigning a random suit to a card from the array list.
      // i.e. currentCard = cards[2];
      currentCard = cards[randomNumber];
    }
    // outside the while loop, log the card when the while loop ends if card is a spade.
    console.log('Found a Spade!');
    

Exercise : Keep flipping as long as the results is heads. In the example, the computer was randomly flipping a coin: while the coin came up heads (when coinFace equalled 0), it would flip again, and it would stop flipping once it got tails (when coinFace was 1). Since the flip was random, we didn't know ahead of time how many loops we'd need. Hence a while loop 
    
    
    // 
    // math.random will generate a random number between 0 and 1 
    // math.floor round down 
    
    var coinFace = Math.floor(Math.random() * 2);
    // so this will generate a number between 0 and 2 and will always round down so it will be 0 or 1
    
    
    // if 0, keep flipping
    while(coinFace === 0){
    	console.log("Heads! Flipping again...");
    	var coinFace = Math.floor(Math.random() * 2);
    }
    // if not
    console.log("Tails! Done flipping.");
    
    
    var bool = true;
    while(bool){
        //Do something
    }
    
    //is the same thing as
    
    var bool = true;
    while(bool === true){
        //Do something
    }

Write a while loop that logs "I'm looping!" to the console three times. 
    
    
    //Remember to set your condition outside the loop!
    var count = 0;
    
    var loop = function(){
    	while(count < 3){
    		console.log("I'm looping!");
    		count++;
    	}
    };
    
    loop();

Another example 
    
    
    //Remember to make your condition true outside the loop!
    var myCondition = true;
    
    var soloLoop = function(){
        while (myCondition) {
            console.log("Looped once!");
            /*important to set it to false, 
            if not will infinite loop and crash the browser*/
            myCondition = false;
            }
    };
    
    soloLoop();

the do / while loop 

> Sometimes you want to make sure your loop runs _at least one time_ no matter what. When this is the case, you want a modified `while` loop called a `do`/`while `loop. This loop says: "Hey! Do this thing one time, _then_ check the condition to see if we should keep looping." After that, it's just like a normal `while`: the loop will continue so long as the condition being evaluated is true.
    
    
    var loopCondition = false;
    
    do {
    	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
    } while (loopCondition);

Another do/while example 
    
    
    var i = 0;
    var getToDaChoppa = function(){
      do {
          console.log( "The number is " + i);
          i ++;
          } 
      while (i < 10)
      
    };
    
    getToDaChoppa();