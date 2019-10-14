<?php

//https://www.php.net/manual/en/ref.strings.php

$name = 'Bill';

strlen($name);
//return: 5;

// STRING TRANSLATE - strtr( string, array )
//pass in string and an array of replacement pairs

strtr('I want a car', array(
  'car' => 'boat',
  'I' => 'You'
));

//-> You want a boat

// rtrim
//strip whitespace (or characters) from end of string
// rtrim( input (string));

//if used with second argument, all characters in 
// rtrim( input (string), character mask (string));

rtrim('hello world    ');
//-> 'hello world'

rtrim('hello world', 'held');
//-> 'hello wor'
//note that 'he' above was ignored as only characters collectively at end of string are removed) 

rtrim('hello world', 'hello orld');
//-> 'hello w'
