name = "Austin"

# string interpolation
puts "Hi, my name is #{name}"

naming_convention = "The convention in ruby is to use 'snake case' for variable names"

#variables can be reassigned

#variables in Ruby are PASS-BY-VALUE
#a variable makes a copy of the value it holds and passes the copy over to something else that alters or changes it
#the original variable is unchanged

city = "New York"
# => "New York"
city.upcase
# => "NEW YORK"
city
# => "New York"

#Types of variables:

def method
  local_variable = "Hi, I'm local only to this method"
end

$global_variable = "Everyone everywhere can see me"

Constant = "I'm a constant, reassigning me will give a warning message"
CONSTANT = "I can be in all caps too"

#Methods

def greeting_a_person(name, age)
  "Hello #{name}, you are #{age} years old."
end

#method parameters are a bareword; an argument is the actual value passed in for the parameters
#above, name and age are parameters, and "John" and "24" would be the arguments

#in Ruby, all arguments are required when you invoke a method.

#identical ways of invoking a method:

greeting_a_person("Austin", 33)
# => "Hello Austin, you are 33 years old."
greeting_a_person 'Austin', 33
# => "Hello Austin, you are 33 years old."

#invoking without parentheses is considered bad style when there are arguments, but OK when there aren't arguments
#there are expections (such as RSpec tests)

#DEFAULT ARGUMENTS

def greeting(name = "friend")
  "Hello #{name}."
end

greeting("Austin")
# => "Hello Austin."
greeting
# => "Hello friend."

#by convention if there are mixed required and default arguments, the default argument is listed LAST

#RETURN KEYWORD

#generally rubyists prefer inplicit returns, in which the return of the last line evaluated is the return of a method

#however, an explicit return can be used which disrupts the flow of your method

def return_a_value
  name = "Austin"
  return name
  name = "Brian"
end

#invoking this function will return "Austin"

#SPLAT OPERATOR
#when you don't know how many arguments you're going to have, it will create an array of whatever you enter
#if multiple arguments defined, splat arguments must come LAST

def cowabunga_dudes(*turtles)
  turtles.each do |turtle|
    puts "Cowabunga, #{turtle}!"
  end
end

cowabunga_dudes("Leonardo", "Rafael")
# > Cowabunga, Leonardo!
# > Cowabunga, Rafael!
#=> ["Leonardo", "Rafael"]

cowabunga_dudes("Leonardo", "Rafael", "Michelangelo", "Donatello")
# > Cowabunga, Leonardo!
# > Cowabunga, Rafael!
# > Cowabunga, Michelangelo!
# > Cowabunga, Donatello!
#=> ["Leonardo", "Rafael", "Michelangelo", "Donatello"]
