title: Random Number
link: http://52.55.189.73/2016/10/02/random-number/
author: angyixin
description: 
post_id: 71
created: 2016/10/02 08:32:33
created_gmt: 2016/10/02 08:32:33
comment_status: closed
post_name: random-number
status: publish
post_type: post

# Random Number

Generating a random number and rounding it down 
    
    
    // randomise a number between 0 and 1
    var randomNumber = Math.random()
    
    // randomise a number between 0 and 100
    var randomNumber = Math.random()*100
    
    // round down random number to the lower whole number
    var randomNumberRounded = Math.floor(randomNumber)
    
    console.log(randomNumber)
    console.log(randomNumberRounded)