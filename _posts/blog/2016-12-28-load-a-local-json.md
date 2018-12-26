---
layout: blog-post
title: How to load a local JSON File
category: blog
tags: code
author: Ang Yi Xin
---

References:
1. [load JSON file using pure JS](https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript)
2. [read external local json file](http://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript)
3. [load JSON file without JQuery](http://www.askyb.com/javascript/load-json-file-locally-by-js-without-jquery/)

# Method 1: with pure JS #

The loading a .json file locally is an asynchronous operation and thus it needs to specify a callback function to execute after the file is loaded.
  ```js
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
//usage:
readTextFile("/Users/Documents/workspace/test.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
});
  ```
This function works also for loading a .html or .txt files, by overriding the mime type parameter to "text/html", "text/plain" etc.



# Method 2: Using Vue resource #

Load vue resource library, a web request service for Vue.js,  from CDN into your index.html 

  ```html
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/vue-resource/1.0.3/vue-resource.js"></script>
```
in your main js file, import the library at the start
  ```js
Vue.use(VueResource);
then use this to load the JSON file. This is similar to the vanilla JS way of doing XMLHttpRequest
Vue.resource('data/parking_rates.json').get()
.then(r => r.json())
.then(result => app.parkingRates = result)

// (r => r.json) is the same as
// function (r) {
//   return r.json();
// }
  ```
