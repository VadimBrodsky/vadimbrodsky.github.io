---
layout: default
title: Rails 4
---

# Ruby on Rails

## Installing Rails
1. Install Bundler gem first.
2. Rehash the rbenv environment to load bundler.
3. Install the Rails gem.
  - Optionally install without docs: `--no-ri --no-rdoc`
  - Install a specific version: `--version 4.0.0`
4. Install the MySQL gem.

```bash
gem install bundler
rbenv rehash
bundle -v
gem install rails
rbenv rehash
rails -v
gem install mysql2
```


## Creating Rails Project
- Navigate to the desired directory.
- Run the `rails new project_name` command.
- Can specify the database requirements with the `-d` flag.

```bash
rails new hello_app
rails new simple_cms -d mysql
```


## Accessing a Project
- Start the web server: `rails server` or `rails s`.
- Visit the `localhost:3000` site in the browser.


## Generate
- Rails `generate` command helps to create many things.
- To list all of the thing that rails can generate, run `rails generate`
- `rails generate GENERATOR [args] [options]`

```bash
rails generate
rails generate controller demo index
```


## Rails File Structure
- `app/` Most of the app code lives here
- `app/assets` application assets, processed by the Rails asset pipeline
- `app/assets/images`
- `app/assets/javascripts`
- `app/assets/stylesheets`
- `app/controllers` the controllers
- `app/controllers/concerns` common code that shared between controllers
- `app/helpers` code that helps with views
- `app/mailers` sending emails
- `app/models` the models
- `app/models/concerns` common code that shared between models
- `app/views` the views
- `bin/` stores the Rails commands and other binary executables
- `config/` Configuration files for the application
- `config/environments` settings for different environments
- `config/initializers` differing this that launch when app launches
- `config/locales` translation and internationalization
- `db/` code related to managing the database and db migrations
- `doc/` documentation for the app
- `lib/` storing libraries of code
- `lib/assets` different assets from library modules
- `lib/tasks`  rake tasks for the library modules
- `log/` application log files
- `public/` data accessible to the public, such as html error pages
- `test/` application tests
- `tmp/` temporary files that Rails generates
- `vendor/` third party plugin code that is not in gems
- `README.rdoc` A brief description of the application
- `Rakefile` Utility tasks available via the `rake` command
- `Gemfile` Gem requirements for the app
- `Gemfile.lock` A list of gems and their dependencies
- `config.ru` A configuration file for Rack Middleware
- `.gitignore` Patterns for files that should be ignored by Git.


## Rails Server Request Handling
- Browser => Web Server => Public => Rails Framework
- If the request is satisfied by the public static file the Rails framework would not be accessed.


## Rails Routes
- Rails Routing => Controller => Model => Database => Controller => View
- Routes are processed top-top-bottom in the `routes.rb` file.
- Basic route types:
  - Simple route (match route)
  - Default route
  - Root route


### Simple, Match Route
- Matching the string and sends it to the controller and action via get.
- Not very flexible.

```ruby
get "demo/index"
```

```ruby
match "demo/index",
	:to => "demo#index",
	:via => :get
```


### Default Route
- More generic routing rule.
- Uses a Regex match function.
- Can also pass a format for file type (json, xml etc.)

```ruby
:controller/:action/:id
match ':controller(/:action(/:id))', :via => :get
```

```ruby
match ':controller(/:action(/:id(.:format)))', ;via => :get
```


### Root Route
- When you go to the root of the application and have nothing to match.
- Homepage of the application.

```ruby
root :to => "demo#index"
root "demo#index"
```