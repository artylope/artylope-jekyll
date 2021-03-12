---
layout: blog-post
title: learning command line
category: blog
tags: code
author: Ang Yi Xin
---


  ```
  pwd                         - parent working file
  cd                          - change directory
  cd ~                        - navigate to home directory
  ls                          - list content in directory
  ls -a                       - list content in directory, also hidden files
  ls -la                      - list and sort
  ls ~/folder/subfolder       - list content with absolute path
  touch file.txt              - creates a file named file.txt
  open file.txt               - open the file named file.txt
  cat file.txt                - show file content in terminal
  mkdir folder_name           - make a new folder
  mv file.txt folder_name/    - move file.txt to folder_name/
  cp file.txt file2.txt       - copy the file.txt and name it file2.txt
  rm file.txt                 - remove aka delete file2.txt
  rmdir                       - remove directory
  grep search file.txt        - search for files "grep <search term> <file name>" e.g. grep prestige movies.txt
  cat file.txt                - read the file in terminal "cat <file name>"
  

  ```

  Extra command

  ```
  cp -r folder_name new_folder_name  - copy folder and the content inside. if use without -r which means recursively, content will not be copied.

  rm -r folder_name                  - remove folder_name and content inside

  rm -r *                            - remove all content in folder

  mv folder_name                     - does not need "-r" inside

  mv old_folder_name new_folder_name - moves folder content into its new name

  mv folder_name ~                   - move files to home directory
  ```
| command   | description                              |
| ----------|:-------------:|
| pwd       | parent working file   |
| cd        | change directory   |
|ls         | list content in directory   |
|ls -al     | list content in directory, also hidden files   |

my tables not working well in markdown. need to fix this.

useful links : https://www.codecademy.com/articles/command-line-commands
and https://gist.github.com/alexpchin/01caa027b825d5f98871
