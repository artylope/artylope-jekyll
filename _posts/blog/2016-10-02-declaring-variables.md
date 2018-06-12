title: Declaring Variables and Escaping Sequences in Strings
link: http://52.55.189.73/2016/10/02/declaring-variables/
author: angyixin
description: 
post_id: 27
created: 2016/10/02 07:36:01
created_gmt: 2016/10/02 07:36:01
comment_status: closed
post_name: declaring-variables
status: publish
post_type: post

# Declaring Variables and Escaping Sequences in Strings

Codeacademy Javascript Lesson 1 - Declaring Variables 
    
    
    var stringName = 'string';
    var numberName = 12;
    var booleanName = true;

One more example 
    
    
    var strength = '50,000 pounds';
    console.log('How much stuff can a variable hold?', strength);
    
    var age = 30;
    console.log('what is my age',age);
    
    var hasPet = true;
    console.log('Do you have a pet',hasPet);

And using console.log 
    
    
    console.log ('Hello world');

Add on from Free Code Camp 
    
    
    // Declarations
    var studlyCapVar;
    var properCamelCase;
    var titleCaseOver;
    
    // Assignments
    studlyCapVar = 10;
    properCamelCase = "A String";
    titleCaseOver = 9000;
    

what happens when you want to use "" in the string? 
    
    
    // use backslash in front of the "
    var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

or you can do this 
    
    
    var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

> Escape Sequences in Strings Quotes are not the only characters that can be escaped inside a string. Here is a table of common escape sequences:

Code Output \'  single quote \" double quote \\\ backslash \n newline \r carriage return \t tab \b backspace \f form feed  

> FirstLine \SecondLine\ ThirdLine
    
    
    var myStr = 'FirstLine\n\\SecondLine\\\rThirdLine'; // Change this line