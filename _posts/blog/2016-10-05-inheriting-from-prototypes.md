title: Inheriting from prototypes
link: http://52.55.189.73/2016/10/05/inheriting-from-prototypes/
author: angyixin
description: 
post_id: 284
created: 2016/10/05 08:38:07
created_gmt: 2016/10/05 08:38:07
comment_status: closed
post_name: inheriting-from-prototypes
status: publish
post_type: post

# Inheriting from prototypes

myEmperor is an instance of Emperor which is a Penguin and it is a type of Animal. It will hence inherit from the classes up the prototype chain. Emperor inherits from Penguin which inherits from Animal. If a property is not defined for a class, this class's prototype chain will be traversed upwards until one is found (or not) in a parent (higher) class. 
    
    
    // original classes
    function Animal(name, numLegs) {
        this.name = name;
        this.numLegs = numLegs;
        this.isAlive = true;
    }
    function Penguin(name) {
        this.name = name;
        this.numLegs = 2;
    }
    function Emperor(name) {
        this.name = name;
        this.saying = "Waddle waddle";
    }
    
    // set up the prototype chain
    Penguin.prototype = new Animal();
    Emperor.prototype = new Penguin();
    
    var myEmperor = new Emperor("Jules");
    
    console.log(myEmperor.saying); // should print "Waddle waddle"
    console.log(myEmperor.numLegs); // should print 2
    console.log(myEmperor.isAlive); // should print true