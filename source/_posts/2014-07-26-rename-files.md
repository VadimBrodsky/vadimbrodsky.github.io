---
layout: post
title: Rename File Extension of All Files in a Folder
categories: snippet
---

This was very useful when I needed to rename the file extension of over 150 files.

```bash
for i in *.txt; do
    mv "$i" "${i%.*}.xml"
done
```

via -- [Superuser](http://superuser.com/a/409812)