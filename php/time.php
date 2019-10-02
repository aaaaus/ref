<?php

//https://www.php.net/manual/en/function.date.php

//date returns a formatted date string, using current time by default

date('m/d/y');
//string: '09/20/19'

//list of format characters: https://www.php.net/manual/en/function.date.php

//common:
// Y (4 digit year)
// y (2 digit year)

//m (numeric month with leading zeros)

//d (day of the month w/ leading zeros)

// H (24 hour format of hour w/ leading zeros)
// i (minutes w/ leading zeros)
// s (seconds w/ leading zeros)



$halloween = '10/31/19'

//strtotime returns a unix timestamp for a date string passed in

strtotime($halloween);
//integer: 1572480000

//date accepts a timestamp as an optional second argument

date('Y-m-d', strtotime($halloween));
//string: '2019-10-31'

//strtotime can parse English descriptions as first argument against a timestamp in second argument

date('Y-m-d', strtotime('1 year', strtotime($halloween));
//string: '2020-10-31'
