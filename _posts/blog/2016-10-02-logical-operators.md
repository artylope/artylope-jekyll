title: Logical Operators
link: http://52.55.189.73/2016/10/02/logical-operators/
author: angyixin
description: 
post_id: 56
created: 2016/10/02 08:06:36
created_gmt: 2016/10/02 08:06:36
comment_status: closed
post_name: logical-operators
status: publish
post_type: post

# Logical Operators

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

To say "both must be true," we can use &&. 
    
    
    var stopLight = 'red';
    var pedestrians = false;
    
    if (stopLight === 'green' && pedestrians === false) {
      console.log('Go!');
    } else {
      console.log('Stop');
    }

To say "Either can be true," we can use ||. To say "I want to make sure this is the opposite of what it really is," we can use "!=". 
    
    
    // 
    
    var iLoveJavaScript = false;
    var iLoveLearning = false;
    
    if(iLoveJavaScript && iLoveLearning) {
      // if iLoveJavaScript AND iLoveLearning:
      console.log("Awesome! Let's keep learning!");
    } else if(!(iLoveJavaScript || iLoveLearning)) {
      // if NOT iLoveJavaScript OR iLoveLearning:
      console.log("Dislike both? Let's see if we can change your mind.");
    } else {
      console.log("You only like one but not the other? We'll work on it.");
    }

Using && \- the AND operator 
    
    
    //
    
    
    var hungry = true;
    var foodHere = true;
    
    var eat = function(String){
    
        if (hungry && foodHere) {
        return true;
           }else {
        return false;
        }
    
    }
    
    
    //true && true;    // => true
    //true && false;   // => false
    //false && true;   // => false
    //false && false;  // => false

  Using || - the AND operator 
    
    
    //
    
    
    var tired = true;
    var bored = false;
    
    var nap = function() {
      if (tired || bored) {
          return true;
          } else {
              return false;}
    };
    
    
    //true || true;     // => true
    //true || false;    // => true
    //false || true;    // => true
    //false || false;   // => false

  Using the ! - the NOT operator 
    
    
    //
    
    var programming = false;
    
    var happy = function() {
      // Add your if/else statement here!
      if (programming){
          return false; }
          else {
              return true;
              }
    };
    
    happy();
    
    
    !true;   // => false
    !false;  // => true