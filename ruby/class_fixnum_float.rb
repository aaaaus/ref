#FIXNUM AND FLOAT IN RUBY ARE PASS-BY-VALUE

5.class
#=> Fixnum
3.14159.class
#=> Float


#to string

1.to_s
# => "1"

#absolute value

-1.abs
# => 1

7.5.floor
# => 7

7.5.ceil
# => 8

#fixnum only

10.next
# => 11

#MATH

Math.sqrt(81)
# => 9.0

#RANDOM NUMBERS

rand()
#=> 0.3658288302864293
#returns random float between 0 and 1

rand(5) #or
rand 5
#returns a random integer between (and including) 0 up to (but NOT including) that number
rand 11 #returns a random integer from 0 to 10

#range
rand 1..10 #returns a random integer from 1 to 10 (including 1 and 10)

#range to an array
(1..10).to_a
#=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
