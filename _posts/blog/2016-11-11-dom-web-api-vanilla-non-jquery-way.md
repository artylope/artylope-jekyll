title: DOM Web API (Vanilla, Non Jquery way) and making HTTP Requests
link: http://52.55.189.73/2016/11/11/dom-web-api-vanilla-non-jquery-way/
author: angyixin
description: 
post_id: 465
created: 2016/11/11 08:53:07
created_gmt: 2016/11/11 08:53:07
comment_status: closed
post_name: dom-web-api-vanilla-non-jquery-way
status: publish
post_type: post

# DOM Web API (Vanilla, Non Jquery way) and making HTTP Requests

var elem = document.getElementById("para1");
    document.getElementsByClassName('test');
    document.getElementsByClassName('red test');
    document.getElementById('main').getElementsByClassName('test');
    var el = document.querySelector(".myclass");
    var el = document.querySelector("div.user-panel.main input[name=login]");
    

and making XMLHttpRequest 
    
    
    function reqListener () {
      console.log(this.responseText);
    }
    
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "http://www.example.org/example.txt");
    oReq.send();

JSBin example <http://jsbin.com/hodarez/edit?html,js,output>