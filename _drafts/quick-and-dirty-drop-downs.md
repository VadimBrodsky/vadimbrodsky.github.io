---
layout: post
title: 'Quick and Dirty Way to Create a Select Drop Down Navigation'
---

```html
<form action="../">
<select onchange="window.open(this.options[this.selectedIndex].value,'_top')">
    <option value="">Choose a destination...</option>
    <option value="http://www.yahoo.com/">YAHOO</option>
    <option value="http://www.google.com/">GOOGLE</option>
    <option value="http://www.altavista.com/">ALTAVISTA</option>
    <option value="http://www.amazon.com/">AMAZON</option>
    <option value="http://artlung.com/">ARTLUNG</option>
</select>
</form>
```


```html
<form action="../">
<select name="mySelectbox">
    <option value="">Choose a destination...</option>
    <option value="http://www.yahoo.com/">YAHOO</option>
    <option value="http://www.google.com/">GOOGLE</option>
    <option value="http://www.altavista.com/">ALTAVISTA</option>
    <option value="http://www.amazon.com/">AMAZON</option>
    <option value="http://artlung.com/">ARTLUNG</option>
</select>
<input type="button" onclick="window.open(this.form.mySelectbox.options[this.form.mySelectbox.selectedIndex].value,'_top')" value="Go">
</form>
```