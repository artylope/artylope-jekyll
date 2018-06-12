title: Functions
link: http://52.55.189.73/2016/10/03/functions/
author: angyixin
description: 
post_id: 79
created: 2016/10/03 01:51:47
created_gmt: 2016/10/03 01:51:47
comment_status: closed
post_name: functions
status: publish
post_type: post

# Functions

2 different ways of writing a function 
    
    
    function foodDemand(food) {
        console.log('I want to eat ' + food );
        }
        
    foodDemand ('noodles');
    
    //another way
    
    var foodDemand = function(food) {
        console.log('I want to eat ' + food );
        }
        
    foodDemand ('noodles');

 
    
    
    function sayHello(firstName) {
      console.log('Hello, my name is ' + firstName);
    }
    
    sayHello('Jon');

Instead of using console.log to print our output, functions can also return their result into a variable. 
    
    
    var makePizza = function (topping,crustType) {
      return 'The ' + crustType + ' crust pizza topped with ' + topping + ' is done. Let\'s eat!';
    };
    
    var customPizza = makePizza('bacon', 'thin');
    
    console.log(customPizza);
    
    
    var timesFive = function (number) {
      return number * 5;
    };
    
    console.log(timesFive(3));
    // Output: 15
    
    
    var makeJuice = function (method,fruit,ingredient) {
      return method + fruit + 'add' + ingredient;
    };
    
    var customJuice = makeJuice('blend', 'watermelon', 'ice');
    
    console.log(customJuice)
    
    
    function convertToF(celsius) {
      var fahrenheit;
      fahrenheit = (celsius*9/5) + 32
      return fahrenheit;
    }
    
    convertToF(30);
    convertToF(-30);
    convertToF(-10);
    convertToF(0);
    convertToF(20);
    convertToF(30);
    
    
    
    function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
      var result = "";
      result = myAdjective + " " + myAdverb + " " + myNoun + " " + myVerb;
      return result;
    }
    
    wordBlanks("dog", "big", "ran", "quickly");
    
    
    // This is what a function looks like:
    
    var divideByThree = function (number) {
        var val = number / 3;
        console.log(val);
    };
    
    // On line 12, we call the function by name
    // Here, it is called 'dividebythree'
    // We tell the computer what the number input is (i.e. 6)
    // The computer then runs the code inside the function!
    divideByThree(5);

this method of writing makes more sense to me... 
    
    
    function orangeCost(cost) {
        var total = cost*5;
        console.log(total);
        }
        
        orangeCost(5);

which one to use ????