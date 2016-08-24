###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

ASSETS = 'assets'
set :css_dir, "#{ASSETS}/css"
set :fonts_dir, "#{ASSETS}/fonts"
set :images_dir, "#{ASSETS}/images"
set :js_dir, "#{ASSETS}/js"
set :layouts_dir, '_layouts'

set :sass_assets_paths, ['bower_components']
set :sass_source_maps, true

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
  config[:host] = 'http://localhost:4567'
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  config[:host] = 'http://vadimbrodsky.com'
  activate :minify_css
  activate :directory_indexes
  activate :minify_javascript
  activate :asset_hash
  set :relative_links, true
  set :relative_assets, true
end
