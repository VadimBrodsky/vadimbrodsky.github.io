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

desc "serve site with drafts"
task :sd do
  sh "bundle exec jekyll s --draft"
end

desc "serve site"
task :s do
  sh "bundle exec jekyll s"
end

desc "Default task is to clean and build"
task :default => [ :clean, :test ] do
  puts "Task complete"
end
