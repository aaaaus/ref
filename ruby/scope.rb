#In Ruby, methods create their own scope
#By default, any variable from outside a method will be unavailable inside that method
#In addition, local variables created inside a method "fall out of scope" outside of the function

#Arguments act as a gateway into a method body, allowing a variable to be passed into its local scope from the external scope that calls the method.

grocery_list = ['steak', 'potatoes', 'beans']
item = 'butter'

#if you invoke this function, you will get a name error as both are out of scope
def add_to_list
  grocery_list << item
end
# NameError: undefined local variable or method `grocery_list' for main:Object

#the code below will work because the variable are passed in as arguments; the original array is changed (pass-by-ref)
def add_to_list(list, item)
  list << item
end

add_to_list(grocery_list, item)
#=> ["steak", "potatoes", "beans", "butter"]
