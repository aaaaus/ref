#STRINGS IN RUBY ARE PASS-BY-REFERENCE

"hello".size
# => 5

"hello".upcase
# => "HELLO"

"hello".reverse
# => "olleh"

#boolean evaluations

"New York".start_with?("N")
#=> true
"New York".start_with?("Ne")
#=> true
"New York".start_with?("New")
#=> true
