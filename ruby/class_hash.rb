#HASHES IN RUBY ARE PASS-BY-REFERENCE

#literal constructor:

my_hash = {}


foods = {"fruit" => "apple", "vegetable" => "broccoli"}

foods["fruit"]
#=> "apple"

foods["nut"] = "walnut"

foods
#=> {"fruit"=>"apple", "vegetable"=>"broccoli", "nut"=>"walnut"}

#SYMBOLS
#are immutable (unlike strings), use less memory

name = :john
same_as_name = :john
name.object_id == same_as_name.object_id
#=> true

#Ruby 1.9 introduced new notation when using symbol as key in kv pairs:

car = { make: "Ford", model: "Mustang" }
#=> {:make=>"Ford", :model=>"Mustang"}

#NESTED HASHES

all_foods = {
  fruits: ["apple", "pear", "cherry"],
  veggies: ["broccoli", "corn", "green bean"]
}

all_foods[:fruits]
#=> ["apple", "pear", "cherry"]
all_foods[:veggies]
#=> ["broccoli", "corn", "green bean"]
all_foods[:veggies][0]
#=> "broccoli"

#ITERATING OVER HASHES

mario_bros = {hero: "Mario", villain: "Bowser"}

mario_bros.each do |key, value|
  puts "#{value}"
end

# > Mario
# > Bowser
#=> {:hero=>"Mario", :villain=>"Bowser"}

mario_bros = {hero: "Mario", sidekick: "Yoshi", villain: "Bowser"}

mario_bros.map do |key, value|
  value[0]
end
#=> ["M", "Y", "B"]

mario_bros.map do |role, name|
  role
end
#=> [:hero, :sidekick, :villain]

#alternately...

mario_bros.keys
#=> [:hero, :sidekick, :villain]

mario_bros.values
#=> ["Mario", "Yoshi", "Bowser"]



#By the way, a hash that has counts of occurrences is a common data structure in programming, useful for generating charts and more. They are called Histograms.
