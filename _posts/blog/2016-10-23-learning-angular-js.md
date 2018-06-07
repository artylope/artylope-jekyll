title: Learning Angular JS
link: http://52.55.189.73/2016/10/23/learning-angular-js/
author: angyixin
description: 
post_id: 431
created: 2016/10/23 08:47:38
created_gmt: 2016/10/23 08:47:38
comment_status: closed
post_name: learning-angular-js
status: publish
post_type: post

# Learning Angular JS

**Important Pages** Intro of Angular to Designers - <https://medium.com/@minipai/angularjs-tutorial-for-designers-8c7dc63ca65f> Angular Developer Guide - <https://docs.angularjs.org/guide/concepts> To start a Angular project, put this line in the HTML head, just like how we reference the jQuery library W3 Angular - <http://www.w3schools.com/angular/> Learn Angular in a day - <https://toddmotto.com/ultimate-guide-to-learning-angular-js-in-one-day/>
    
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.min.js"></script>

In the  or  tag add this 
    
    
    <body ng-app></body> 
    
    //or
    
    <html ng-app></html>

[codepen_embed height="300" theme_id="13935" slug_hash="rrQRWp" default_tab="result" user="onestaryx"]See the Pen [Learning Angular](http://codepen.io/onestaryx/pen/rrQRWp/) by Onestaryx ([@onestaryx](http://codepen.io/onestaryx)) on [CodePen](http://codepen.io).[/codepen_embed] And yay, you can now use angular! if you want to define your own app name in the body 
    
    
    <body ng-app="myApp"></body>

remember to add the following in your javascript section/file 
    
    
    var app = angular.module("myApp", []);

**Important Concepts** A module contains the different components of an AngularJS app (i.e. "myApp" in the example above) A controller manages the app's data (see this post) An expression displays values on the page A filter formats the value of an expression Like this - {{ expression | filter }} Concept of data binding ![Data Binding image from Angular Developer Guide](https://docs.angularjs.org/img/guide/concepts-databinding1.png) Example [codepen_embed height="300" theme_id="13935" slug_hash="wzNzwJ" default_tab="html,result" user="onestaryx"]See the Pen [input angular](http://codepen.io/onestaryx/pen/wzNzwJ/) by Onestaryx ([@onestaryx](http://codepen.io/onestaryx)) on [CodePen](http://codepen.io).[/codepen_embed] **Things I need to figure out** \- Directives \- Scope \- Controller \- logic put where? \- how to interact with the visual stuff??