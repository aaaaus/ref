#Loops

#times constructor

def add_ten(num)
  10.times do
    num += 1
  end
  return num
end

add_ten(12)
#=> 22

#LOOP

counter = 0
loop do
 counter += 1
 puts "Iteration #{counter} of the loop"
 if counter >= 10
   break
 end
end


#WHILE

num = 0
while num < 100
  num += rand 1..10 #random number between and including 1 and 10
  puts num
end

#the value of num will be logged for each loop until the number is greater than 100


#UNTIL

counter = 0
until counter == 20
 puts "The current number is less than 20."
 counter += 1
end


#BREAK

def annoying
 loop do
   puts "What's up, Doc?"
   answer = gets.chomp
   break if answer == "STOP"
 end
 puts "Okay, okay, jeez. I'll stop. Sorry."
end

#FOR CONSTRUCTOR

shoe_count = 1..32

for shoe in shoe_count
   puts "I'm putting a pair of shoes away."
end
