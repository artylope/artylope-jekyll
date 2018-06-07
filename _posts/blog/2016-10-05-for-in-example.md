title: for-in example
link: http://52.55.189.73/2016/10/05/for-in-example/
author: angyixin
description: 
post_id: 296
created: 2016/10/05 09:30:09
created_gmt: 2016/10/05 09:30:09
comment_status: closed
post_name: for-in-example
status: publish
post_type: post

# for-in example

var languages = {
        english: "Hello!",
        french: "Bonjour!",
        notALanguage: 4,
        spanish: "Hola!"
    };
    
    // print hello in the 3 different languages, skip then number type
    for (var key in languages){
        if (typeof languages[key] === "string" ){
            console.log(languages[key]);
            } 
        }

### why [ ] and not ( ) or languages.key?

There should be an array already defined, `languages`. As well there would be a loop in progress with the iterator variable `x` in the range `0` through `languages.length`. var xyz = [1,2,3,4]; But the square brackets are not just to declare arrays, they are also used to point to location of items in strings and objects. Example: var test = "the quick brown fox"; console.log(test[0]); console.log(test[1]); console.log(test[11]);