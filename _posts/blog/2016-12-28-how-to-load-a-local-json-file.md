title: How to load a local JSON file
link: http://52.55.189.73/2016/12/28/how-to-load-a-local-json-file/
author: angyixin
description: 
post_id: 517
created: 2016/12/28 03:34:45
created_gmt: 2016/12/28 03:34:45
comment_status: closed
post_name: how-to-load-a-local-json-file
status: publish
post_type: post

# How to load a local JSON file

https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript 

http://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript

http://www.askyb.com/javascript/load-json-file-locally-by-js-without-jquery/  
Method 1: with pure JS

[The loading a `.json` file](http://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript) locally is an asynchronous operation and thus it needs to specify a callback function to execute after the file is loaded.
    
    
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

This function works also for loading a `.html` or `.txt` files, by overriding the mime type parameter to `"text/html"`, `"text/plain"` etc.

 

Method 2: With JQuery

I need to find the other methods

 

Method 3: Using Vue resource

  1. Load vue resource library, a web request service for Vue.js,  from CDN into your index.html   

    
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/vue-resource/1.0.3/vue-resource.js"></script>
    

  2. in your main js file, import the library at the start 
    
        Vue.use(VueResource);

  3. then use this to load the JSON file. This is similar to the vanilla JS way of doing XMLHttpRequest 
    
        Vue.resource('data/parking_rates.json').get()
    .then(r => r.json())
    .then(result => app.parkingRates = result)
    
    // (r => r.json) is the same as
    // function (r) {
    //   return r.json();
    // }