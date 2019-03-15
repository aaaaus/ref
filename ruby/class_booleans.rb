#BOOLEANS IN RUBY ARE PASS-BY-VALUE

#bang operators

!true
#=> false

!false
#=> true

#double bang returns true or false whether a value was true or false to begin with:
#good for evaluating truthiness

!!"hello"
#=> true

!!nil
#=> false

#boolean operators

! #NOT
&& #AND
|| #OR

true && false
#=> false

false || true
#=> true

#comparison operators

1 == 1
#=> true

1 == 7
#=> false
