---
layout: post
status: publish
published: true
title: The DOM is Too Slow - Achieving 60fps on the mobile web
author:
  display_name: Vadim
  login: vadim
  email: vadim@vadimbrodsky.com
  url: ''
author_login: vadim
author_email: vadim@vadimbrodsky.com
wordpress_id: 102
wordpress_url: http://www.vadimbrodsky.com/?p=102
date: '2015-02-11 09:26:51 -0500'
date_gmt: '2015-02-11 14:26:51 -0500'
categories:
- JavaScript
- UX
- Web Design
- Post
tags:
- web development
- react
- canvas
---
<blockquote>
  The DOM is too slow.<br />
</blockquote></p>
<p>via -- <a href='http://engineering.flipboard.com/2015/02/mobile-web/#PracticalApplications'>60fps on the mobile web &mdash; Flipboard Engineering</a>.</p>
<p>An interesting take by the Flipboard team on bringing mobile web rendering performance to native application level. While the technical achievement of the <a href="https://github.com/Flipboard/react-canvas">react-canvas</a> is impressive it does come with many caveats especially in accessibility and SEO in mind.</p>
<p>This reminds me of the tradeoffs of using Flash based websites back in the day, improving interactivity and design but hurting accessibility of basic features such as copying text or using screen readers. But I can see great potential of using something like <a href="https://github.com/Flipboard/react-canvas">react-canvas</a> with <a href="http://cordova.apache.org/">Cordova</a> or <a href="http://phonegap.com/">PhoneGap</a> to create mobile apps using web technologies.</p>
<p>I hope that this will steer the Mobile Browser makers to implement hardware accelerated DOM rendering on mobile.</p>
