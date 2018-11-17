---
layout: blog-post
title: Command line for Mac to see which ports are in use and how to end them
category: blog
tags: code random
author: Ang Yi Xin
---

To list all the activities in Terminal, type


    ps aux

To find the corresponding process ID (PID) of the specific port (e.g. 4000)


     sudo lsof -n -i :4000 | grep LISTEN

  To kill the process, use the command below, replace the PID with the identified PID


    kill -9 PID
