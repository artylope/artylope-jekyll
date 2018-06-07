title: Functions, Methods, Objects, Property, Constructors Urghhhhhhhhh
link: http://52.55.189.73/2016/10/05/functions-methods-objects-constructors-urghhhhhhhhh/
author: angyixin
description: 
post_id: 260
created: 2016/10/05 06:41:11
created_gmt: 2016/10/05 06:41:11
comment_status: closed
post_name: functions-methods-objects-constructors-urghhhhhhhhh
status: publish
post_type: post

# Functions, Methods, Objects, Property, Constructors Urghhhhhhhhh

I am confused by what is what... anyway here's an example 
    
    
    function Person(job, married, speak) {
        this.job = job;
        this.married = married;
        this.speak = function(){
            console.log(speak);
            }
        // add a "speak" method to Person!
    }
    
    var user = new Person("Codecademy Student",false, "Hello!");
    user.speak();
    
    
    
    
    var james = {
        job: "programmer",
        married: false,
        speak: function(mood) {
            console.log("Hello, I am feeling " + mood);
        }
    };
    
    james.speak("great");
    james.speak("just okay");
    
    
    var james = {
        job: "programmer",
        married: false,
        sayJob: function() {
            // complete this method
            console.log("Hi, I work as a " + this.job);
        }
    };
    
    // james' first job
    james.sayJob();
    
    // change james' job to "super programmer" here
    james.job = "super programmer";
    
    // james' second job
    james.sayJob();

  to print the property in the object 
    
    
    var nyc = {
        fullName: "New York City",
        mayor: "Bill de Blasio",
        population: 8000000,
        boroughs: 5
    };
    
    
    for (var property in nyc) {
        console.log(nyc[property]);
        }