---
layout: note
title: Sass Indented Syntax
---

# SASS Indented Syntax
The whitespace sensitive version of SASS.

- Curly brackets `{}` are replaced with new indentation.
- Semicolons `;` are replaced with new lines.


## White Space Aware
Each statement in Sass, such as property declarations and selectors, must be placed on its own line.

```sass
#main
  color: blue
  font-size: 0.3em
```

Everything that would be within `{` and `}` after a statement must be on a new line and indented one level deeper than that statement.

```sass
a
	font:
	  weight: bold
	  family: serif
	&:hover
	  background-color: #ee
```

Selectors can contain newlines as long as they only appear after commas.

```sass
.users #userTab,
.posts #postTab
  width: 100px
  height: 30px
```


## Comments
Comments beginning with `/*` are preserved in the CSS output, although unlike SCSS they don’t require a closing `*/`. 

Comments beginning with `//` are removed entirely.

```sass
/* This comment will appear in the CSS output.
  This is nested beneath the comment,
  so it's part of it
```

```sass
// This comment will not appear in the CSS output.
  This is nested beneath the comment as well,
  so it also won't appear
a
```


## @import
The `@import` directive in Sass does not require quotes, although they may be used.

```sass
@import themes/dark
@import font.sass
```


## Mixin Directives
Sass supports shorthands for the `@mixin` and `@include` directives.

- Instead of writing `@mixin`, you can use the character `=`; 
- Instead of writing `@include`, you can use the character `+`. 

```sass
=large-text
  font:
	family: Arial
	size: 20px
	weight: bold
  color: #ff0000

h1
  +large-text
```