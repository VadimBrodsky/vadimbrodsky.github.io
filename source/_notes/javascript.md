---
layout: note
title: JavaScript
---

## YDKJS 1: Up and Going

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
- functions that return nothing return `undefined`
- the `void` operator makes a variable undefined

`Array` and `function` are subtypes of `object`, they have special properties such as length.

```javascript
typeof foo;     // "function"
typeof foo();   // "number"
typeof foo.bar; // "string"
```

The built-in types and subtypes have properties and methods via "boxing". There is a `String` object wrapper form - called "native" that pairs with primitive types and defined the methods on it's prototype.

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
- `==` / `!=` checks for value equality / inequality
- `===` / `!== ` checks for value and type (strict)

```javascript
var a = 42, b = "42";

a == b;  //true
a === b; //false
```

- If either value (side) in a comparison could be the true coerced or false value, avoid `==` and use `===` instead.
- If either value in a comparison could be of value `0`, `""`, `[]` - avoid `==`, use `===` instead.
- In all other cases it's safe to use `==`.

All non-primitive values (object, function, array) are held by reference, the `==` and `===` comparisons only check if the references match, not the underlying values.

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


### Variable Names
An identifier must start with `a-z`, `A-Z`, `$` or `_`. It can then contain any of those characters plus the numerals `0-9`.


### Hoisting
When a `var` declaration is conceptually moved to the top of its enclosing scope.


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


### Strict Mode Pragma
Strict mode was added in ES5, adds restrictions to make the code safer and more optimizeable by the JS engine.

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



## YDKJS 2: Scope and Closures
Scope - the set of rules for storing variables in some location, the ability to store values in variables and pull values is what gives a program state.


### Compiler Theory
JavaScript is a compiled language. The compilation involves Tokenizing / Lexing, Parsing and Code-Generation. The compilation doesn't happen in a build step, but rather in a microseconds before the code is run.

**Engine** - Responsible for start-to-finish compilation and execution of the JavaScript program.

**Compiler** - Handles the parsing and code-generation.

**Scope** - Collect and maintain a look-up list at all the declared identities and enforces a strict set of rules as how these are accessible to the currently executing code.

```javascript
var a = 2;
```

Two distinct actions are taken for variable assignment:

1. Compiler declares a variable if not previously declared in the current scope.
2. When executing the engine looks up the variable in scope and assigns to it if found.

The type of variable look-up the engine performs affects the outcome of the lookup.

**LHS** - LHS lookup is done when a variable appears on the left hand side of an assignment operation, the LHS is trying to find the variable container itself, so that it can assign. Finds the variable as a target.

**RHS** - RHS lookup is done when a variable appears on the right side of the assignment operation, a look-up of the value of some variable.

```javascript
// target   source
       a  =  2;
//    LHS    RHS
```

```javascript
console.log(a);
//         RHS lookup
```


### Nested Scope
Just as a block or function is nested inside another block or function, scopes are nested inside other scopes. If a variable cannot be found in the immediate scope the engine looks in the next outer containing scope, until the value is found or until the outmost (`global`) scope has been reached.

### Errors
If a RHS look-up fails to find a variable the `ReferenceError` would be thrown by the engine.

If a LHS look-up fails, the engine arrives at the global scope without finding the value, 2 things can happen:

1. If the program is running in `"strict mode"` the engine would throw `RefenceError`
2. If the program is not running in strict mode the global scope will create the variable and hand it back to the engine.

If a variable is found by a RHS look-up but you try to do something with its value that  is impossible, the engine throws a `TypeError`.

`ReferenceError` is scope resolution failure, `TypeError` implies that scope resolution was successful but there was an illegal / impossible action attempted against the result.


### Lexical Scope
Lexical scope is scope that defined at lexing time. It is based on where variables and blocks of scope are authored by the developer at write time. Thus it is mostly set in stone by the time the lexer processes the code.

Scope look-up stop once it finds the first match. The same identifier name can be specified at multiple layers of nested scope. This is called shadowing, the interior identified shadows the outer identifier.

Scope lookup always starts at the innermost scope being executed at the time, and works its way outward / upward until the first match and stops.

Global variables are automatically become properties of the global object - `window` in browsers. It is possible to reference a global variable not directly by though the global object, this overcomes shadowing.

```javascript
window.foo;
```

Not matter where a function is invoked from the lexical scope is only defined by where the function was declared.


### Cheating Lexical Scope
Cheating lexical scope leads to poorer performance.


#### eval()
`eval(..)` - runs a string of JavaScript code, when `eval` is used in strict-mode program, the code will execute in it's own lexical scope. The declarations made inside of the `eval()` do not modify the enclosing scope.

#### setTimeout() / setInterval()
 Similar to eval, `setTimeout(..)` and `setInverval(..)` can take a string for their first arguments, the contents of which are evaluated as the code of a dynamically generated function. This is old, legacy behavior that was deprecated.

#### new Function()
The `new Function(..)` function constructor takes a string of code in its last argument to turn it into dynamically generated function. It's slightly safer than `eval()` but it should still be avoided.

#### with
The `with` keyword a shorthand for making multiple property references against an object without repeating the object reference itself each time.

The `with` statement taken an object, one that has zero or more properties, and treats it as if is a wholly new lexical scope. Thus the object's properties are treated as lexically defined in that scope.

Even though a `with` block treats an object like a lexical scope, a normal `var` declaration inside that `with` block will not scope to that `with`, but instead to the containing function scope.

`with` is disabled in strict-mode.


### Functions as Scopes
Function scope encourages the idea that all variables belong to the function, and can be used and reused through the entirety of the function, including nested scopes. Taking an arbitrary section of code and wrapping it in a function declaration, hides the code.

**Principle of Least Privilege** - least authority or least exposure, In the design of software, such as API for module / object you should *expose* only what is minimally necessary and *hide* everything else.

Benefit of hiding also prevents name collision between two different identifiers with the same name but different intended uses. Collision results in unexpected overwriting of values.

To avoid polluting the global namespace in the aim for function scoping of code, use the IIFE - immediately invoked function expression, with an anonymous function.

```javascript
var a = 2;

(function foo() {
    var a = 3;
    console.log(a);  // 3
})

console.log(a);      // 2
```

The function statement starts with `(function..)` as opposed to just `function`, instead of treating the function as a standard declaration, the function is treated as a function expression. If `function` is the first thing in the statement, then it's a function declaration, otherwise it's a function expression.

`(function foo(){..})` as an expression means the identified `foo` is found only in the scope where the `...` indicates, not the outer scope. Hiding the name `foo` inside itself. It does not pollute the enclosing scope. IIFE's are popular as callbacks parameters.

Function expressions can be anonymous, but function declaration cannot omit the name, it would be a JS syntax error.

The best practice is to always name your functions expressions.

```javascript
setTimeout(function timeoutHandler() {..}, 100);
```


### Invoking Function Expressions Immediately
Wrapping a function in `()` creates a function expression executing that function by adding another `()` on the end. The name of this pattern is IIFE.

```javascript
(function foo(){..})()
```

Passing arguments to the IIFE is useful to name outer scope objects in the function:

```javascript
(function IIFE( global ){..})( window );
```

Pass in the `window` object reference, but name it as parameter `global` to have a clear stylistic delineation for global versus non-global references.

Sometimes it's useful to pass `undefined` to protect the code from an overridden value for `undefined`:

```javascript
undefined = true;   // very bad

(function IIFE( undefined ){
    var a;
    if (a == undefined) {
    console.log('undefined is safe');
    }
})();
```

### UMD Style IIFE
The function declaration is given a second, after the invocation of parameters to pass to it.

```javascript
(function IIFE(def) {
    def(window);
})(function def(global) {
    var a = 3;
    console.log(a);
    console.log(global.a);
});
```

The `def` function expression is defined in the second half of the snippet passed as a parameter to the IIFE defined in the first half.


### Block Scoping - ES6
Declaring variables a close as possible as local as possible to where they will be used. For example the `for` loop in JS `var i=0` is defined to the enclosing scope.

Block scoping is extending the principle of Least Privilege from hiding information to hiding information in block.

ES3 specified the variable declaration in `try` / `catch` clause to be block scoped to the catch block.


#### The let Keyword - ES6
ES6 introduced a new keyword `let` which sits alongside `var` as another way to declare variables. The `let` keyword attaches a variable declaration to the scope of whatever block (commonly a `{..}` pairs) it's contained in.

`let` implicitly hijacks any block's scope for its variable declaration.

```javascript
var foo = true;

if (foo){
    let bar = foo * 2;
    bar = something(bar);
    console.log(bar);
}

console.log(bar);  // ReferenceError
```

```javascript
for(let i = 0; i < 10; i++) {
    console.log(i);
}
```

We can create an arbitrary block for `let` to bind to by simply including a `{..}` pair anywhere a statement is valid. This creates an explicit block scope.

Declarations made with `let` will not hoist to the top of the entire scope of the block they appear in. They will not exist in the block until the declaration statement.


### The const Keyword - ES6
ES6 introduces `const`, which also creates a block scoped variable, but whose value is fixed (constant). Any attempt to change that value later will result in an error.

```javascript
var foo = true;

if (foo) {
    var   a = 2;
    const b = 3; // block scoped to the if
    a = 3;       // fine
    b = 4;       // error
}
console.log(a);  // 3
console.log(b);  // ReferenceError
```


### Hoisting
All declaration of variables and function are processed first, before any of the code is executed. `var a = 2;` is actually two statements in JavaScript:

1. The declaration during the compilation stage
2. The assignment is left in-place for the execution stage

Variable and function declarations are moved from where they appear in the flow of the code to the top of the code. This gives rise to the name hoisting.

Function declarations which include the implied value of it as an actual function is hoisted, such that the call on the function can execute.

Hoisting is per scope, variable in functions would be hoisted as well within the function scope.

Function declarations are hoisted, but function expressions are not.

```javascript
foo();  // not ReferenceError but TypeError
var foo = function bar() {..};
```

The variable identifier `foo` is hoisted and attached to the top of the enclosing scope. So `foo()` doesn't fails as a `ReferenceError`. But `foo()` has no value yet, so `foo()` is attempting to invoke the `undefined` value, which is a `TypeError` illegal operation.


#### Functions First
Both functions and variable declarations are hoisted. But if the same name is reused in the code, multiple duplicate declarations are ignored. Function declarations are hoisted before normal variables, while multiple `var` declarations are ignored, subsequent function declarations do override previous ones.

```javascript
foo();    // 3
function foo() { console.log(1); }
var foo = function() { console.log(2) };
function foo() { console.log(3); }
```

- Function declarations that appear inside normal blocks hoist to the enclosing scope, rather than being conditional as the code implies.
- Avoid declaring functions in blocks.
- Avoid multiple definitions within the same scope.


### Scope Closure
A closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

```javascript
function foo() {
    var a = 2;

    function bar() {
        console.log(a); // 2
    }
    bar();
}
foo();
```

- Function `bar()` has a closure over the scope of `foo()`.
- Because `bar()` is nested inside of `foo()`.

This closure example is not directly observable, we can't see the closure exercised.

```javascript
function foo() {
    var a = 2;

    function bar() {
        console.log(a);
    }
    return bar;
}
var baz = foo();
baz();  // 2 observed a closure
```

The function `bar()` is executed outsize of its declared lexical scope. The inner scope of `foo()` does not go away and does not get garbage collected, the reference to that scope is called a closure.

Any way that a function can be passed around as a value and invoked in other locations are examples of observing or exercising closures.

```javascript
function bar(fn) { fn(); } // closure
```

Whatever facility we use to transport an inner function outside (`return`, global variable) of its lexical scope, it will maintain a scope to where it was originally declared. Wherever the function is executed, that closure will be exercised.

```javascript
function wait(message){
    setTimeout(function timer() {
        console.log(message);
    }, 1000);
}
wait("Hello, closure!");
```

Functions that have their own respective lexical scopes.

```javascript
function setupBot(name, selector) {
    $(selector).click(function() {
        activator() {
        ...
        }
    });
}
setupBot('CB1', '#bot1');
setupBot('CB2', '#bot2');
```

Functions that have their own respective lexical scopes.


#### Loops and Closures

```javascript
for (var i = 1; i <= 5; i++) {
  setTimeout (function timer() {
    console.log(i);
  }, i * 1000);
}
// => 6 (5 times)
```

We are trying to imply that each iteration of the loop captures its own copy of `i`, at the time of the iteration. But all five functions are closed over the same global shared scope, which has only one `i` in it.

We need a new closured scope for each iteration of the loop, or pass j directly into the IIFE.

```javascript
for (var i = 1; i <= 5; i++) {
  (function() {
    var j = i;
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000)
  })();
}
```
ES6 block scope with closures:

```javascript
for (var i = 1; i <=5; i++) {
  let j = i; // block scope for closure
  setTimeout(function timer() {
    console.log(j);
  }, j * 1000);
}
```

Or even simpler, use the `let` in the `for` loop variable declaration. This will declare the variable for each iteration. And will initialize it with the value of the subsequent value from the previous iteration.

```javascript
for(let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}
```


### Module pattern

The most common way to implement the module pattern is called the revealing module.

```javascript
function CoolModule() {
  var something = 'cool';
  var another = [1,2,3];

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join('!'));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
}
```

```javascript
var foo = CoolModule();

foo.doSomething();   // cool
foo.doAnother();    // 1!2!3!
```

`CoolModule()` is just a function, but it has to be invoked for there to be a module instance created.

The `CoolModule()` function returns an object, it references the inner functions but not the inner data variables. The returned object is the public API for the inner module.

It is not required to return an object literal from the module. We could return an inner function directly. jQuery follows this pattern.

The `jQuery` and `$` identifiers are public API for the jQuery module, but they are just functions, which can have properties, since all functions are objects.

Two conditions for the module pattern to exercised:

1. There must be an outer enclosing function, it must be invoked at least once, each time returning a new module instance.
2. The enclosing function must return back at least the inner function, so that this inner function has a closure over the private scope, and can access or modify that private state.

- Modules are just functions so they can receive parameters.
- Naming the returned object as Public API increases clarity in the code. It also allows the modification of the module from the inside allowing to remove methods and properties, and changing their values.

```javascript
var foo = (function CoolModule(id) {
  function change() {
    // mark the public API
    publicAPI.identify = identify2;
  }

  function identify1() {
    console.log(id);
  }

  function identify2() {
    console.log(id.toUpperCase());
  }

  var publicAPI = {
    change: change,
    identify: identify1
  };

  return publicAPI;
})('foo module');
```

```javascript
foo.identify();    // foo module
foo.change();
foo.identify();    // FOO MODULE
```


### ES6 Modules

ES6 adds a first class support for the concept of modules. ES6 treats a file as a separate module. Each module can import other modules or specific API members, as well as export their own public API members.

ES6 module APIs are static, the API cannot change at runtime. The engine during the compilation checks that a reference to a member of in implied module's API actually exit. If it doesn't it throws an error.

ES6 modules do not have an inline format, they must be defined in separate files - one per module.

```javascript
// bar.js;
function hello(who) {
  return 'Let me introduce: ' + who;
}
export hello;
```

```javascript
// foo.js
// import only 'hello()' from bar module
import hello from "bar";
var hungry = 'hippo';

function awesome() {
  console.log(hello(hungry).toUpperCase());
}

export awesome;
```

```javascript
// baz.js
// import the entre foo and bar modules
module foo from 'foo';
module bar from 'bar';

console.log(bar.hello('rhino'));  // Let me introduce: rhino
foo.awesome();                    // LET ME INTRODUCE: HIPPO
```

- `import` - imports one or more members from a module's API into the current scope, each bound to a variable.
- `module` - imports an entire module API for the current scope and bound to a variable.
- `export` - exports an identifier (variable / function) to the public API for the current module.

These operators can be used as many times as necessary.

The contents of the module file are treated as if enclosed in a scope closure.



## YDKJS 3: this & Object Prototypes

The `this` keyword allows to implicitly pass along an object reference, leading to cleaner API design and easier reuse.

The more complex the usage pattern is, the messier it is to pass a context parameter rather than the `this` context.

`this` does not refer to the calling function's object like `self` in Rub. `this` does not refer to a function's lexical scope.

Cannot use a `this` reference to look up something in a lexical scope. There is no bridge between `this` and lexical scope.


### What is this

`this` is not an author-time binding but a runtime binding. It is contextual based on the conditions at the function's invocation.

The this binding has nothing to do with where a function is declared, but instead everything with the manner in which the function is called.


### Call-Site

Call-site - the location in code where a function is called (not where it is declared). It is in the invocation before the currently executing function.

It is derived from the call-stack, the stack at functions that have been called to get to the current moment in execution.


### Default this Binding

This rule comes from the most common use case of function calls - standalone function invocation. The default catch-all rule for the `this` binding when none of the others apply.

```javascript
function foo() {
  console.log(this.a);
}

var a = 2;
foo();  // 2
```

- global variables are global-object properties.
- `this.a` resolves to the global variable `a`.
- default binding for `this` to the global object.
- `foo()` is called with a plain undecorated function reference.
- if strict mode, the global object is not eligible for the default binding, the `this` will be set to undefined.
- the contents of `foo()` need to be strict for the default binding to be strict.


### Implicit this binding

When the call-site has a context object.

```javascript
function foo() {
  console.log(this.a);
}

var obj = {a:2, foo: foo};
obj.foo();  // 2
```

- The call-site uses `obj` context to reference the function, `obj` owns or contains the function reference at the time the function is called.
- `foo()` is called, it's preceded by an object reference to `obj`, when there is a context-object for a function reference the implicit binding rule says that it's context object should be used for the function's `this` binding.
- Because `obj` is the `this` fo the `foo()` call, `this.a` is synonymous with `obj.a`.
- Only the top level of an object property reference chain matters to the call-site.


### Losing Implicity

The `this` binding from an implicitly bound function can lose that binding, and fall back to the default binding of either the global object or `undefined`, depending on Strict Mode.

```javascript
function foo() {
  console.log(this.a);
}

var obj = {a: 2, foo: foo};
var bar = obj.foo;   // function alias
var a = 'global object';
bar();  // global object
```

The call-site is what matters, the call site `bar()` is a plain, undecorated call, thus the default binding applies.

```javascript
function doFoo(fn) {
  // fn is a reference to foo
  fn();
}

doFoo(obj.foo);  // global object
```

Parameters passing is an implicit assignment, since the function is passed, it's an implicit reference assignment.
