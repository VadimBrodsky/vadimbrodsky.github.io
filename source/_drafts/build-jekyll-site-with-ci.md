---
layout: post
title: Auto Build and Deploy your Jekyll Site with Travis CI
subhead: Taking your Jekyll site to the next level
---

Github is awesome, it [hosts your static sites](http://jekyllrb.com/docs/github-pages/) for free using [Github Pages](http://jekyllrb.com/docs/github-pages/). And if you are using [Jekyll](http://jekyllrb.com/) as your blogging platform Github can build and deploy the site for you after each Git commit.

The biggest limitation with Github Pages is that it uses the `--safe` Jekyll setting, meaning that you cannot use any Jekyll plugins.

The simplest way to avoid this limitation is to build the site locally and push it to a separate Git branch `gh-pages`. I have used this method myself for a while, but it adds extra repetitive overhead to the process.

Alas, the problem of building and deploying an application has been long solved by the various [continuous-integration](https://en.wikipedia.org/wiki/Continuous_integration) services. [Travis CI](https://travis-ci.org/) is a continuous-integration service that offers free testing and deployment for open source projects.

1. Register an account with Travis CI
2. Flick the repository switch on your [profile page](https://travis-ci.org/profile/)
3. Add a `.travis.yml` configuration file to your repository
4. Trigger the first build with `git push origin`


## References:

- [Continuous Integration](http://jekyllrb.com/docs/continuous-integration/)
- [S3 Deployment](http://docs.travis-ci.com/user/deployment/s3/)
- [Static Site with Jekyll, GitHub, TravisCI, and S3](https://brooksgarrett.com/blog/jekyll-github-travisci-s3/)
- [practical jekyll workflow](https://www.philipithomas.com/practical-jekyll/)
- [Deploying your Jekyll Site to S3 with Travis CI](Deploying your Jekyll Site to S3 with Travis CI)
- [Jekyll blog on Amazon S3 and CloudFront](http://vvv.tobiassjosten.net/development/jekyll-blog-on-amazon-s3-and-cloudfront/)
- [Deploy Jekyll Pages using Git and Travis CI](http://felixrieseberg.com/deploy-jekyll-pages-using-git-and-travis-ci/)
- [Deploying a Jekyll Site on GitHub, Travis CI, and Amazon S3](http://thinkshout.com/blog/2014/08/deployment-workflow-travis-jekyll-travis-s3/)
