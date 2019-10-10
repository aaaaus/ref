<?php

$mood = 'hungry';
$action = 'eat pasta';

$sentence = sprintf('I am feeling %s and I want to %s.', $mood, $action);

//return: 'I am feeling hungry and I want to eat pasta'

//str_replace
$my_mood = str_replace("blank", "happy", "I am feeling blank");

//preg_replace

//misc

ucfirst('new york'); //converts the first character of a string to uppercase
//return: 'New york'

lcfirst('Reddit'); //converts the first character of a string to lowercase
//return: 'reddit'

strtoupper('hello'); //converts a string to uppercase
//return 'HELLO'

strtolower('QUIET'); //converts a string to lowercase
//return 'quiet'
