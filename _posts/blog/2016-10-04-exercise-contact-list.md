title: Exercise: Contact List
link: http://52.55.189.73/2016/10/04/exercise-contact-list/
author: angyixin
description: 
post_id: 217
created: 2016/10/04 07:48:09
created_gmt: 2016/10/04 07:48:09
comment_status: closed
post_name: exercise-contact-list
status: publish
post_type: post

# Exercise: Contact List

Contact list exercise 
    
    
    var friends = {};
    friends.bill = {
      firstName: "Bill",
      lastName: "Gates",
      number: "(206) 555-5555",
      address: ['One Microsoft Way','Redmond','WA','98052']
    };
    friends.steve = {
      firstName: "Steve",
      lastName: "Jobs",
      number: "(408) 555-5555",
      address: ['1 Infinite Loop','Cupertino','CA','95014']
    };
    
    var list = function(obj) {
      for(var prop in obj) {
        console.log(prop);
      }
    };
    
    var search = function(name) {
      for(var prop in friends) {
        if(friends[prop].firstName === name) {
          console.log(friends[prop]);
          return friends[prop];
        }
      }
    };
    
    list(friends);
    search("Steve");

  Building the list 
    
    
    var friends = {
        bill: {
            firstName: 'Bill',
            lastName: 'Gates',
            number: '1234-5678',
            address: ['One Microsoft Way','Redmond','WA','98052']
            },
        steve: {
            firstName: 'Steve',
            lastName: 'Jobs',
            number: '8765-4321',
            address: ['Apple Road','Cupertino','CA','12345']
            },
        marissa: {
            firstName: 'Marissa',
            lastName: 'Myers',
            number: '0000-2222',
            address: ['Yahoo Avenue','Anything','TA','22252']
            }
        };

List 'em all and Search for a friend 
    
    
    var friends = {
        bill: {
            firstName: 'Bill',
            lastName: 'Gates',
            number: '1234-5678',
            address: ['One Microsoft Way','Redmond','WA','98052']
            },
        steve: {
            firstName: 'Steve',
            lastName: 'Jobs',
            number: '8765-4321',
            address: ['Apple Road','Cupertino','CA','12345']
            },
        marissa: {
            firstName: 'Marissa',
            lastName: 'Myers',
            number: '0000-2222',
            address: ['Yahoo Avenue','Anything','TA','22252']
            }
        };
        
    
    
    function list(friends){
            for (var key in friends){
                console.log(key);
                }
            };
            
    
    
    function search(name) {
      for(var x in friends) {
        if(friends[x].firstName === name) {
          console.log(friends[x]);
          return friends[x];
        }
      }
    };
    
    list(friends);
    search("Steve");

The exercise is buggy, I can't seem to run the output easily within Codecademy. But tried to run the same code in other editors. Seems ok.