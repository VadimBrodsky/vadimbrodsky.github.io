#!/usr/bin/env ruby
require 'html/proofer'

task :test do
  sh "bundle exec jekyll build"
  HTML::Proofer.new("./build", {disable_external: true}).run
end
