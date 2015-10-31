---
layout: note
title: Bunder
---

# Bunlder
- Used to specify gem versions and dependencies for Ruby projects.

## Gemfile
- Configuration information on which gems to load.
- Human editable version numbers.
- Bundler find all of the dependencies.


## Gemfile.lock
- Created by bundler, used to list all of the required gems and their dependencies.
- Not editable.


## Bundle Install
- The command to install the required gems.
- Generates the `Gemfile.lock` file.

```bash
bundle install
```


## Caveats
- Sometimes some `rake` commands fail, because it needs to run in the bundle context.
- Use the `bundle exec` before the command.

```bash
rake db:migrate
bundle exec rake db:migrate
```