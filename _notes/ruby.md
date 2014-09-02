---
layout: default
title: Ruby
---

## IRB
- Interactive Ruby Shell

```bash
irb
irb --simple-prompt
```

```ruby
# to import a file to IRB, in the same folder
require "filename.rb"
```

---


## Object Types in Ruby
- Ruby is an object-oriented programming language.
- An object is the fundamental building block in Ruby.
- Objects are instances of a class.


### Object Types: Variables
- Variables are not objects - part of the Ruby language.
- Variables allow us to easily reference objects in Ruby.
- Variables point to objects.
- Variables will be undefined or act like an object.
- Variable in Ruby are all lowercase, underscore names.

```ruby
awesome_variable = 3
```


### Variables: Scope Indicators

| Scope    |  Syntax      |
| -------- | ------------ |
| Global   | `$variable`  |
| Class    | `@@variable` |
| Instance | `@variable`  |
| Local    | `variable`   |
| Block    | `variable`   |



### Object Types: Integers
- Integers - Fixnum and Bignum.

```ruby
1 + 1
x = 2
4 / 2
4 * 2
4 - 2
4 ** 2  # exponent
x += 2
```

```ruby
1234.class # what class is the integer => Fixnum
12345678901234567890.class # => Bignum
-200.abs # => 200
200.next # => 201
```


### Object Types: Floats
- Floating-point numbers (floats).
- Decimal numbers.
- Numbers with precision.
- Specify the decimal point to create a floating point number.

```ruby
1234.1234.class # => Float
1234.5678.round # => 1235
1234.5678.to_i  # => 1234
1234.5678.floor # => 1234
1234.5678.ceil  # => 1235
```


### Object Types: Strings
- Sequence of characters.
- Characters that are strung together to create words of sentences.
- Double quoted strings do additional evaluation.

```ruby
greeting = "Hello"
target = 'world'
greeting + ' ' + target # => Hello world
"Yo " * 3 # => Yo Yo Yo
'I\'m escaped.'
puts "I want to say #{greeting} #{target}."
puts "1 + 1 = #{1 + 1}"
```

```ruby
"Hello".reverse
"Hello".capitalize
"Hello".downcase
"Hello".upcase
"Hello".length
```

```ruby
# Daisy chaining methods on an object:
"Hello".reverse.upcase # => "OLLEH"
```


### Object Types: Arrays
- Array: an ordered, integer-indexed collection of objects.
- Any king of objects can go in an array (strings, numbers, other arrays, mixed types etc.)
- The square brackets for the array are optional.

```ruby
data_set = []
data_set = ["a", "b", "c"]
data_set[1] # => "b"
data_set[0] # => "a"
data_set[3] # => nil
data_set[0] = d
data_set  # => ["d", "b", "c"]
```

```ruby
data_set << "e" # appends an item to the end of the array
data_set.clear # clears out the array, same as data_set = []
```


#### Array Methods

```ruby
array = [1,2,3,4,5]
array.inspect          #=> "[1, 2, 3, 4, 5]"
array.length           #=> 5
array.to_s             #=> "[1, 2, 3, 4, 5]"
array.join             #=> "12345"
array.join(", ")       #=> "1, 2, 3, 4, 5"
"1,2,3,4".split(',')   #=> ["1", "2", "3", "4"]
```

```ruby
array.reverse          #=> [5, 4, 3, 2, 1]
[3,1,4,7].sort         #=> [1, 3, 4, 7] // for simple arrays
[3,1,4,7].sort!        #=> [1, 3, 4, 7] // will save the changes
[3,3,2,1].uniq         #=> [3, 2, 1]
array.delete_at(2)     #=> 2  // "[1, 2, 4, 5]"
array.delete(4)        #=> 4  // "[1, 2, 3, 5]"
```

```ruby
array << 3             # Append at the end
array.push(4)          # Same as append
array.pop              # Remove the last item
array.shift            # Remove the first item
array.unsift(1)        # Add to the beginning
```

```ruby
array + [9, 10, 11]   # Add the two arrays
array - [9, 10]       # Removes the items
array - [2]           # Removes only one item same as delete
```


### Object Types: Hashes
- Hash: unordered, object-indexed collection of objects.
- Stored as a key-value pair, unordered collection.
- Indexed by a a key, not by a specific order.
- Called a dictionary in other languages.


#### Arrays VS Hashes
- Use arrays when the order is important.
- Use hashes whent the label is important.

```ruby
person = { 'first_name' => "Vadim", 'last_name' => "Brodsky"}
person['first_name']    #=> "Vadim"
person.key('Vadim')     #=> "first_name"
person['gender'] = 'M'  #=> "m" // will add the new key value pair
```

```ruby
person.keys             #=> ["first_name", "last_name"]
person.values           #=> ["Vadim", "Brodsky"]  // returns the values as an array
person.length           #=> 2
person.size             #=> 2 // same as length
```

```ruby
person.to_a             #=> [["first_name", "Vadim"], ["last_name", "Brodsky"]]
person.clear            #=> {}
person = {}             #=> {} // same as clear
```


### Object Types: Symbols
- Symbol: a label that is used to identify a piece of data.
- Stored in memory one time.
- Good for keys in hashes.

```ruby
:test
:test.object_id        #=> 197608
```

```ruby
hash = {:first_name => 'John', :last_name => 'Smith'}
hash[:first_name]
```


### Object Types: Booleans
- Boolean: True / False for comparisons.

| Operator                         | Syntax  |
| -------------------------------- |:-------:|
| Equal                            | `==`    |
| Less than                        | `<`     |
| Greater than                     | `>`     |
| Less than or equal to            | `<=`    |
| Greater than or equal to         | `>=`    |
| Not                              | `!`     |
| Not Equal                        | `!=`    |
| And                              | `&&`    |
| Or                               | <code>&#124;&#124;</code>  |
| Comparison* (spaceship operator) | `<=>`   |

*Comparison is not a boolean operator.

```ruby
true.class              #=> TrueClass
false.class             #=> FalseClass
1 > 2                   #=> false
x.nil?                  #=> false
2.between?(1,3)         #=> true
[1,3,4].empty?          #=> false
[1,2,3].include?(3)     #=> true
hash.has_key?('a')      #=> false
hash.has_value?('zz')   #=> false
```

#### Comparison Operator
- Compares two values.

```ruby
value1 <=> value2
```

| Return Value | Meaning    |
| ------------ | ---------- |
|  -1          | Less than  |
|   0          | Equal      |
|   1          | More than  |

```ruby
1 <=> 2		#=> -1
2 <=> 1		#=> 1
2 <=> 2		#=> 0
```


### Object Types: Ranges
- Ranges: range on numbers, like an array of all the numbers 1..10
- Inclusive range `1..10` == `1,2,3,4,5,6,7,8,9,10`
- Exclusive range `1...10` == `1,2,3,4,5,6,7,8,9`

```ruby
x = 1..10
y = 'a'..'m'
x.class                #=> Range
x.begin                #=> 1   // same as x.first
x.end                  #=> 10  // same as x.last
x.include(10)          #=> true
[*x]                   #=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```


### Object Types: Constants
- Constants are similar to variables.
- Not true objects, point to objects.
- Constants are different than variables, a constant is _constant_.
- Any variable that starts with a capital letter is a constant in Ruby.
- Changing constants will present a warning, but will work.

```ruby
CONST = "This is a constant"
CONST = "Changed"   #=> warning: already initialized constant CONST
CONST               #=> "Changed"
```


### Object Types: Nil
- An empty object.

```ruby
nil.nil?		#=> true
value.nil?		#=> false
"".nil?			#=> false
nil.to_i 		#=> 0
```



---


## Control Structures
- Control structures provide the action in Ruby programming.
- What happens in which circumstance.

### Control Structures: Conditionals
- If something true, do this.

```ruby
if boolean
	...
end
```

```ruby
if boolean
	...
else
	...
end
```

```ruby
if boolean
	...
elsif boolean
	...
else
	...
end
```

```ruby
if x < 10
	puts "Below 10"
elsif x > 20
	puts "Over 20"
else
	puts "10-20"
end
```

```ruby
puts "This is Vadim" if name == "Vadim"  # inline conditional
```

### Control Structures: Shorthand Conditionals
- unless
- case
- tenary operator
- or/or-equals

```ruby
unless boolean  # same as: if !boolean
	...
end
```

```ruby
case
when boolean
	...
when boolean
	...
else
	...
end
```

```ruby
case test_value
when value
	...
when value
	...
else
	...
end
```

```ruby
boolean ? code1 : code2
puts x==1 ? "one" : "not one"
```

```ruby
if y
	x = y
else
	x = z
end

x = y || z  # this is the shorthand for above
```

```ruby
unless x
	x = y
end

x || = y    # this is the shorthand for above
```


### Control Structures: Loops
- `break`: Terminate the whole loop.
- `next`: Jump to the next loop.
- `redo`: Redo this loop.
- `retry`: Start the whole loop over.

```ruby
loop do
	...
end
```

```ruby
x = 0
loop do
	x += 2
	break if x >= 20
	next if x == 6
	puts x
end 
```

```ruby
while boolean  # has implied conditional
	...
end
```

```ruby
until boolean  # while something is not true
	...
end
```

```ruby
x = 0
while x < 20
	x += 2
	puts x
end
```

```ruby
x = 0
puts x += 2 while x < 100

y = 3246
puts y /= 2 until y <= 1
```


### Control Structures: Iterators
- Similar to loops.
- Once for each item in a set of data.
- The curly braces `{...}` are shorthand for `do` and `end`.
- Control statements `break`, `next`, `redo` and `retry` work in iterators.
- Integers / floats iterate with: `times`, `upto`, `downto`, `step`
- Range iterate with: `each`, `step`
- String iterate with: `each`, `each_line`, `each_byte`
- Array iterate with: `each`, `each_index`, `each_with_index`
- Hash iterate with: `each`, `each_key`, `each_value`, `each_pair`

```ruby
5.times do
	puts "hello"
end
```

```ruby
1.upto(5) {puts "hello"}
5.downto(1) {puts "hello"}
(1..5).each {puts "hello"}
```

```ruby
1.upto(5) do |i|   # i is the number of each iterator
	puts "Hello " + i.to_s
end

# same as above
1.upto(5) {|i| puts "Hello " + i.to_s}
```

```ruby
fruits = ['banana', 'apple', 'pear']

fruits.each do |fruit|
	puts fruit.capitalize
end

# same as above
for fruit in fruits
	puts fruit.capitalize
end
```

---


### Control Structures: Code Blocks
- Block of code that executes multiple times.
- Usually between `do` and `end` or with the short form `{...}`
- Can use the value of the iteration with the `|i|` notation.
- Don't have access to block variables in the local scope.
- Do have access to local variable in the block scope.


#### Code Block Methods: Find
- `find` / `detect`: find the first match, return => Object or nil
- `find_all` / `select`: finds all matches, return => Array
- `any?`: find if any of the items match, return => Boolean
- `all?`: find if all of the items match, return => Boolean
- `delete_if`: delete the item in an array if, returns => Array

```ruby
(1..10).find {|i| i % 3 == 0}  #=> 3 // only the first match returns
(1..10).detect {|i| (1..10).include? (i * 3)}   #=> 1
```

```ruby
(1..10).find_all {|i| i % 3 == 0} #=> [3, 6, 9]
(1..10).select {|i| (1..10).include? (i * 3)}   #=> [1, 2, 3]
```

```ruby
(1..10).any? {|i| i % 3 == 0}     #=> true
(1..10).all? {|i| i % 3 == 0}     #=> false
```

```ruby
[*1..10].delete_if {|i| i % 3 == 0}   #=> [1, 2, 4, 5, 7, 8, 10]
```


#### Code Block Methods: Merge
- Used to merge Hashes together.
- The values passed to the function take precedence over the  calling hash.
- The code block can be supplied optionally, only called in case of a merge conflict.
- The block is used for conflict resolution.
- Use the `merge!` to save the changes of the operation.

```ruby
h1 = { "a" => 111, "b" => 222 }
h2 = { "b" => 333, "c" => 444 }
h1.merge(h2) 				#=> {"a"=>111, "b"=>333, "c"=>444}
h2.merge(h1) 				#=> {"b"=>222, "c"=>444, "a"=>111}
```

```ruby
h1.merge(h2) {|key, old, new| old * 2}  
#=> {"a"=>111, "b"=>444, "c"=>444}
```

```ruby
h1.merge(h2) do |key, old, new|
	if old < new
		old
	else
		new
	end
end
#=> {"a"=>111, "b"=>222, "c"=>444}

# Or using the shorthand
h1.merge(h2) {|k,o,n| o < n ? o : n}
#=> {"a"=>111, "b"=>222, "c"=>444}
```

```ruby
h1.merge!(h2)
h1
#=> {"a"=>111, "b"=>333, "c"=>444}
```


#### Code Block Methods: Collect
- Use either `collect` or `map`.
- Works best with Arrays, Hashes and Ranges.
- Applies the instructions of the code block to each value in the array.
- Need to be explicit on the returns, otherwise it will return `nil`.
- Number of items in == number of items out.
- Always returns an Array.
- Use `collect!` to save the effect on the original object.

```ruby
array = [1, 2, 3, 4, 5]
array.collect {|i| i + 1} 	#=> [2, 3, 4, 5, 6]

["apple", "banana", "orange"].map {|fruit| fruit.capitalize}
#=> ["Apple", "Banana", "Orange"]
```

```ruby
["apple", "banana", "orange"].map {|fruit| fruit.capitalize if fruit == 'banana'}
#=> [nil, "Banana", nil]
# Only returns the matched conditions.
```

```ruby
["apple", "banana", "orange"].map do |fruit|
	if fruit == 'banana'
		fruit.capitalize
	else
		fruit
	end
end
#=> ["apple", "Banana", "orange"]
```

```ruby
hash = { "a" => 111, "b" => 222, "c" => 333 }
hash.map {|k,v| k.capitalize} 	#=> ["A", "B", "C"]
```


#### Code Block Methods: Sort
- Sort does a comparison using the `<=>` operator.
- The comparison operator decides which direction the value goes.
- If the operation is on a single property use `sort_by`.
- To save the result use `sort!`.
- Can sort Hashes as well as Arrays, but Ruby converts it to an Array.

```value1 <=> value2```

| Comparison Result | Meaning   | Action      |
|:-----------------:|:---------:|:-----------:|
|        -1         | Less than | Moves left  |
|         0         | Equal     | Stays       |
|         1         | More than | Moves right |

```ruby
array = [3 ,1, 5, 2, 4]
array.sort { |v1,v2| v1 <=> v2 } 	# default sorting
array.sort 							# same as above but shorter
#=> [1, 2, 3, 4, 5]
```

```ruby
array.sort { |v1,v2| v2 <=> v1 }
array.sort.reverse
#=> [5, 4, 3, 2, 1]
```

```ruby
fruits = ["banana", "apple", "orange", "pear"]
fruits.sort 	# alphabetical sort
#=> ["apple", "banana", "orange", "pear"]

fruits.sort {|fruit1,fruit2| fruit1.length <=> fruit2.length}
#=> ["pear", "apple", "orange", "banana"]

fruits.sort_by{|fruit| fruit.length} 	#shorthand version
#=> ["pear", "apple", "orange", "banana"]
```

```ruby
hash = { "a" => 555, "b" => 333, "c" => 222, "d" => 111 }
hash.sort {|item1, item2| item1[1] <=> item2[1] }
# sort by values of the hash
#=> [["d", 111], ["c", 222], ["b", 333], ["a", 555]]
```


#### Code Block Methods: Inject
- Inject is an accumulator - store the value for the next round.
- Use the `memo` variable to store the result between the iterations.
- Inject can receive a starting number as a parameter.
- If no starting number is declared the first iteration will be used as a starter.
- Careful about conditionals that can sore `nil` in `memo`.

```ruby
# Sum of all the numbers
(1..10).inject {|memo, n| memo + n} 		#=> 55
```

```ruby
array = [*1..10]
sum = array.inject(100) {|memo, n| memo + n} 	#=> 155
product = array.inject {|memo, n| memo * n} 	#=> 3628800
```

```ruby
fruits = ["banana", "apple", "orange", "pear"]
longest_word = fruits.inject do |memo, fruit|
	if memo.length > fruit.length
		memo
	else
		fruit
	end
end
# gets the longest word
#=> "orange"
```

---

## Methods

### Methods: Calling Methods
- Object method that are applied to an object use the `.` notation.
- Object methods can be chained.
- To call a stand-alone method just call it's name, like a variable.
- Methods have to be defined before they are called.

```ruby
"hello".reverse.capitalize
method_name
```


### Methods: Defining Methods
- Method names can have question marks `?` - convention for tests and booleans.

```ruby
def method_name
	...
end

def add
	puts 1 + 1
end

def over_five?
	value = 3
	puts value > 5 ? 'over 5' : 'not over 5'
end
```


### Methods: Variable Scope
- Local method variables have the scope local to the method only.
- Method names and variable names can look the same, be careful.
- Global `$variable`, class `@@variable` and instance `@variable` can span the scope of the method.


### Methods: Arguments
- Comma separated list if values that are passed into the methods.
- Values are passed into the method when it is called.
- When multiple arguments are defined, their order is important.
- The parentheses for the arguments are optional.
- Methods with arguments typically use parentheses.
- Methods without arguments typically do not use parentheses.

```ruby
def welcome(name)
	puts "Hello #{name}"
end

welcome("Vadim")
#=> Hello Vadim

welcome "Vadim" 	# without parentheses
#=> Hello Vadim
```

```ruby
def add(n1, n2)
	puts n1 + n2
end

add(5, 2)
#=> 7
```

#### Methods: Argument Default Values
- Default behavior for the method, so it will not break if the argument is missing when the method is called.
- Make the required arguments first in the argument list.

```ruby
def welcome(name="Friend")
	puts "Hello #{name}"
end
```

### Methods: Return Values
- All methods have a return value.
- Implicit return - the return value for the method is the last operation of the method.
- Explicit return - exits the method and reruns the value using the `return` keyword.
- Returns can work with `if` statements -- `return if x`.
- Can only return 1 object from a method.

```ruby
def welcome(name="Friend")
	return "Hello #{name}!"
end
```

```ruby
def add_and_subtract(n1=0, n2=0)
	add = n1 + n2
	sub = n1 - n2
	return add, sub 	#=> This is an array, the brackets are optional
end

add, sub = add_and_subtract(8, 3)	#=> Double assignment to an array
```

### Methods: Operators are Methods
- Common operators in the Ruby language are methods.
- Ruby uses syntactic sugar to make the common operators appears like operators.
- Common variables can be used as methods with any custom class.

```ruby
8 + 2 == 8.+(2)
8 * 2 == 8.*(2)
8 / 2 == 8./(2)
8 ** 2 == 8.**(2)
```

```ruby
array << 4			# array.<<(4)
array[2] 			# array.[](2)
array[2] = 'x' 		# array.[]=(2,'x')
```

```ruby
"hello" * 5 		# "hello".*(5)
5 * "hello" 		# 5.*("hello")
```


---


## Classes
- Classes define what an object is and what an object can do.
- Class names start with a capital letter and use camel case.
- Group code into discreet, well-categorized areas.
- Objects carry around their class's code.
- Allows for complex behaviors using simple statements.
- Correspond to read-world objects.


### Classes: Defining and Using Classes
```ruby
class NameOfClass
	...
end
```

```ruby
class Animal
	def make_noise
		"Moo!"
	end
end

animal = Animal.new 	#=> #<Animal:0x007f9e7d1a9dc0>
animal.make_noise 		#=> "Moo!"
```


### Classes: Instances
- An object created from a class.
- The instance is created and returned with the `new` method.
- Evey time an object is crated it is a different object.
- Like a "While You Were Out" pad.

```ruby
animal1 = Animal.new
animal2 = Animal.new
```


### Classes: Attributes
- Values that persists inside of an instance. 
- A special kind of variable - `@variable`.
- Never has access to instance variables outside of the instance.
- Only the methods of the class have access to instance variables.

```ruby
class Animal
	def set_noise(noise)
		@noise = noise 
	end

	def make_noise
		@noise
	end
end

animal1 = Animal.new
animal1.set_noise("Moo!")
puts animal1.make_noise 	#=> "Moo!"

animal2 = Animal.new
animal.set_noise("Whoof!")
puts animal2.make_noise 	#=> "Whoof!"
```


### Classes: Reader / Writer Methods
- Same as getters / setters in other languages.
- Give access control over the instance variables.
- Ruby has syntactic sugar to make the reader and writer method more concise.

```ruby
class Animal
	def noise=(noise) 		# same as above but shorter
		@noise = noise
	end

	def noise 				# same as above but shorter
		@noise
	end
end

animal = Animal.new 		
animal.noise = "Moo!" 		# like assigning a variable
puts animal.noise
```


### Classes: Attribute Methods
- For classes that have many attributes Ruby provides a shortcut.
- Using the attribute `attr_*` methods.
- `attr_reader`: creates a reader method.
- `attr_writer`: creates a writer method.
- `attr_accessor`: creates both a reader and a writer method.

```ruby
attr_reader :name

#same as
def name
	@name
end
```

```ruby
atte_writer :name

#same as
def name=(value)
	@name = value
end
```

```ruby
attr_accessor :name

#same as both
def name
	@name
end

def name=(value)
	@name = value
end
```

```ruby
#can create multiple instance variables and methods at once
attr_accessor :name
attr_writer :color
attr_reader :legs, :arms
```


### Classes: Initialize Method
- Methods that run when the object is being initialized.
- Use the `initialize` class method.
- Can pass arguments to the `initialize` method, the `new` method uses them.

```ruby
class Animal
	def initialize(noise, legs, arms)
		@noise = noise
		@legs = legs
		@arms = arms
		puts "A new animal has been instantiated."
	end
end

animal = Animal.new("Moo", 4, 0)
```


### Classes: Class Methods
- A method that can be called on a class, even without an instance of the class.
- Example: `Animal.new`.
- Using the `self` keyword, that applies to the object that we are currently in.

```ruby
def self.method_name
	...
end
```

```ruby
class Animal
	...
	def self.all_species
		['cat', 'cow', 'dog', 'duck', 'horse', 'pig']
	end

	def self.create_with_attributes(noise, color)
		animal = self.new(noise)
		animal.color = color
		return animal
	end
	...
end

puts Animal.all_species
animal2 = Animal.create_with_attributes('black', 'quack')
```


### Classes: Class Attributes
- Store values that apply to the class generally.
- Using the class variable `@@variable`.
- Persists any time we have the class, even without the variables.
- Information that is general for the whole class.
- Keep track of all of the objects with `@@total`.
- Keep track of all the instances with an array of class attributes.
- Cannot access the class attributes outside of the class, only with class methods.

```ruby
class Animal
	...
	@@species = ['cat', 'cow', 'dog', 'duck', 'horse', 'pig']
	@@curent_animals = []

	def self.all_species
		@@species
	end

	def initialize
		@@current_animals << self
	end
	...
end

puts Animal.all_species
puts Animal.current_animals.inspect 	# would not work, need class method
```


### Classes: Class Reader / Writer Method
- Same as with instance variables, class variables (attributes) need setter and getter methods.

```ruby
def self.animals 				# reader
	@@animals
end

def self.animals=(array=[]) 	# writer
	@@animals = array
end
```


### Classes: Inheritance
- Bestowal of methods and attributes of another class.
- Superclass / parent => subclass / children.
- In Ruby we can inherit from only 1 superclass at a time, there are no multiple inheritances.

```ruby
class Cow < Animal
end

betsy = Cow.new("Moo!")
betst.class 		# Cow
```


### Classes: Subclass Overriding
- To overwrite the parent class methods or attributes.
- Methods can be overwritten by using the same method name in the definition of a new method.
- The last definition always wins.

```ruby
class Cow < Animal
	def color
		"The cow's color is #{@color}."	
	end	
end
```

```ruby
class Array 		# overriding Ruby's built in-class
	def to_s
		self.join(', ')
	end
end
```


### Classes: Accessing the Superclass
- To change the behavior of a superclass' method without completely overriding it.
- The keyword `super` is used for that.
- It returns the result of the original method to where `super` is called.

```ruby
class Pig < Animal
	def noise
		parent_noise = super
		return "Hello and also #{parent_noise}"
	end
end

wilbur = Pig.new
wilbur.make_noise
```