<?php

//pass by reference

//using ampersand, we can pass values by reference

$turtles = ['leo' => 'blue', 'raph' => 'red', 'mike' => 'orange', 'don' => 'purple'];

$recolor = &$turtles['mike'];
$recolor = 'pink';

print_r($turtles);
$turtles = ['leo' => 'blue', 'raph' => 'red', 'mike' => 'pink', 'don' => 'purple'];
