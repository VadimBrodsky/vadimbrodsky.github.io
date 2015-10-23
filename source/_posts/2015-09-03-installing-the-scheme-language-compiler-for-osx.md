---
layout: post
status: publish
published: true
title: Installing the Scheme Language Compiler on OSX
author:
  display_name: Vadim
  login: vadim
  email: vadim@vadimbrodsky.com
  url: ''
author_login: vadim
author_email: vadim@vadimbrodsky.com
wordpress_id: 181
wordpress_url: http://www.vadimbrodsky.com/?p=181
date: '2015-09-03 10:54:48 -0400'
date_gmt: '2015-09-03 14:54:48 -0400'
categories:
- Scheme
- Post
tags:
- osx
- scheme
---
<p>When you go looking for a Scheme compiler / interpreter it's easy to get overwhelmed, there are over <a href="http://community.schemewiki.org/?scheme-faq-standards#implementations">70 Scheme implementations on the Scheme Wiki</a>. Which one do you pick?</p>
<p>The answer is <a href="http://www.call-cc.org/">Chicken Scheme</a>, as <a href="http://giantrobots.fm/100">passionately endorsed</a> by <a href="https://twitter.com/tenderlove">Aaron Patterson</a> is a practical and portable scheme system that is actively maintained and compiles down to C.</p>
<h2>The simplest way to install a Scheme compiler / interpreter on a Mac OSX</h2></p>
<ol>
<li>Install <a href="http://brew.sh/">Homebrew</a></li>
<li>Type in the Terminal: <code>brew install chicken</code></li>
<li>Profit!</li><br />
</ol></p>
<h2>Hello World Example</h2></p>
<p>Type in the hello world program:</p>
<pre><code class="scheme">;;; hello-world.scm<br />
(print "Hello World, From Scheme")<br />
</code></pre></p>
<p>Run it using the Scheme interpreter</p>
<pre><code class="bash">csi -s hello-world.scm<br />
</code></pre></p>
<p>Compile it to an executable binary</p>
<pre><code class="bash">csc hello-world.scm<br />
</code></pre></p>
<p>Running the executable binary</p>
<pre><code class="bash">./hello-world<br />
</code></pre></p>
<h2>Bonus</h2></p>
<p>There is a nice <a href="https://atom.io/packages/language-scheme">Scheme language package</a> for the Atom Editor.</p>
