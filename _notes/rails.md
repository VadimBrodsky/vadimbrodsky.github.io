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