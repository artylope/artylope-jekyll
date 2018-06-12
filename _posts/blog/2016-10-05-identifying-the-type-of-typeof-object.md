title: Identifying the type of (typeof) Object
link: http://52.55.189.73/2016/10/05/identifying-the-type-of-typeof-object/
author: angyixin
description: 
post_id: 264
created: 2016/10/05 07:12:41
created_gmt: 2016/10/05 07:12:41
comment_status: closed
post_name: identifying-the-type-of-typeof-object
status: publish
post_type: post

# Identifying the type of (typeof) Object

Identifying the type of javascript item (whether it is a string, number or object) 
    
    
    // complete these definitions so that they will have
    // the appropriate types
    var anObj = { job: "I'm an object!" };
    var aNumber = 42;
    var aString = "I'm a string!";
    
    console.log( typeof anObj ); // should print "object"
    console.log( typeof aNumber ); // should print "number"
    console.log( typeof aString ); // should print "string"

  and whether an object has a certain property 
    
    
    var myObj = {
        name: "James",
        // finish myObj 
    };
    
    console.log( myObj.hasOwnProperty('name') ); // should print true
    console.log( myObj.hasOwnProperty('nickname') ); // should print false