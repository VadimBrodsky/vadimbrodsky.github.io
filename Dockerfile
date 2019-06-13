FROM ruby:2.6-alpine

RUN apk --no-cache add \
  tzdata \
  nodejs \
  ruby-dev \
  build-base \
  git

RUN mkdir /site

WORKDIR /site

ADD Gemfile /site/Gemfile
ADD Gemfile.lock /site/Gemfile.lock

RUN bundle install

ADD . /site
