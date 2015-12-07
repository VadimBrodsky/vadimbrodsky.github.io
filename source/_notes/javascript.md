---
layout: note
title: JavaScript
---

## JS Built In Variable Types
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


## JS Implicit / Explicit Coercion

```javascript
var a = "42";
var b = Number(a);
```

```javascript
var a = "42";
var b = a * 1;
```


## Truthy & Falsy
- **false**: `""` (Empty String), `0`, `-0`, `Nan`, `null`, `undefined`
- **true**: `"string"`, `42`, `[]`, `{}`, `function foo() {}`


## Equality Comparisons
- `==` / `!=` checks for value equality / inequeality
- `===` / `!== ` checks for value and type (strict)

```javascript
var a = 42, b = "42";

a == b;  //true
a === b; //false
```

- If either value (side) in a comparison could be the true coersed or false value, avoid `==` and use `===` instead. 
- If either value in a comparison could be of value `0`, `""'`, `[]` - avoid `==`, use `===` instead.
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


## Relational Comparisons
Relational comparison with strings, if both values in the `<` comparison are string, the comparison is made lexicographically. If one or both is not a string, then both values are coerced to be numbers, and a typical numeric comparison occurs.

The `NaN` - invalud number value is neither greater than nor less than any other value. In ES5 `NaN` is the only value that does not equal itself (a bug!). 

```javascript
var a = 42, b = "foo"'

a < b;      // false
a > b;      // false
a == b;     // false
NaN !== NaN // true
```


## Varible Names
An identifier must start with `a-z`, `A-Z`, `$` or `_`. It can then contain any of those characters plus the numerals `0-9`.


## Hoisting
AWhen a `var` declaration is conceptually moved to the top of its encolosing scope.
