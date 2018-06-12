title: Exercise - Get movie reviews
link: http://52.55.189.73/2016/10/04/exercise-get-movie-reviews/
author: angyixin
description: 
post_id: 228
created: 2016/10/04 09:55:33
created_gmt: 2016/10/04 09:55:33
comment_status: closed
post_name: exercise-get-movie-reviews
status: publish
post_type: post

# Exercise - Get movie reviews

Imagine you have a movie collection, and you want to write code that returns your review for each one. Here are the movies and your reviews: 

  * "Toy Story 2" - "Great story. Mean prospector."
  * "Finding Nemo" - "Cool animation, and funny turtles."
  * "The Lion King" - "Great songs."
Method 1 - Using if/else Method 2 - Using switch case 
    
    
    //
    
    var getReview = function (movie) {
    switch (movie) {
        case 'Toy Story 2':
            return 'Great Story. Mean Prospector.';
            break;
        case 'Finding Nemo':
            return 'Cool animation, and funny turtles.';
            break;
        case 'The Lion King':
            return 'Great Songs.';
            break;
        default:
            return 'Invalid movie';
            break;
        }
    };
    
    //

  Method 3 - Using objects and functions