---
layout: post
title: Update Rbenv Ruby Version Definitions
subhead: Get the Rbenv to install the latest version of Ruby
date: '2015-09-04 11:02:04 -0400'
categories:
- Ruby
- Post
tags:
- osx
- ruby
- rbenv
- system setup
---
<p>I was starting a new project and was looking to update my Ruby version to latest version that is supported on <a href="https://devcenter.heroku.com/articles/ruby-support#ruby-versions">Heroku</a>, but alas the most recent version of Ruby in my <code>rbenv</code> was:</p>
<pre><code class="bash">rbenv install --list<br />
=> 2.2.0-dev<br />
</code></pre></p>
<h2>To update the Ruby version definitions:</h2></p>
<ol>
<li><code>brew upgrade</code></li>
<li><code>brew upgrade ruby-build</code></li><br />
</ol></p>
<h2>Installing Ruby 2.2.2</h2></p>
<pre><code class="bash">rbenv install 2.2.2<br />
rbenv global 2.2.2  # or rbenv local 2.2.2<br />
rbenv rehash<br />
</code></pre></p>
<p>All done!</p>
