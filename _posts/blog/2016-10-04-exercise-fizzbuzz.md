title: Exercise : Fizzbuzz
link: http://52.55.189.73/2016/10/04/exercise-fizzbuzz/
author: angyixin
description: 
post_id: 225
created: 2016/10/04 09:44:42
created_gmt: 2016/10/04 09:44:42
comment_status: closed
post_name: exercise-fizzbuzz
status: publish
post_type: post

# Exercise : Fizzbuzz

Exercise For numbers 1 to 20 Do the following 

  * For numbers divisible by 3, print out "Fizz".
  * For numbers divisible by 5, print out "Buzz".
  * For numbers divisible by both 3 and 5, print out "FizzBuzz" in the console.
  * Otherwise, just print out the number.
    
    
    for (var i = 1 ; i <= 20; i++){
        if (i%3 === 0 && i%5 !== 0) {
            console.log("Fizz");
        } 
        else if (i%5 === 0 && i%3 !== 0) { 
            console.log("Buzz");
            } 
        else if ( i%3 === 0 && i%5 === 0) {
            console.log("FizzBuzz");
                }
        else {
            console.log(i);
            }
        };