source "https://rubygems.org"

# Jekyll y tema base
gem "jekyll", "~> 4.3.2"
gem "minima", "~> 2.5"

# Plugins esenciales
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
end

# Windows no requiere zoneinfo files
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Para desarrollo local
gem "webrick", "~> 1.8"

# NOTA: wdm es opcional, si da problemas, comentar o eliminar
# gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]