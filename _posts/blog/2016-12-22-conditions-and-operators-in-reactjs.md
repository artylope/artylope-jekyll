title: Conditions and Operators in ReactJS
link: http://52.55.189.73/2016/12/22/conditions-and-operators-in-reactjs/
author: angyixin
description: 
post_id: 515
created: 2016/12/22 07:52:02
created_gmt: 2016/12/22 07:52:02
comment_status: closed
post_name: conditions-and-operators-in-reactjs
status: publish
post_type: post

# Conditions and Operators in ReactJS

if /else statement 
    
    
    var React = require('react');
    var ReactDOM = require('react-dom');
    
    function coinToss () {
      // This function will randomly return either 'heads' or 'tails'.
      return Math.random() < 0.5 ? 'heads' : 'tails';
    }
    
    var pics = {
      kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
      doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
    };
    
    // if/else statement begins here:
    if (coinToss() == 'heads'){
        var img = <img src={pics.kitty} />;
        } else {
        var img = <img src={pics.doggy} />;
        }
    
    ReactDOM.render(
    	img,
      document.getElementById('app')
    );

 

 

 

the && Operator
    
    
    var React = require('react');
    var ReactDOM = require('react-dom');
    
    // judgmental will be true half the time.
    var judgmental = Math.random() < 0.5;
    
    var favoriteFoods = (
      <div>
        <h1>My Favorite Foods</h1>
        <ul>
          <li>Sushi Burrito</li>
          <li>Rhubarb Pie</li>
          {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
          <li>Broiled Grapefruit</li>
        </ul>
      </div>
    );
    
    ReactDOM.render(
    	favoriteFoods, 
    	document.getElementById('app')
    );