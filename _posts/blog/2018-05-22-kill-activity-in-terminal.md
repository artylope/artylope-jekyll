---
layout: blog-post
title: End an activity in Terminal
category: blog
tags: code
author: Ang Yi Xin
---

To list all the activities in Terminal, type
  ```bash
  ps aux
  ```

To find the corresponding process ID (PID) of the specific port (e.g. 4000)
  ```bash
  sudo lsof -n -i :4000 | grep LISTEN
  ```

To kill the process, use the command below, replace the PID with the identified PID
  ```bash
  kill -9 PID
  ```
