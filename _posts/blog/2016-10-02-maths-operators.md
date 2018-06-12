title: Maths Operators
link: http://52.55.189.73/2016/10/02/maths-operators/
author: angyixin
description: 
post_id: 32
created: 2016/10/02 07:41:14
created_gmt: 2016/10/02 07:41:14
comment_status: closed
post_name: maths-operators
status: publish
post_type: post

# Maths Operators

Add: + Subtract: - Multiply: * Divide: / Modulus: % (also known as remainder) 
    
    
    console.log(30+3.5);
    console.log(2016-1969);
    console.log(65/240);
    console.log((65/240)*100);
    

Let's set a question that a modulus can solve: What will the moon phase be one year from today? 
    
    
    console.log(365/27);
    console.log(365%27);
    //output
    //13.518518518518519
    //14

  In mathematics, a number can be checked even or odd by checking the remainder of the division of the number by 17 % 2 = 1 (17 is Odd) 48 % 2 = 0 (48 is Even) 
    
    
    //An example of an if/else statement with modulo in the condition
    
    if(14%6) {
        console.log("The first number is even");
    } else {
        console.log("The first number is odd");
    }
    
    
    //If we want to keep adding
    
    a = a + 12; 
    a += 12;
    
    b = 9 + b; 
    b += 9;
    
    c = c + 7; 
    c += 7;
    
    
    //Subtract
    a = a - 6; 
    a -= 6;
    
    b = b - 15; 
    b -= 15;
    
    c = c - 1; 
    c -= 1; 
    
    //Multiply 
    a = a * 5; 
    a *= 5;
    
    b = 3 * b;
    b *= 3;
    
    c = c * 10; 
    c *= 10;
    
    //Divide
    a = a / 12
    a /= 12;
    
    b = b / 4;
    b /= 4;
    
    c = c / 11;
    c /= 11;