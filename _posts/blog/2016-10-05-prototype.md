title: Prototype
link: http://52.55.189.73/2016/10/05/prototype/
author: angyixin
description: 
post_id: 278
created: 2016/10/05 07:57:56
created_gmt: 2016/10/05 07:57:56
comment_status: closed
post_name: prototype
status: publish
post_type: post

# Prototype

In general, if you want to add a method to a class such that all members of the class can use it, we use the following syntax to _extend the prototype_:  
    
    
    className.prototype.newMethod =
    
    function() {
    statements;
    };

 
    
    
    function Dog (breed) {
      this.breed = breed;
    };
    
    // here we make buddy and teach him how to bark
    var buddy = new Dog("golden Retriever");
    //we use prototype here to give all the dogs the ability to bark
    Dog.prototype.bark = function() {
      console.log("Woof");
    };
    buddy.bark();
    
    // here we make snoopy
    var snoopy = new Dog("Beagle");
    /// even though we didn't teach him how to bark here. but prototype allows Snoopy to back
    snoopy.bark();

 
    
    
    function Cat(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    
    // let's make some cats!
    var cheshire = new Cat("Cheshire Cat", "British Shorthair");
    var gary = new Cat("Gary", "Domestic Shorthair");
    
    // add a method "meow" to the Cat class that will allow
    // all cats to print "Meow!" to the console
    Cat.prototype.meow = function () { 
        console.log("Meow!");
        };
    
    // add code here to make the cats meow!
    cheshire.meow();
    gary.meow();
    
    
    
    // create your Animal class here
    function Animal(name,numLegs){
        this.name = name;
        this.numLegs = numLegs;
        }
    
    // create the sayName method for Animal
    Animal.prototype.sayName = function(){
        console.log("Hi my name is " + this.name);
        }
    
    
    // provided code to test above constructor and method
    var penguin = new Animal("Captain Cook", 2);
    penguin.sayName();
    
    
    // the original Animal class and sayName method
    function Animal(name, numLegs) {
        this.name = name;
        this.numLegs = numLegs;
    }
    Animal.prototype.sayName = function() {
        console.log("Hi my name is " + this.name);
    };
    
    // define a Penguin class
    function Penguin(name, numLegs){
        this.name = name;
        this.numLegs = 2;   
        }
    
    // set its prototype to be a new instance of Animal
    Penguin.prototype = new Animal();
    
    var penguin = new Penguin("Happy Feet");
    penguin.sayName( );

Inheriting from a class already created 
    
    
    function Penguin(name) {
        this.name = name;
        this.numLegs = 2;
    }
    
    // create your Emperor class here and make it inherit from Penguin
    function Emperor(name){
        this.name = name;
        };
        
    // create an "emperor" object and print the number of legs it has
    Emperor.prototype = new Penguin();
    var emperor = new Emperor("King Albert");
    console.log(emperor.numLegs);
    
    
    function Dog (breed) {
        this.breed = breed;
    };
    
    // add the sayHello method to the Dog class 
    // so all dogs now can say hello
    Dog.prototype.sayHello = function(){
        console.log("Hello this is a " + this.breed + " dog");
        }
    
    var yourDog = new Dog("golden retriever");
    yourDog.sayHello();
    
    var myDog = new Dog("dachshund");
    myDog.sayHello();