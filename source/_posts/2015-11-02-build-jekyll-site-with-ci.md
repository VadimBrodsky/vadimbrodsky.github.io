---
layout: post
title: Build and Deploy your Jekyll Site with Travis CI
date: 2015-11-02T07:15:03-05:00
subhead: Taking your Jekyll site to the next level
---

## Github is Awesome

Github is awesome, it [hosts your static sites](http://jekyllrb.com/docs/github-pages/) for free using [Github Pages](http://jekyllrb.com/docs/github-pages/). And if you are using [Jekyll](http://jekyllrb.com/) as your blogging platform Github can build and deploy the site for you after each Git commit.

The biggest limitation with Github Pages is that it uses the `--safe` Jekyll setting, meaning that you cannot use any Jekyll plugins.

The simplest way to avoid this limitation is to build the site locally and push it to a separate Git branch `gh-pages`. I have used this method myself for a while, but it adds extra repetitive overhead to the process.

## Travis CI to the Rescue

Alas, the problem of building and deploying an application has been long solved by the various [continuous-integration](https://en.wikipedia.org/wiki/Continuous_integration) services. [Travis CI](https://travis-ci.org/) is a continuous-integration service that offers free testing and deployment for open source projects.

1. Register an account with Travis CI
2. Flick the repository switch on your [profile page](https://travis-ci.org/profile/)
3. Add a `.travis.yml` configuration file to your repository
4. Trigger the first build with `git push origin`

## Configuring Travis

The challenge here is to setup the right steps in the `.travis.yml` file, this file tells Travis how to set up the system, which tasks to run and what to do once it passes or fails.

The intricacies of the Travis CI system are well beyond this post a good starting point is the [documentation](http://docs.travis-ci.com/user/getting-started/).

Here is an abbreviated version of my current setup, it does the following:

```yaml
language: ruby
rvm:
- 2.2
env:
  global:
  - NOKOGIRI_USE_SYSTEM_LIBRARIES=true
branches:
  only:
  - master
install: bundle install
script: bundle exec rake test
deploy:
  provider: s3
  access_key_id:
  secret_access_key:
  bucket:	www.vadimbrodsky.com
  endpoint: www.vadimbrodsky.com.s3-website-us-east-1.amazonaws.com
  region: us-east-1
  local-dir: build
  skip_cleanup: true
  acl: public_read
```

- Sets the environment with **Ruby** and **RVM** to get **Ruby 2.2**
- Uses the system version of **Nokogiri** to speedup setup time
- Watches only the **master** branch for changes
- Runs **Bundler** to install the project dependencies
- Runs the **Rake** `test` script to build the Jekyll site and to test it with **HTML-Proofer**
- Deploys the built site to **Amazon S3**

This article is a brief introduction setting up a CI system to build a Jekyll static site, while basic it shows the benefits and flexibility of using a CI as a part of my workflow.

### References:

- [Continuous Integration](http://jekyllrb.com/docs/continuous-integration/)
- [S3 Deployment](http://docs.travis-ci.com/user/deployment/s3/)
- [Static Site with Jekyll, GitHub, TravisCI, and S3](https://brooksgarrett.com/blog/jekyll-github-travisci-s3/)
- [practical jekyll workflow](https://www.philipithomas.com/practical-jekyll/)
- [Deploying your Jekyll Site to S3 with Travis CI](http://www.paperplanes.de/2013/8/13/deploying-your-jekyll-blog-to-s3-with-travis-ci.html)
- [Jekyll blog on Amazon S3 and CloudFront](http://vvv.tobiassjosten.net/development/jekyll-blog-on-amazon-s3-and-cloudfront/)
- [Deploy Jekyll Pages using Git and Travis CI](http://felixrieseberg.com/deploy-jekyll-pages-using-git-and-travis-ci/)
- [Deploying a Jekyll Site on GitHub, Travis CI, and Amazon S3](http://thinkshout.com/blog/2014/08/deployment-workflow-travis-jekyll-travis-s3/)
