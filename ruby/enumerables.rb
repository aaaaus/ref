cards = ["Ace", "King", "Queen", "Jack"]

#EACH
#return value is the original data structure called upon

cards.each do |card|
  puts "Your card is the #{card} of Spades"
end

# > Your card is the Ace of Spades
# > Your card is the King of Spades
# > Your card is the Queen of Spades
# > Your card is the Jack of Spades
#=> ["Ace", "King", "Queen", "Jack"]

#MAP
#return is a new array or hash of the same length
#does not change original array

cards.map do |card|
  card.length
end

#=> [3, 4, 5, 4]

cards.map { |card| card.upcase }
#=> ["ACE", "KING", "QUEEN", "JACK"]

#SELECT
#returns new collection containing all of the elements where the block's conditional is true

cards.select { |card| card.start_with?("A") }
#=> ["Ace"]

#FIND
#similar to select, but instead of returning a collection, just returns first where true

cards.find { |card| card.length === 4 }
#=> "King"

#DELETE_IF
#will delete from collection if condition is true (DESTRUCTIVE)

cards.delete_if { |card| card === "Jack" }
#=> ["Ace", "King", "Queen"]

#INCLUDE?
#returns true/false if the element is included

cards.include?("Queen")
#=> true
