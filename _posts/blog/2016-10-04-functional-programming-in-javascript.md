title: Functional Programming in Javascript
link: http://52.55.189.73/2016/10/04/functional-programming-in-javascript/
author: angyixin
description: 
post_id: 171
created: 2016/10/04 01:59:05
created_gmt: 2016/10/04 01:59:05
comment_status: closed
post_name: functional-programming-in-javascript
status: publish
post_type: post

# Functional Programming in Javascript

Summarised from <https://www.youtube.com/watch?v=e-5obm1G_FY> Type of programming paradigm 

  * Functional Programming - Function is king!
  * Imperative Programming - Do this, then do that.
  * Object-oriented Programming - Objects and methods to change them etc.
Functional Programming 
  * A coding style
  * A paradigm
  * A mindset - a way of approaching a problem.
Problem with object oriented programming 
  * OOP JS is confusing
  * "This" bugs are tricky
  * Binding this to the wrong thing
So let's try functional javascript 
  * easier to debug and maintain
  * community around it
Functional Javascript 
  * Express everything in functions
  * Takes in "inputs" and get "outputs"
  * Think about the flow of data - inputs and outputs, not about objects.
Not functional way 
    
    
    //Not functional way
    
    var name = "John";
    var greeting = "Hello, I'm ";
    console.log(greeting + name);
    
    //output => "Hello, I'm John"
    
    

The functional way 
    
    
    function greet(name){
     console.log("Hello, I'm " + name);
    }
    
    greet("John");
    
    //output => "Hello, I'm John"

Pure functional programming 

  * "Avoid side effects" - cannot do things outside functions.
  * Taking something from outside the function and do it in the function is NOT pure.
  * Should be take inputs in the functions and output in the function as well
  * Taking from global variables, not pure...
Not pure example 
    
    
    var name = "John";
    
    function greet(){
      console.log("Hello, I'm " + name);
    }
    
    

The pure way 
    
    
    function greet(name) {
      return "Hello, I'm " + name;
    }
    
    greet("John");