#!/bin/bash

function server () {
  while [[ True ]]
  do
    message=$1
    echo 'You said:' $message
  done
}

coproc SERVER_PROCESS { server }

netcat -lv 2345 <&${SERVER_PROCESS[0]} >&${SERVER_PROCESS[1]}