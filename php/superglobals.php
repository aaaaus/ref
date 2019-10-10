<?php

//Superglobals are built-in variables that are always available in all scopes
//Further reading: https://www.php.net/manual/en/language.variables.superglobals.php

$GLOBALS
  
  
$_SERVER //is an array containing information such as headers, paths, and script locations.

$_GET //an associative array of variables passed to the current script via URL parameters (aka query string)

//if url is http://www.website.com/homepage?city=Baltimore

$_GET //returns:
//[ 'city' => 'Baltimore' ]

$_POST
$_FILES
$_COOKIE
$_SESSION
$_REQUEST
$_ENV
