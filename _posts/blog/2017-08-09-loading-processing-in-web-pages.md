---
layout: blog-post
title: Drawing Deliberate Practice
category: blog
tags: code
author: Ang Yi Xin
---

# Loading Processing code in web pages

In the folder with the index.html...

  * create a file call filename.pde , this is where you write the processing code. For example 


    // Setup the Processing Canvas
    void setup()
    {
      // general setup
      size (500,500);
      stroke(#FFEE88);
      fill(#FFEE88);
    }


    //draw a ellipse
    void draw(){
      ellipse(20,20,50,50);
    }


  * in the <head> of the index.html, link to the processing.js file. (via cdn or fro the folder) 


    <script type="text/javascript" src="js/processing.js"></script>



    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.6/processing.js"></script>

 

  * in the <body> of the index.html, link to your processing code (.pde) file.


    <body>
      <canvas data-processing-sources="myProgram.pde"></canvas>
    </body>

Then serve the folder using local http-server. Refer to [this post](http://www.artylope.com/blog/2016/12/28/serving-http-server-to-overcome-the-cross-origin-request-error/).
