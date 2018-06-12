title: About scope - how to make a local variable accessible from other functions
link: http://52.55.189.73/2016/11/20/about-scope-how-to-make-a-local-variable-accessible-from-other-functions/
author: angyixin
description: 
post_id: 485
created: 2016/11/20 09:26:32
created_gmt: 2016/11/20 09:26:32
comment_status: closed
post_name: about-scope-how-to-make-a-local-variable-accessible-from-other-functions
status: publish
post_type: post

# About scope - how to make a local variable accessible from other functions

There are times where I want to use a variable from another function only to realise it is undefined for the new function. So how do I make a local variable accessible from other functions?

Answer from Stack Overflow

To make a variable calculated in function A visible in function B, you have three choices:

  * make it a global,
  * make it an object property,
  * or pass it as a parameter when calling B from A.

If your program is fairly small then globals are not so bad. Otherwise do consider using the third method.

Here's an example of explaining scope.
    
    
    //which x value will be printed in function B? 2 or 5? 
    var x = 2;
    A();
    
    function A(){
      var x = 5;
      B();
    }
    
    function B(){
      console.log(x);
    }
    
    //2 will be printed.  Therefore x = 2 from the global scope. 
    

  
Function B is physically defined in the global scope. It will look within itself for the reference of X. If it can't finds it, it will look outside and the outer reference of function B is the global scope. Hence it uses the global definition of x = 2 instead of the one within function A.

 

[JS Bin on jsbin.com](https://jsbin.com/fazudow/1/embed?html,js,console,output)