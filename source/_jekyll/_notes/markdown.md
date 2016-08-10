---
layout: note
title: Markdown
---

## Headers

	# H1
	## H2
	### H3
	#### H4
	##### H5
	###### H6

	H1
	===

	H2
	---


### Heading Three

#### Heading Four

###### Heading Six


## Emphasis and Inline Formatting

	Emphasis, aka italics, with *asterisks* or _underscores_.

	Strong emphasis, aka bold, with **asterisks** or __underscores__.

	Combined emphasis with **asterisks and _underscores_**.

	Strikethrough uses two tildes. ~~Scratch this.~~


Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~


## Lists

	1. First ordered list item
	2. Another item
	⋅⋅* Unordered sub-list.
	1. Actual numbers don't matter, just that it's a number
	⋅⋅1. Ordered sub-list
	4. And another item.

	⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

	⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
	⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
	⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

	* Unordered list can use asterisks
	- Or minuses
	+ Or pluses

1. First ordered list item
2. Another item
  * Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.

    You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

    To have a line break without a paragraph, you will need to use two trailing spaces.  
    Note that this line is separate, but within the same paragraph.⋅⋅
    (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses


## Links

	[I'm an inline-style link](https://www.google.com)

	[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

	[I'm a reference-style link][Arbitrary case-insensitive reference text]

	[I'm a relative reference to a repository file](../blob/master/LICENSE)

	[You can use numbers for reference-style link definitions][1]

	Or leave it empty and use the [link text itself]

	Some text to show that the reference links can follow later.

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../index.html)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself]

Some text to show that the reference links can follow later.


## Images

	![](http://placekitten.com/g/1200/300 "A kitten")

	![](http://placekitten.com/g/550/450 "First of two kittens")
	![](http://placekitten.com/g/550/450 "Second of two kittens")

	![](http://placekitten.com/g/400/350)
	![](http://placekitten.com/g/400/350)
	![](http://placekitten.com/g/400/350)


![A Kitten](http://placekitten.com/g/1200/300 "A kitten")

![First of two kittens](http://placekitten.com/g/550/450 "First of two kittens")
![Second of two kittens](http://placekitten.com/g/550/450 "Second of two kittens")

![kitten](http://placekitten.com/g/400/350)
![kitten](http://placekitten.com/g/400/350)
![kitten](http://placekitten.com/g/400/350)


## Images as Links

	[![ImageCaption](path/to/image.png)](http://www.linktarget.com)

	Example:
	[![A kitten](http://placekitten.com/g/400/400)](http://www.placekitten.com)

[![ImageCaption](http://placekitten.com/g/400/400)](http://www.linktarget.com)

Example:
[![A kitten](http://placekitten.com/g/400/400)](http://www.placekitten.com)



## Code and Syntax Highlighting

### Inline

	Inline `code` has `back-ticks around` it.

Inline `code` has `back-ticks around` it.

### Block

	```javascript
	var hello = function () {
		// say hello
		alert('Hello world!');
	}
	```

```javascript
var hello = function () {
	// say hello
	alert('Hello world!');
}
```


## Tables

	| Tables        | Are           | Cool  |
	| ------------- |:-------------:| -----:|
	| col 3 is      | right-aligned | $1600 |
	| col 2 is      | centered      |   $12 |
	| zebra stripes | are neat      |    $1 |


| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Blockquotes

	> Blockquotes are very handy in email to emulate reply text.
	> This line is part of the same quote.

	Quote break.

	> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.


> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.


## Horizontal Rules

	Three or more:

	---

	Hyphens

	***

	Asterisks

	___

	Underscores


Three or more:

---

Hyphens

***

Asterisks

___

Underscores



## Line Breaks

	Here's a line for us to start with.

	This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

	This line is also a separate paragraph, but...
	This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.


## Inline HTML

	<dl>
	  <dt>Definition list</dt>
	  <dd>Is something people use sometimes.</dd>

	  <dt>Markdown in HTML</dt>
	  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
	</dl>

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
