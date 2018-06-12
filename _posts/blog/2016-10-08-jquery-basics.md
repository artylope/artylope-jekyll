title: JQuery Basics and Variables
link: http://52.55.189.73/2016/10/08/jquery-basics/
author: angyixin
description: 
post_id: 346
created: 2016/10/08 09:33:06
created_gmt: 2016/10/08 09:33:06
comment_status: closed
post_name: jquery-basics
status: publish
post_type: post

# JQuery Basics and Variables

Set up almost always start like this 
    
    
    $(document).ready(function() {
        $('thingToTouch').event(function() {
            $('thingToAffect').effect();
        });
    });

  * Get ready to run JQuery on a HTML Document
  * What happens when mouse enter the element
  * What happens when mouse leaves element
  * Applying fading effect to the opacity of the div elements
Example 
    
    
    $(document).ready(function(){
        $('div').mouseenter(function(){
            $('div').fadeTo('slow',1)
            });
        $('div').mouseleave(function(){
            $('div').fadeTo('fast',0.5)
            });
        });

  Variables in JQ 
    
    
    var lucky = 7;
    var name = "Codecademy";
    var $p = $('p');
    var $h1 = $('<h1>Hello</h1>');
    
    //Such that
    
    $(document).ready(function() {
        var $target = $('#target');
        $target.fadeOut('fast');
    });

So remember... 

  1. Start with the function keyword
  2. Inputs go between ()
  3. Actions go between {}
  4. Inputs are separated by commas.
  5. Inputs can include other functions!
So some jQuery functions  
    
    
    .fadeIn();
    .fadeOut();
    .fadeTo();
    .click();
    .hide();
    .show();
    .mouseenter();
    .mouseleave();

  [codepen_embed height="300" theme_id="13935" slug_hash="wzyVzJ" default_tab="html,result" user="onestaryx"]See the Pen [jQuery Example Codecademy Make Vanish on click](http://codepen.io/onestaryx/pen/wzyVzJ/) by Onestaryx ([@onestaryx](http://codepen.io/onestaryx)) on [CodePen](http://codepen.io).[/codepen_embed] Another Example [codepen_embed height="300" theme_id="13935" slug_hash="VKQobY" default_tab="css,result" user="onestaryx"]See the Pen [Toggle Panel Slide up slide down Jquery Codecademy Example](http://codepen.io/onestaryx/pen/VKQobY/) by Onestaryx ([@onestaryx](http://codepen.io/onestaryx)) on [CodePen](http://codepen.io).[/codepen_embed]