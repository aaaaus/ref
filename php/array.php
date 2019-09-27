<?php

//working with arrays 

//array_map

$names = ['jon','alexis','sammy'];

$formatted_names = array_map(function($name) {
  return ucfirst($name);
}, $names);

print_r($formatted_names);
//(
//  [0] => Jon
//  [1] => Alexis
//  [2] => Sammy
//)

//range

range(7,11);
//(
//  [0] => 7
//  [1] => 8
//  [2] => 9
//  [3] => 10
//  [4] => 11
//)
