title: JSON APIs and AJAX
link: http://52.55.189.73/2016/10/09/json-apis-and-ajax/
author: angyixin
description: 
post_id: 398
created: 2016/10/09 03:51:00
created_gmt: 2016/10/09 03:51:00
comment_status: closed
post_name: json-apis-and-ajax
status: publish
post_type: post

# JSON APIs and AJAX

_The materials below is from Free Code Camp. I am copying it down here to help remember what I learn._ First let's set up the javascript to use JQuery to update the HTML when button is pressed 
    
    
    $(document).ready(function() {
        $("#getMessage").on("click", function(){
          // Only change code below this line.
          $(".message").html("Here is the message");
          // Only change code above this line.
        });
      });

[codepen_embed height="300" theme_id="13935" slug_hash="RGrGVW" default_tab="html,result" user="onestaryx"]See the Pen [Json API and Ajax ](http://codepen.io/onestaryx/pen/RGrGVW/) by Onestaryx ([@onestaryx](http://codepen.io/onestaryx)) on [CodePen](http://codepen.io).[/codepen_embed] Next we are going to request data from an external source through an API. Most web APIs transfer data in a format called JSON. JSON stands for JavaScript Object Notation. Steps 

  * Trigger the AJAX request. ( in this case a click handler on the getMessage button does that)
  * use getJSON method to load data from the JSON file.
  * Make the .html change the contents of the message box so that it contains the result of the getJSON.
use getJSON method to load data from the JSON file. From the Free Code Camp Example, 
    
    
    $(document).ready(function() {
    
        $("#getMessage").on("click", function(){
          // Only change code below this line.
          $.getJSON("/json/cats.json", function(json) {
      $(".message").html(JSON.stringify(json));
    });
          // Only change code above this line.
        });
    
      });

Now that we're getting data from a JSON API, let's display it in our HTML. We can use the `.forEach()` method to loop through our data and modify our HTML elements. 

First, let's declare an html variable with`var html = "";`.
    
    
     $(document).ready(function() {
    
        $("#getMessage").on("click", function() {
          $.getJSON("/json/cats.json", function(json) {
    
            var html = "";
            // Only change code below this line.
            json.forEach(function(val) {
      var keys = Object.keys(val);
      html += "<div class = 'cat'>";
      keys.forEach(function(key) {
        html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
      });
      html += "</div><br>";
    });    
            
            // Only change code above this line.
    
            $(".message").html(html);
    
          });
        });
      });
    </script>