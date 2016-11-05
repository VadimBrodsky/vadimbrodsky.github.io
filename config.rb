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
# set :fonts_dir, "#{ASSETS}/fonts"
set :images_dir, "#{ASSETS}/images"
set :js_dir, "#{ASSETS}/js"
set :layouts_dir, '_layouts'

set :sass_assets_paths, ['bower_components']
set :sass_source_maps, true

activate :blog do |blog|
  blog.sources = "blog/{year}-{month}-{day}-{title}.html"
  blog.layout = 'article'
end

# Reload the browser automatically whenever files change
configure :development do
  config[:host] = 'http://localhost:4567'

  # activate :livereload do |lr|
  #   lr.no_swf = true
  # end

  compass_config do |config|
    # config.sass_options = {:debug_info => true}
    config.output_style = :compressed
  end
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
helpers do
  def amp_style(name)
    <<-HEREDOC
      <style amp-custom>
      #{sitemap.resources.select { |p| p.source_file.include?(name) }.first.render}
      </style>
    HEREDOC
  end

  def amp_img(file_name, options = {})
    image_path = "#{config[:host]}/assets/images/#{file_name}"
    size = FastImage.size("source/assets/images/#{file_name}")
    alt_text = options[:alt] || image_path.gsub(/\.[\w]*/, '')
    "<amp-img src='#{image_path}' alt='#{alt_text}' width='#{size[0]}' height='#{size[1]}'></amp-img>"
  end
end

# Build-specific configuration
configure :build do
  config[:host] = 'https://vadimbrodsky.com'
  activate :minify_css
  activate :minify_javascript
  # activate :gzip
  activate :directory_indexes
  activate :asset_hash do |opts|
    opts.ignore = ['assets/favicons/*', 'assets/fonts/*']
  end
  set :relative_links, true
  set :relative_assets, true
end
