---
layout: blog-post
title: AJAX Call XML Http Request
category: blog
tags: code
author: Ang Yi Xin
---

I am learning how to make AJAX calls to retrieve data using XMLHttpRequest, pure JS way.

I find the following materials especially useful for understanding
1. [Accelerated Javascript Training/ Javascript Bootcamp by Maximillian Section 11](https://www.udemy.com/javascript-bootcamp-2016)
2. [Making Http Requests](https://www.kirupa.com/html5/making_http_requests_js.htm)

# this is a get request #

```js
//this is a GET request

var xhr = new XMLHttpRequest();
//sometimes this url don't work, is the server problem.
//var url = 'http://jsonplaceholder.typicode.com/posts' ;
var url = 'https://api.beeline.sg/companies' ;
var method = 'GET' ;

xhr.open(method, url);
xhr.onreadystatechange = function(){
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
    console.log(JSON.parse(xhr.responseText)[0].name);
  } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200){
      console.log('Error!');
    }
};
// for the key if required
// xhr.setRequestHeader("api_key", "developer_key_here");
xhr.send();
```

# this is a POST request #

```js
//this is a POST request
var xhr = new XMLHttpRequest();

var url = 'http://jsonplaceholder.typicode.com/posts' ;
var method = 'POST' ;

var data = 'title=Post%20Title&body=Body';

xhr.open(method, url);
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
xhr.onreadystatechange = function(){
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201){
    console.log(JSON.parse(this.responseText));
  } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 201){
      console.log('Error!');
    }
};

xhr.send(data);
```
