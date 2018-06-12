title: Exercise - Building An address book
link: http://52.55.189.73/2016/10/05/exercise-building-an-address-book/
author: angyixin
description: 
post_id: 251
created: 2016/10/05 05:57:34
created_gmt: 2016/10/05 05:57:34
comment_status: closed
post_name: exercise-building-an-address-book
status: publish
post_type: post

# Exercise - Building An address book

//create the printing function
    
    var bob = {
        firstName: "Bob",
        lastName: "Jones",
        phoneNumber: "(650) 777-7777",
        email: "bob.jones@example.com"
    };
    
    var mary = {
        firstName: "Mary",
        lastName: "Johnson",
        phoneNumber: "(650) 888-8888",
        email: "mary.johnson@example.com"
    };
    
    var contacts = [bob, mary];
    
    // printPerson added here
    function printPerson(person){
        console.log(person.firstName + " " + person.lastName);
        }
    
    printPerson(contacts[0]);
    printPerson(contacts[1]);

  Listing everyone  
    
    
    var bob = {
        firstName: "Bob",
        lastName: "Jones",
        phoneNumber: "(650) 777-7777",
        email: "bob.jones@example.com"
    };
    
    var mary = {
        firstName: "Mary",
        lastName: "Johnson",
        phoneNumber: "(650) 888-8888",
        email: "mary.johnson@example.com"
    };
    
    var contacts = [bob, mary];
    
    function printPerson(person) {
        console.log(person.firstName + " " + person.lastName);
    }
    
    var list = function(){
        var contactsLength = contacts.length;
        for (var i = 0; i < contactsLength; i++){
                printPerson(contacts[i]);   
            }
        };
    

  To search for the person 
    
    
    var bob = {
        firstName: "Bob",
        lastName: "Jones",
        phoneNumber: "(650) 777-7777",
        email: "bob.jones@example.com"
    };
    
    var mary = {
        firstName: "Mary",
        lastName: "Johnson",
        phoneNumber: "(650) 888-8888",
        email: "mary.johnson@example.com"
    };
    
    var contacts = [bob, mary];
    
    function printPerson(person) {
        console.log(person.firstName + " " + person.lastName);
    }
    
    function list() {
    	var contactsLength = contacts.length;
    	for (var i = 0; i < contactsLength; i++) {
    		printPerson(contacts[i]);
    	}
    }
    
    /*Create a search function
    then call it passing "Jones"*/
    
    function search(lastName){
        var contactsLength = contacts.length;
        for (var i = 0; i < contactsLength; i++){
            if ( lastName === contacts[i].lastName){
                console.log(contacts[i].firstName + " " + contacts[i].lastName)}; 
            }
        }
        
    search("Jones");

to add a new person 
    
    
    var bob = {
        firstName: "Bob",
        lastName: "Jones",
        phoneNumber: "(650) 777-7777",
        email: "bob.jones@example.com"
    };
    
    var mary = {
        firstName: "Mary",
        lastName: "Johnson",
        phoneNumber: "(650) 888-8888",
        email: "mary.johnson@example.com"
    };
    
    var contacts = [bob, mary];
    
    function printPerson(person) {
        console.log(person.firstName + " " + person.lastName);
    }
    
    function list() {
    	var contactsLength = contacts.length;
    	for (var i = 0; i < contactsLength; i++) {
    		printPerson(contacts[i]);
    	}
    }
    
    /*Create a search function
    then call it passing "Jones"*/
    
    function search(lastName){
        var contactsLength = contacts.length;
        for (var i = 0; i < contactsLength; i++){
            if ( lastName === contacts[i].lastName){
                console.log(contacts[i].firstName + " " + contacts[i].lastName)}; 
            }
        };
        
    // search("Jones");
    
    function add(firstName, lastName, email, phoneNumber){
            object = {
                firstName: firstName,
                lastName: lastName, 
                email: email, 
                phoneNumber: phoneNumber
                };
            contacts[contacts.length] = object;
         }
    
    add("Jack", "Black", "jack_black@example.com", "(650) 777-1111");
    
    list();