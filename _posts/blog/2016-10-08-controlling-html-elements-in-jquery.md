title: Controlling HTML Elements in JQuery
link: http://52.55.189.73/2016/10/08/controlling-html-elements-in-jquery/
author: angyixin
description: 
post_id: 361
created: 2016/10/08 10:18:25
created_gmt: 2016/10/08 10:18:25
comment_status: closed
post_name: controlling-html-elements-in-jquery
status: publish
post_type: post

# Controlling HTML Elements in JQuery

#### Adding HTML Elements

Declaring variables in jquery so that you can control them later 
    
    
    var $p = $('p');
    var $h1 = $('<h1>Hello</h1>');

Here are functions to append and prepend. .append() will make the paragraph the last child of each div; .prepend() will make the paragraph the first child of each div. 
    
    
    $(".info").append("<p>Stuff!</p>");
    $(".info").prepend("<p>Stuff!</p>");

  .appendTo() does the same as .append(), but it just reverses the order of "what to add" and "where to add it." The code has the same effect as the .append() code above. 
    
    
    $('<p>Stuff!</p>').appendTo('.info');
    
    
    
    $(document).ready(function(){
        $('body').append('<p>I\'m a paragraph</p>');
        });

[codepen_embed height="300" theme_id="13935" slug_hash="gwvVZm" default_tab="html,result" user="onestaryx"]See the Pen [before() after() jquery Example](http://codepen.io/onestaryx/pen/gwvVZm/) by Onestaryx ([@onestaryx](http://codepen.io/onestaryx)) on [CodePen](http://codepen.io).[/codepen_embed] 

#### Adding and Removing Classes
    
    
    $('selector').addClass('className');
    $('selector').removeClass('className');

  [codepen_embed height="300" theme_id="13935" slug_hash="jrzOyW" default_tab="css,result" user="onestaryx"]See the Pen <a href='http://codepen.io/onestaryx/pen/jrzOyW/'>Add a new class using jQuery</a> by Onestaryx (<a href='http://codepen.io/onestaryx'>@onestaryx</a>) on <a href='http://codepen.io'>CodePen</a>.[/codepen_embed] 
    
    
    $(document).ready(function() {
        $('SEL').click(function() {
            $(this).FUNC('CLASS');
        });
    });

  use toggleClass() to toggle a class back and forth.  

#### Changing Styles  / CSS code
    
    
    //jQuery functions
    .height();
    .width();
    .css();
    
    $(document).ready(function(){
        $("div").height("200px");
        $("div").width("200px");
        $("div").css("border-radius","10px");
        });

#### Update Content
    
    
    //jQuery Functions
    .html();
    .val();
    
    $('div').html("I love jQuery!");
    $('input:checkbox:checked').val();

#### Example - To Do List

The most important concept here is - After the page has been loaded, if things has been added after that use the following code to control these added elements. 
    
    
    $(document).on('event', 'selector', function() {
        Do something!
    });

[codepen_embed height="300" theme_id="13935" slug_hash="ZpxEaJ" default_tab="js,result" user="onestaryx"]See the Pen [To Do List using Jquery](http://codepen.io/onestaryx/pen/ZpxEaJ/) by Onestaryx ([@onestaryx](http://codepen.io/onestaryx)) on [CodePen](http://codepen.io).[/codepen_embed]   .focus(); can change <input> and <textarea>  

See the Pen [focus() codecademy jquery](http://codepen.io/onestaryx/pen/zKWxvm/) by Onestaryx ([@onestaryx](http://codepen.io/onestaryx)) on [CodePen](http://codepen.io).

.animate(); [codepen_embed height="300" theme_id="13935" slug_hash="zKWxAm" default_tab="js,result" user="onestaryx"]See the Pen [Codecademy div](http://codepen.io/onestaryx/pen/zKWxAm/) by Onestaryx ([@onestaryx](http://codepen.io/onestaryx)) on [CodePen](http://codepen.io).[/codepen_embed] [codepen_embed height="300" theme_id="13935" slug_hash="ALyjLP" default_tab="js,result" user="onestaryx"]See the Pen [Make Mario move using jquery](http://codepen.io/onestaryx/pen/ALyjLP/) by Onestaryx ([@onestaryx](http://codepen.io/onestaryx)) on [CodePen](http://codepen.io).[/codepen_embed]