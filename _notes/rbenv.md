---
layout: default
title: rbenv
---

# Installing rbenv
- Use rbenv to manage different versions of Ruby.
- Use Homebrew to install rbenv.

```bash
brew update
brew install rbenv
brew install ruby-build
```

## Modify the Bash Profile

```
eval "$(rbenv init -)"
```


# Installing a New Version of Ruby
- Use [ruby-lang.org](https://www.ruby-lang.org/en/) to find out the latest version of Ruby.
- Usually installs Ruby versions to: `~/.rbenv/versions/2.1.2`

```bash
rbenv install 2.1.2
```


## Rehash
- Run this command every time new version of Ruby or Gems are installed.
- This updates bash to have access to run the new commands.

```bash
rbenv rehash
```

# Changing the Ruby Version
- Can change the `global`, `local` or `shell` version of Ruby.

```bash
rbenv global 2.1.2
ruby -v
```


# Listing Ruby Versions
- To see what is installed.

```bash
rbenv versions
```