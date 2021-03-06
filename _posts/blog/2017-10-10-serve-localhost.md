---
layout: blog-post
title: Serve localhost
category: blog
tags: code
author: Ang Yi Xin
---

Doing HTTP request from a page served as is will sometimes result in this error in the console.

> Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource.

To overcome this, you can set up a local host or serve to gh-pages or any web server. First install http-server using npm into the folder

1. In Terminal, cd into the project folder I want to serve
    ```
    $ cd folder/folder/folder
    ```
2. In that folder, type this to install http-server
    ```
    $ npm install http-server
    ```
3. Then serve
    ```
    $ http-server -c-1
    // This means not caching the local server
    ```

or http-server the file you want to set up localhost for.
```
$ http-server folder/folder/
```
