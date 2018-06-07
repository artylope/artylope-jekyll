title: Command line for Mac to see which ports are in use and how to end them
link: http://52.55.189.73/2018/05/22/command-line-for-mac-to-see-which-ports-are-in-use-and-how-to-end-them/
author: angyixin
description: 
post_id: 557
created: 2018/05/22 05:58:43
created_gmt: 2018/05/22 05:58:43
comment_status: open
post_name: command-line-for-mac-to-see-which-ports-are-in-use-and-how-to-end-them
status: publish
post_type: post

# Command line for Mac to see which ports are in use and how to end them

To list all the activities in Terminal, type 
    
    
    ps aux

To find the corresponding process ID (PID) of the specific port (e.g. 4000) 
    
    
     sudo lsof -n -i :4000 | grep LISTEN

  To kill the process, use the command below, replace the PID with the identified PID 
    
    
    kill -9 PID