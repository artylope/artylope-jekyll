---
layout: blog-post
title: Watch and Code 2
category: blog
tags: code
author: Ang Yi Xin
---

Watch and Code 2 Functions!

  ```js
  //this is an array
var todos = ['item 1','item 2', 'item 3']; //array

// displayTodos();
function displayTodos(){
  console.log('My todos: ' + todos);
}

//add an item
function addTodo(todo){
  todos.push(todo);
  displayTodos();
}

addTodo('hello there');

//change an item
function changeTodo(position, newValue){
  todos[position] = newValue;
  displayTodos();
}

changeTodo(0, 'wqheej');

//delete an item in the array
function deleteTodo(position){
  todos.splice(position,1);
  displayTodos();
}

deleteTodo(0);

```


[In Codepen](https://codepen.io/onestaryx/pen/xmQvWB/)
