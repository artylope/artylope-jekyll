title: JQuery on Codeacademy
link: http://52.55.189.73/2016/10/08/jquery-on-codeacademy/
author: angyixin
description: 
post_id: 327
created: 2016/10/08 03:23:53
created_gmt: 2016/10/08 03:23:53
comment_status: closed
post_name: jquery-on-codeacademy
status: publish
post_type: post

# JQuery on Codeacademy

I had a conversation with developers on my team reminiscent of the content discussed in this article - [How it feels to learn JavaScript in 2016](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.mg1yfkfqr).  Despite that, I think I should still try JQuery so that I can appreciate the technologies driving the web than what I superficially know currently before I jump into the complicated frameworks. Moreover, if I am not contributing to production code, I can't be too dangerous, then there is no harm in learning more. So here goes - JQuery on Codecademy! And who knows maybe if there's a project that does not benefit from the overhead of a crazy JS set up, I can rely on good old JQuery. Include JQuery library in the HTML Example - 
    
    
    <script   
    src="https://code.jquery.com/jquery-3.1.1.min.js"   
    integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="   
    crossorigin="anonymous"></script>

then add this in the header 
    
    
    <script type='text/javascript' src='script.js'></script>

  [codepen_embed height="300" theme_id="13935" slug_hash="WGrWdd" default_tab="js,result" user="onestaryx"]See the Pen [Codecademy Intro to Jquery](http://codepen.io/onestaryx/pen/WGrWdd/) by Onestaryx ([@onestaryx](http://codepen.io/onestaryx)) on [CodePen](http://codepen.io).[/codepen_embed]     How to start - 
    
    
    $(document).ready();
    
    //put the function in the ()
    
    $(document).ready(function() {
        //do stuff here
    });
    
    $(document).ready(function() {
        $("div").fadeOut(1000);
    });