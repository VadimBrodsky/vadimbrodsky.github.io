---
layout: default
title: Ruby Notes
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
- Characters that are strung together to create words of sentances.
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


### Object Types: Strings
- Array: an ordered, integer-indexed collection of objects.
- Any king of objects can go in an array (strings, numbers, other arrays, mixed types etc.)

```ruby
data_set = []
data_set = ["a", "b", "c"]
data_set[1] # => "b"
data_set[0] # => "a"
data_set[3] # => nill
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

| Operator                   | Syntax  |
| ---------------------------| ------- |
| Equal                      | `==`    |
| Less than                  | `<`     |
| Greater than               | `>`     |
| Less than or equal to      | `<=`    |
| Greater than or equal to   | `>=`    |
| Not                        | `!`     |
| Not Equal                  | `!=`    |
| And                        | `&&`    |
| Or                         | `||`    |

```ruby
true.class              #=> TrueClass
false.class             #=> FalseClass
1 > 2                   #=> false
x.nill?                 #=> false
2.between?(1,3)         #=> true
[1,3,4].empty?          #=> false
[1,2,3].include?(3)     #=> true
hash.has_key?('a')      #=> false
hash.has_value?('zz')   #=> false
```


### Object Types: Booleans
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


## Control Structures
- Control structures provide the action in Ruby programming.
- What happens in which circumstance.

### Control Structures: Conditionals
- If something true, do this.