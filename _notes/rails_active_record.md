---
layout: note
title: Rails 4 Active Record
---

# Active Record
Active Record is the Ruby object-relational mapping (ORM) library that handles the database abstraction and interaction for Rails.

- It maps tables to classes, table rows to object, table columns to object attributes.
- Active Record lets you model real-world things in your code.


## Using Active Record
Create a Ruby class that's named after the table that you want to map, extend the Active Record `Base` class.

```ruby
class Book < ActiveRecord::Base
end
```

```ruby
book = Book.new

book.title = "Beginning Rails 4"
book.published = "Apress"
book.published_at = "2013-10-21"

book.save
```

## Active Record Conventions
Active Record achieves its zero-configuration by the use of conventions:

- Class names are singluar; table names are plural.
- Tables contain an identity column named `id`.

If the table name contains underscores, the class name is assumed to be in Camel Case.

All tables are assumed to have a unique columnd named `id` that is acting as the table's primary key.
