---
layout: note
title: JavaScript
---

## YDKJS: Up and Going

### JS Built In Variable Types
1. `string`
2. `number`
3. `boolean`
4. `null`
5. `undefined`
6. `object`
7. `symbol` (new in ES6).

Use `typeof` operator to examine the type of an object literal or a variable, returns a string representation of one of the 7 types.

- `undefined` is the value of a variable before it gets assigned
- functions that return nothing reutrn `undefined`
- the `void` operator makes a variable undefined

`Array` and `function `are subtypes of `object`, they have special properties such as length.

```javascript
typeof foo;     // "function"
typeof foo();   // "number"
typeof foo.bar; // "string"
```

The built-in types and subtypes have properties and methods via "boxing". There is a `String` object wrapper form - called "native" tht pairs with primitive types and defined the methords on it's prototype.

```javascript
a.length;
a.toUpperCase();
a.toFixed(4);
```


### JS Implicit / Explicit Coercion

```javascript
var a = "42";
var b = Number(a);
```

```javascript
var a = "42";
var b = a * 1;
```


### Truthy & Falsy
- **false**: `""` (Empty String), `0`, `-0`, `Nan`, `null`, `undefined`
- **true**: `"string"`, `42`, `[]`, `{}`, `function foo() {}`


### Equality Comparisons
- `==` / `!=` checks for value equality / inequeality
- `===` / `!== ` checks for value and type (strict)

```javascript
var a = 42, b = "42";

a == b;  //true
a === b; //false
```

- If either value (side) in a comparison could be the true coersed or false value, avoid `==` and use `===` instead. 
- If either value in a comparison could be of value `0`, `""`, `[]` - avoid `==`, use `===` instead.
- In all other cases it's safe to use `==`. 

All non-primitive values (object, funciton, array) are held by reference, the `==` and `===` comparisons only check if the references match, not the underlying values.

- Two arrays with the same contents are not the same.
- Arrays are coerced to String by joining all values with commas.

```javascript
var a = [1,2,3], b = [1,2,3], c = '1,2,3';

a == c;  // true
b == c;  // true
a == b   // false
```


### Relational Comparisons
Relational comparison with strings, if both values in the `<` comparison are string, the comparison is made lexicographically. If one or both is not a string, then both values are coerced to be numbers, and a typical numeric comparison occurs.

The `NaN` - invalud number value is neither greater than nor less than any other value. In ES5 `NaN` is the only value that does not equal itself (a bug!). 

```javascript
var a = 42, b = "foo"

a < b;       // false
a > b;       // false
a == b;      // false
NaN !== NaN; // true
```


### Varible Names
An identifier must start with `a-z`, `A-Z`, `$` or `_`. It can then contain any of those characters plus the numerals `0-9`.


### Hoisting
AWhen a `var` declaration is conceptually moved to the top of its encolosing scope.


### Nested Scopes
When a variable is declared it is available anywhere in that scope, as well as any lower / inner scopes.

 A `ReferenceError` thrown if you try to access a variable's value in a scope where it's not available.

If you try to set a variable that was not declared, either a global variable will be declared or an error if `strict mode` is on.

In ES6 the keyword `let` creates a variable that only belongs to individual block's scope, pair of `{..}`


### Conditionals

The `if` statement

```javascript
if (..)
    ...
else if (..)
    ...
else
    ...
```

The `switch` statement

```javascript
switch(a) {
    case 2;
        // do something
        break;
    default;
        // do something
}
```

The `break` is important if you want only one statement in once case to run, If the `break` is omitted the execution will continue with the next `case` statement regardless of that case matching. This is called "fall through".

The ternary operator, more concise form of a single `if..else` statement

```javascript
var b = (a > 41) ? 'hello' : 'world';
```


### Strict Mode Pragrma
Strict mode was added in ES5, adds restrictions to make the code safer and more optimizable by the JS engine.

To use Strict Mode, add `"use strict";` to a function scope or to a global scope. Depending on where it was called.

Strict Mode disallows the implicit auto-global variable declaration from omitting the `var` keyword, will throw a `ReferenceError`


### Functions
A function can be a value that's assigned to variables passed to or returned from other functions.

Function `foo` is just a variable in outer enclosing scope that's given a reference to the function being declared. The function itself is a value.

```javascript
function foo() {
    ...
}
```

A function value should be thought of as an expression, much like any other value or expression.

```javascript
var foo = function() {...} 
var x = function bar() {...} 
```
- Anonymous function assigned to value `foo`.
- Function expression named `bar`, a reference to it is assigned to the `x` variable.


### IIFE
Immediately invoked function expression.

```javascript
(function IIFE() {
    console.log('hi');
})();
```

The outer `()` are just a nuance of JS that prevents it from treated as a normal function declaration.

The final `()` on the end of the expression is what executed the function for the program, they can also optionally return a value.


### Closure
Closure is a way to remember and continue to access a function's scope and it's variables even once the function has finished running.

```javascript
function makeAdder(x) {
    function add(y) {
        return y + x;
    };
    return add;
}
```

The function `add()` uses `x` so it has a closure over it.

```javascript
var plusOne = makeAdder(1);
plusOne(3);  // 4  <- 1 + 3
plusOne(4);  // 42 <- 1 + 41
```

The most common use for closures in JavaScript is the module pattern. This allows to define a private implementation details that are hidden from the outside. As well as a public API that is accessible from the outside.


### this Keyword Identifier
If a function has a `this` reference inside it, that `this` reference usually points to the object. But which object it points to depends on how the function was called.

`this` does not refer to the function itself.

```javascript
function foo() {
    console.log(this.bar);
}

var bar = 'global';
var obj1 = { bar: 'obj1', foo: foo};
var obj2 = { bar: 'obj2' };

foo();          // global
obj1.foo();     // obj1
foo.call(obj2)  // obj2
new foo();      // undefined
```

1. `foo()` ends up setting `this` to the global object in **non strict** mode, in **strict mode** `this` would be undefined and will throw an error.
2. `obj1.foo()` sets `this` to the `obj1` object.
3. `foo.call(obj2)` sets this to the `obj2` object.
4. `new foo()` sets `this` to a brand new empty object.


### Prototypes
When you reference a property on an object, it that property doesn't exist JavaScript will automatically use the object's internal prototype reference to find another object to look for the property on.

Like a fallback if the property is missing.

The internal prototype reference linkage from the object to its fallback happens at the time the object is created.

```javascript
var foo = { a: 42 };
var bar = Object.create(foo);
bar.b = 'hello world';

bar.b;  // hello world
bar.a;  // 42  <- delegated from foo
```

Prototypes are used for "behavior delegation" pattern, where the needed behavior is delegated from one object to the other.


### Non-JavaScript
The most common non-javascript is the DOM API, it is not part of the language but provided by the browser environment.

```javascript
var el = document.getElementById('foo');
```

The document variable exists as a global variable where the code is run in the browser. It's not provided by the JS engine. It looks like a normal JS object, but in reality it's a special host object.

Traditionally DOM and it's behavior is implemented by the browser in c/c++.
