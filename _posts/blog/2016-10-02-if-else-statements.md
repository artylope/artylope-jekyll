title: If Else Statements
link: http://52.55.189.73/2016/10/02/if-else-statements/
author: angyixin
description: 
post_id: 44
created: 2016/10/02 07:49:08
created_gmt: 2016/10/02 07:49:08
comment_status: closed
post_name: if-else-statements
status: publish
post_type: post

# If Else Statements

A simple if else example 
    
    
    var hungerLevel = 10
    
    if (hungerLevel>5) {
      console.log('Time to eat!')
    } else {
      console.log('Let\'s eat later.')
    }

  Using traffic light as an example 
    
    
    var stopLight = 'green';
    
    if (stopLight === 'red') {
      console.log('Stop');
    } else if (stopLight === 'yellow') {
      console.log('Slow down');
    } else if (stopLight === 'green') {
      console.log('Go!');
    } else {
      console.log('Caution, unknown!');
    }

 
    
    
    if (10 === 10) {
        console.log("You got a true!");
    } else {
        console.log("You got a false!");
    }
    
    
    var isEven = function(number) {
      if (number%2 === 0){
          return true;
          } else {
              return false;
              }
    };
    
    isEven(32);
    
    
    var isEven = function(number) {
      if (number%2 === 0){
          return true;
        }
          
        else if (isNaN(number)){
            return number +' is not a number'; 
        } 
        else {
            return false;
        }
    };
    
    isEven(32);
    isEven('word');