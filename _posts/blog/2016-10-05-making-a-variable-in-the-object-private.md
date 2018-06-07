title: Making a variable in the object private
link: http://52.55.189.73/2016/10/05/making-a-variable-in-the-object-private/
author: angyixin
description: 
post_id: 286
created: 2016/10/05 08:40:28
created_gmt: 2016/10/05 08:40:28
comment_status: closed
post_name: making-a-variable-in-the-object-private
status: publish
post_type: post

# Making a variable in the object private

Just as functions can have local variables which can only be accessed from within that function, objects can have private variables. Private variables are pieces of information you do not want to publicly share, and they can only be directly accessed from within the class. The Person class has been modified to have a private variable called bankBalance. Notice that it looks just like a normal variable, but it is defined inside the constructor for Person without using this, but instead using var. This makes bankBalance a private variable. 
    
    
    //
    
    
    function Person(first,last,age) {
       this.firstname = first;
       this.lastname = last;
       this.age = age;
       var bankBalance = 7500;
    }
    
    
    function Person(first,last,age) {
       this.firstname = first;
       this.lastname = last;
       this.age = age;
       var bankBalance = 7500;
    }
    
    // create your Person 
    var john = new Person('John','Smith',30);
    
    // try to print his bankBalance
    console.log(john.bankBalance); // output undefined

now that you return the private variable and declare another variable to take the value. It is no longer undefined. 
    
    
    function Person(first,last,age) {
       this.firstname = first;
       this.lastname = last;
       this.age = age;
       var bankBalance = 7500;
      
       this.getBalance = function() {
          return bankBalance;
          
       };
    }
    
    var john = new Person('John','Smith',30);
    console.log(john.bankBalance);
    
    // create a new variable myBalance that calls getBalance()
    var myBalance = john.getBalance();
    console.log(myBalance);
    
    

Why did that code work? An object's private variables can only be accessed by other methods that are part of that same object. So, we just used an object's public method to access a private variable! so what happens if you use a this.returnBalance to retrieve the bank balance information from the "hidden" variable. Here is how it works. 
    
    
    function Person(first,last,age) {
       this.firstname = first;
       this.lastname = last;
       this.age = age;
       var bankBalance = 7500;
      
       var returnBalance = function() {
          return bankBalance;
       };
           
       // create the new function here
       this.askTeller = function(){
          return returnBalance;
           }
    }
    
    var john = new Person('John','Smith',30);
    console.log(john.returnBalance);
    var myBalanceMethod = john.askTeller();
    var myBalance = myBalanceMethod();
    console.log(myBalance);
    

Now we can set a passcode to only show this when the pass is correct 
    
    
    function Person(first,last,age) {
       this.firstname = first;
       this.lastname = last;
       this.age = age;
       var bankBalance = 7500;
      
       this.askTeller = function(pass) {
         if (pass == 1234) {
             console.log(bankBalance);
         }
         else{
             console.log("Wrong password.");
             } 
       };
    }
    
    var john = new Person('John','Smith',30);
    /* the variable myBalance should access askTeller()
       with a password as an argument  */
       
    var myBalance = john.askTeller(1234);
    var myBalance = john.askTeller(4321);