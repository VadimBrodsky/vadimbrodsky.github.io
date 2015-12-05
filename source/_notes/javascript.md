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
