title: Switch Case
link: http://52.55.189.73/2016/10/02/switch-case/
author: angyixin
description: 
post_id: 62
created: 2016/10/02 08:11:31
created_gmt: 2016/10/02 08:11:31
comment_status: closed
post_name: switch-case
status: publish
post_type: post

# Switch Case

Using the werewolf example 
    
    
    var moonPhase = 'full'
    
    if ( moonPhase === 'full' ) {
      console.log('Howwwwlll!!');
    } else if ( moonPhase === 'mostly full' ){
      console.log('Arms and legs are getting hairier');
    } else if ( moonPhase === 'mostly new' ){
      console.log('Back on two feet');
    } else {
      console.log('Invalid moon phase');
    }
    

Translate into Switch Case 
    
    
    / Using if else
    
    switch (moonPhase){
      case 'full':
        console.log('Howwwwlll!!');
      	break;
      case 'mostly full':
        console.log('Arms and legs are getting hairier');
        break;
      case 'mostly new':
        console.log('Back on two feet');
        break;
      default:
        console.log ('Invalid moonPhase');
        break;
    }
    

  [codepen_embed height="300" theme_id="13935" slug_hash="ZpXvzg" default_tab="result" user="onestaryx"]See the Pen [Codeacademy Javascript if else exercise (Traffic Light Example)](http://codepen.io/onestaryx/pen/ZpXvzg/) by Onestaryx ([@onestaryx](http://codepen.io/onestaryx)) on [CodePen](http://codepen.io).[/codepen_embed] 
    
    
    var lunch = prompt("What do you want for lunch?","Type your lunch choice here");
    
    switch(lunch){
      case 'sandwich':
        console.log("Sure thing! One sandwich, coming up.");
        break;
      case 'soup':
        console.log("Got it! Tomato's my favorite.");
        break;
      case 'salad':
        console.log("Sounds good! How about a caesar salad?");
        break;
      case 'pie':
        console.log("Pie's not a meal!");
        break;
      default:
        console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
    }
    
    
    var color = prompt("What's your favorite primary color?","Type your favorite color here");
    
    switch(color) {
      case 'red':
        console.log("Red's a good color!");
        break;
      case 'blue':
        console.log("That's my favorite color, too!");
        break;
      case 'yellow': 
        console.log("Great! Bright and cheery.");
        break;  
      default:
        console.log("I don't think that's a primary color!");
    }