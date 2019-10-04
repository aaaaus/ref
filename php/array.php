<?php

//working with arrays 

//array_keys

$item = [
  "type" => "shirt",
  "cost" => 25
];

array_keys($item) // [ 'type', 'cost' ]

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


//array_unique 

$nums = [1, 1, 2, 2, 3, 3];
print_r(array_unique($nums));
// (
//     [0] => 1
//     [2] => 2
//     [4] => 3
// )


//quick reference

$nums = [1, 2, 3, 4, 5];

count($nums); //return: 5
in_array(3, $nums); //return: true

shuffle($nums);
// (
//     [0] => 5
//     [1] => 2
//     [2] => 1
//     [3] => 4
//     [4] => 3
// )


//range

range(7,11);
//(
//  [0] => 7
//  [1] => 8
//  [2] => 9
//  [3] => 10
//  [4] => 11
//)

