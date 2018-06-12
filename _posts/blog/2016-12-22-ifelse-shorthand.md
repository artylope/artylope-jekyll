title: if/else shorthand
link: http://52.55.189.73/2016/12/22/ifelse-shorthand/
author: angyixin
description: 
post_id: 509
created: 2016/12/22 07:38:49
created_gmt: 2016/12/22 07:38:49
comment_status: closed
post_name: ifelse-shorthand
status: publish
post_type: post

# if/else shorthand

To express this if/else statement 
    
    
    if(userIsYoungerThan21) {
      serveGrapeJuice();
    }
    else {
      serveWine();
    }

can be written as 
    
    
    userIsYoungerThan21 ? serveGrapeJuice() : serveWine();

More details and explanation here : [http://stackoverflow.com/questions/6259982/how-do-you-use-the-conditional-operator-in-javascript ](http://stackoverflow.com/questions/6259982/how-do-you-use-the-conditional-operator-in-javascript)

 

Example from Codeacademy
    
    
    x ? y : z

where x, y, and z are all JavaScript expressions. When your code is executed, `x` is evaluated as either `true` or `false`. If `x` evaluates to `true`, then the entire ternary operator returns `y`. If `x` evaluates to `false`, then the entire ternary operator returns `z`.

 

How does this work in React
    
    
    var React = require('react');
    var ReactDOM = require('react-dom');
    
    function coinToss () {
      // Randomly return either 'heads' or 'tails'.
      return Math.random() < 0.5 ? 'heads' : 'tails';
    }
    
    var pics = {
      kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
      doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
    };
    
    var img = <img src={pics[coinToss() == 'heads' ? 'kitty' : 'doggy']} />;
    
    ReactDOM.render(
    	img, 
    	document.getElementById('app')
    );