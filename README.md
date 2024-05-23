![BLear][]

[BLear]: assets/img/blear.png

# su24

The course website for CS 61BL Summer 2023, made with [Jekyll][],
[Type-on-Strap][], and few components from [Bootstrap][].

[Jekyll]: https://jekyllrb.com/
[Type-on-Strap]: https://github.com/Sylhare/Type-on-Strap
[Bootstrap]: https://getbootstrap.com/

Several custom components were written to support the features of this website,
most notably, a [Jekyll Liquid Template][] to easily embed the online Java
Visualizer ([java_visualizer.html][]) and generate Workbox service workers
([workbox-config.js][]).

[Jekyll Liquid Template]: https://jekyllrb.com/docs/templates/
[java_visualizer.html]: _includes/java_visualizer.html
[workbox-config.js]: workbox-config.js

The website is hosted on [GitHub Pages][], but you can also build and test the
website locally. Ensure that the repo is *published* in Settings -> GitHub Pages.

[GitHub Pages]: https://pages.github.com/

## Contributing

First, [install Jekyll][] and [install Workbox-CLI][]. You will probably also
need to install the required gems for this project, which are provided by the
[GitHub Pages Gem][].

```
bundle install
```

[install jekyll]: https://jekyllrb.com/docs/installation/
[GitHub Pages Gem]: https://github.com/github/pages-gem

### Jekyll

The repository should be fully configured to build and test the website through
the Makefile.

    make serve

`make serve` builds the website and serves it on localhost on the port
specified in the Makefile (default: 8000).

By default, Jekyll listens and automatically rebuilds and redeploys the website
each time you make a change to the files, though changes to the `config.yml`
require a process restart. Run `make serve` again to restart the process.

    make serve

View the `Makefile` for more `make` targets.


## Structure

The website uses several different web technologies, but it can be roughly
broken down into two different families of data.

### Static assets

Static assets include media and attachment file formats we're familiar with
like images (`.jpg`, `.png`) but also website assets that will be interpreted
by the browser when rendering the website on a client device.

The course website uses Jekyll, a static website generator. Jekyll generates
webpages (`.html`) and other static website assets from other formats like
Markdown (`.md`).  Markdown only specifies the main content of the page. Other
page elements like the navigation bar, header, and footer, as well as page
metadata, are not specified.

Jekyll generates the final webpage by combining the Markdown content with a
particular **layout**. These are specified in `_layouts`. Pages are based on
layouts, and layouts can also be based on other layouts. This hierarchy lets us
easily reuse code and make sure all webpages are consistent and up to date.

Aside from webpages, other static assets include files like stylesheets, used
to modify the appearance of the website, and Javascript, used to add dynamic
behavior and interactivity to the website.

### Underscore folders

The underscore folders are part of Jekyll's default [directory structure][].

[directory structure]: https://jekyllrb.com/docs/structure/

#### `_data`

Contains the YAML-formatted data for the course website, such as the course
calendar, section information, staff information, etc.

#### `_includes`

Contains reusable modules in Jekyll's templating language, [Liquid][].  These
components include necessary HTML metadata headers, the navigation bar, footer,
as well as reusable page content like the [java_visualizer.html][].

[Liquid]: http://shopify.github.io/liquid/

#### `_posts`

Contains the announcement posts for the website. It can be used for more than
just announcements, but we just use it for announcements as of now.

Posts need to be structured with dates and titles.

#### `_layouts`

Contains the (nested) layouts for the website. Layouts arrange bits of HTML
together with reusable `_includes`, and usually leave a space for page or post
content, though you may create layouts that aren't as dynamic like the front
page.

#### `_sass`

[Sass][] stylesheets which will be compiled into `main.css` in production.

[Sass]: https://sass-lang.com/

#### `_site`

This folder contains generated site data, and is excluded by `.gitignore` so
it's not a part of the repository but will be generated each time the website
is built with Jekyll.

### Assets

Website media and static assets are placed under the `assets` folder. Jekyll
will also build `main.css` into the `assets/css` directory as well.

Some assets, due to browser standards, are located in the root directory of the
website.


#### Favicons

The following favicons are included at the top-level to maximize compatbility.

- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `apple-touch-icon.png`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `favicon.ico`
- `mstille-150x150.png`
- `safari-pinned-tab.svg`

### Configuration

Some website options are configurable in `_config.yml`. Changes to this file
require restarting the current Jekyll listener process if it was already
running in the background.

### Redirect

To get the url cs61bl.org to redirect to the current year, clone https://github.com/cs61bl/cs61bl.github.io.git and update the url in index.html
