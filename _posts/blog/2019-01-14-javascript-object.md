---
layout: blog-post
title: Javascript Object
category: blog
tags: code
author: Ang Yi Xin
---

  ```js
  var myComputer = {
  operatingSystem: 'Mac',
  screenSize: '15 inches',
  purchaseYear: 2014
}

myComputer.screenSize;

var yixin = {
  name: 'Yi Xin',
  sayName: function() {
    console.log(this.name);
  }
}

yixin.sayName();
```
[In Codepen](https://codepen.io/onestaryx/pen/wRRyQx/)
