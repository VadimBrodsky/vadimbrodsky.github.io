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