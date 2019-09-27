<?php

//Superglobals are built-in variables that are always available in all scopes

$GLOBALS
$_SERVER

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
