#CONTROL FLOW

#if, else and elsif statements
#case statements
#loops

dog = "thirsty"

if dog == "hungry"
 puts "Refilling food bowl."
elsif dog == "thirsty"
 puts "Refilling water bowl."
else
 puts "Reading newspaper."
end

# "Refilling water bowl."


#TERNARY OPERATOR (use in place of simple if/else conditions)

def is_it_a_baby(age)
  age < 2 ? "baby" : "not a baby"
end

is_it_a_baby(5)
#=> "not a baby"
is_it_a_baby(1)
#=> "baby"

#CASE STATEMENTS

current_weather = "raining"

def weather_advice(current_weather)
  case current_weather
   when "sunny"
     puts "grab some sunscreen!"
   when "raining"
     puts "grab an umbrella"
   when "snowing"
     puts "bundle up"
  end
end

weather_advice(current_weather)
# grab an umbrella
#=> nil
