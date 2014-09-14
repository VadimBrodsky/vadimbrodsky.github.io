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
- `app` directory: most of the app code lives here
  - `assets`: processed by the Rails asset pipeline
     - `images`
     - `javascripts`
     - `stylesheets`
  - `contollers`: app controllers
     - `concerns`: common code that shared between controllers
  - `helpers`: code that helps with views
  - `mailers`: sending emails
  - `models`: app models
     - `concerns`: common code that shared between models
  - `views`: app views
- `bin`: stores the Rails commands.
- `config`: configuration files for the application
  - `environments`: settings for different environments
  - `initializers`: differing this that launch when app launches
  - `locals`: translation and internationalization
- `db`: code related to managing the database and migrations
- `lib`: storing libraries of code
  - `assets`: different assets from libraries
  - `tasks`: rake tasks
- `log`: log files
- `public`: html files and other public files
- `test`: test code for the application
- `tmp`: Rails stores temporary files
- `vendor`: third party code that is not in gems


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