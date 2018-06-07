title: Code your own adventure game
link: http://52.55.189.73/2016/10/04/code-your-own-adventure-game/
author: angyixin
description: 
post_id: 191
created: 2016/10/04 05:57:36
created_gmt: 2016/10/04 05:57:36
comment_status: closed
post_name: code-your-own-adventure-game
status: publish
post_type: post

# Code your own adventure game

Using && and || 
    
    
    //
    
    
    var user = prompt("What would you want to do. Run, Pay, Fight?").toUpperCase();
    
    switch (user) {
        case 'RUN':
            console.log("You ran!");
            var day = true;
            var night = true;
            if(day && night) {
                console.log("Happy New Year");
            }
            else {
                console.log("Happy January");
            }
            break;
        case 'PAY':
            console.log("You paid!");
            var day = true;
            var night = false;
            if(day || night) {
                console.log("Happy Children's Day");
            }
            else {
                console.log("Happy February");
            }
            break;
        case 'FIGHT':
            console.log("You fought!");
            break;
        default: 
            console.log("Invalid");
        }