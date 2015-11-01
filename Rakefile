#!/usr/bin/env ruby
require 'html/proofer'

desc "build and run html-proofer"
task :test do
  sh "bundle exec jekyll build"
  HTML::Proofer.new("./build", {disable_external: true}).run
end

desc "clean"
task :clean do
  rm_rf 'build'
  puts 'Build folder removed'
end

desc "build the site"
task :build do
  sh "bundle exec jekyll build"
end

desc "Default task is to clean and build"
task :default => [ :clean, :build ]
  puts "Task complete"
end
