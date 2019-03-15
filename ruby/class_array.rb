#ARRAYS IN RUBY ARE PASS-BY-REFERENCE

array = [1, 2, 3, 4, 5, 6]
array.each { |x| puts x }

#CREATION
#literal constructor
my_array = []

#class constructor
my_array = Array.new

#arrays can be filled with mixed data types, but this is discouraged

#tricks
array = [1,2,3]
puts array
#each element will be printed on its own line
puts array.inspect
# > [1, 2, 3]

fruit_array = ["apple", "banana"]

fruit_array[0]
fruit_array.first
#=> "apple"
fruit_array[1]
#=> "banana"
fruit_array[-1] #access the last element of array
fruit_array.last
#=> "banana"
fruit_array[2]
#=> nil

fruit_array.index(banana)
#=> 1

#DESTRUCTIVE METHODS

#ADD TO ARRAY

#shovel method
fruit_array << "cherry"
#=> ["apple", "banana", "cherry"]

fruit_array.push("cherry")
#=> ["apple", "banana", "cherry"]

fruit_array.unshift("mango")
#=> ["mango", "apple", "banana"]

#REMOVE FROM ARRAY
fruit_array.pop #removes and returns last element from array
#=> "banana"
fruit_array
#=> ["apple"]

fruit_array.shift #removes and returns first element from array
#=> "apple"
fruit_array
#=> ["banana"]



#Array Methods (non-destructive)
#note - using ! after some of these WILL change the original array in place (for example, people.sort!)


people = ["austin", "vanessa", "brian", "chris"]

people.sort
#=> ["austin", "brian", "chris", "vanessa"]

people.reverse
#=> ["chris", "brian", "vanessa", "austin"]

people.include?("austin")
#=> true

people.first
#=> "austin"
people.last
#=> "chris"
people.size
#=> 4
people.length
#=> 4

birds = ["duck", "duck", "duck", "goose"]
birds.uniq
#=> ["duck", "goose"]

family_nested = [["Homer", "Marge"], ["Bart", "Lisa", "Maggie"]]
#=> [["Homer", "Marge"], ["Bart", "Lisa", "Maggie"]]
family_nested.flatten
#=> ["Homer", "Marge", "Bart", "Lisa", "Maggie"]


#Array methods (DESTRUCTIVE)

family = ["Homer", "Marge", "Bart", "Lisa", "Maggie"]

family.delete("Homer")
#=> "Homer"
family
#=> ["Marge", "Bart", "Lisa", "Maggie"]

family.delete_at(2)
#=> "Bart"
family
#=> ["Homer", "Marge", "Lisa", "Maggie"]

family.insert(0, "Grandpa")
#=> ["Grandpa", "Homer", "Marge", "Bart", "Lisa", "Maggie"]

#ITERATION

#EACH
#note that return is the same array

people.each do |person|
   puts "Hello, #{person}"
end

#Hello, austin
#Hello, vanessa
#Hello, brian
#Hello, chris
 #=> ["austin", "vanessa", "brian", "chris"]
