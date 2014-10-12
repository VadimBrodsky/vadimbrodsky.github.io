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

If the table name contains underscores, the class name is assumed to be in Camel Case. All tables are assumed to have a unique columnd named `id` that is acting as the table's primary key.

```ruby
Article.column_names
#=> ["id", "title", "body", "published_at", "created_at", "updated_at", "excerpt", "location"]
```

```ruby
Article
#=> Article(id: integer, title: string, body: text, published_at: datetime, created_at: datetime, updated_at: datetime, excerpt: string, location: string)
```

```ruby
Article.methods.size
#=> 549
```

```ruby
Article.count
#=> 5
```

## Active Record: CRUD

### Create
Creating new objects that will add new records to the database.

```ruby
article = Article.new
#=> #<Article id: nil, title: nil, body: nil, published_at: nil, created_at: nil, updated_at: nil, excerpt: nil, location: nil>
```

To check the attributes of the object use `attributes` method returns a hash. To see if the object was not saved yet use the `new_record?` method.

```ruby
article.new_record?
#=> true
article.attributes
#=> {"body"=>nil, "created_at"=>nil, "excerpt"=>nil, "location"=>nil, "published_at"=>nil, "title"=>nil, "updated_at"=>nil}
article
#=> #<Article id: nil, title: nil, body: nil, published_at: nil, created_at: nil, updated_at: nil, excerpt: nil, location: nil>
```

To add data to the object use the attribute accessor methods.

```ruby
article.title = 'RailsConf'
article.body = 'RailsConf is the official gathering for Rails developers..'
article.published_at = '2013-04-13'
```

To save the object in the database use the `save` method. It returns `true` for success and `false` for failure.

```ruby
article.save
```

The above can be done in fewer lines:

```ruby
article = Article.new(:title => "Introduction to Active Record", :body => "Active Record is Rails...", :published_at => Date.today)
article.save
```

Objects can be created in one step, instead of returning `true` or `false` it returns an `Article` object.

```ruby
Article.create(:title => "RobyConf 2013", :body => "The annual...", :published_at => '2013-04-13')
```


### Read
Every model class understand the class `find` method. The `find` method can be called in 4 ways:

- `find(:id)`: finds a single record by its unique `id` or multiple records if `:id` is an attay of ids.
- `all`: finds all records in the table.
- `first`: finds the first record.
- `last`: finds the last record.

```ruby
article = Article.find(3)
#=> #<Article id: 3 ...>
```

Active Record raises a `RecordNotFound` exception when it cannot find any records with the provided `id`.

```ruby
begin
  Article.find(1037)
rescue ActiveRecord::RecordNotFound
  puts "We couldn't find that record"
end
```

To get the first record from the database by using the `first` method. This always returns exactly one item, unless the table is empty it will return `nil`. It's not necessarily the first record  in the table, it depends on the database software and the default order in which the records are retireived.

```ruby
Article.first
#=> #<Article id: 1 ...>
```

The `last` method works exactly the same as `first`, but records are retireived in the inverse order of `first`.

```ruby
Article.last
#=> #<Article id: 5 ...>
```

To retreive all of the records from the database use the `all` method.

```ruby
articles = Article.all
#=> [#<Article id: 1, ...> #<Article id: 2, ...> ...]

articles.first.title
```

```ruby
articles = Article.order("published_at DESC")
```

To find a record based on other criteria, conditions that correspond to the SQL `WHERE` clause.

```ruby
Article.where(:title => 'RailsConf').first
Article.where(:title => 'RailsConf').all
```


### Update
Updaing a record is similar to creating a record, the attributes can be updates one at a time and then save the result or update all attrbitues in one action.

When the record is updates, an SQL `UPDATE` statement is constructed behind the scenes.

```ruby
article = Article.first
article.title = "Rails 4.1 Book"
article.published_at = Time.now
article.save
#=> true
```

```ruby
article = Article.first
article.update_attributes(:title => "RailsConf2014", :published_at => 1.day.ago)
#=> true
```


## Delete
There are two styles of row deletion: `destroy` and `delete`.  The `destroy` style works on the instance. The `delete` style operates on the class.

Firstly you need to find the record to destroy it. After the `destroy` method the object is transitioning from being _hydrated_ (all attributes retained) to _frozen_ (can't modify attributes).

```ruby
article = Article.last
article.destroy
```

```ruby
Article.last.destroy
Article.destroy(1)
```

The `delete` family of methods differs from `destroy` in that they don't instantiate or perform callbacks on the object they are deleting. They remove the row immediately from the database.

```ruby
Article.delete(4)
Article.dete([5, 6])
```

Deleting with conditions allows to delete all rows that match a condition.

```ruby
Article.delete_all("published_at" < '2011-01-01')
```

The method `delete_all` without arguments will delete all of the records in the table.

```ruby
Article.delete_all
```


## Model Errors
A helper family of methods that ask the model associated with the form for its list of errors (error collection). Usually errors occur on the `save` method if there are data validation problems.

```ruby
article.errors.any?
article.save
article.errors.size
article.errors.full_mesages
article.errors.messages(:title)
```

```ruby
article.valid?
```
