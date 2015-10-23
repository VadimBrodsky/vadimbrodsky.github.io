---
layout: post
title: 'Responsive design quirk in IE10'
category: development
tags: ['ie10', 'quirk', 'responsive', 'windows 8']
---

When a website is snapped in the metro interface on Windows 8, IE10 ignores the meta viewport tag for any viewport smaller than 400 pixels in width. That means that your responsive layouts for smaller screens won’t trigger in snapped mode and your site will be scaled instead.

Tim Kadlec has proposed a [solution](http://timkadlec.com/2012/10/ie10-snap-mode-and-responsive-design/)

via -- [webmonkey.com](http://www.webmonkey.com/2012/10/ie-10-is-coming/)