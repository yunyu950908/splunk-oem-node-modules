Splunk PostCSS Loader
===============
A Webpack loader for compiling css files with an opinionated Splunk PostCSS stack, variables and
mixins.

Installing
-------
This package is included with the splunk-webpack tools.
```
npm install splunk-postcss-loader

    -- or --

yarn add splunk-postcss-loader
```

View the Splunk PostCSS Loader Docs app
------------
The docs are hosted publicly at http://go/splunk-postcss-loader-docs.

They can also be installed locally. The Splunk PostCSS Loader documentation app is shipped as a separate package:
```
npm install --dev splunk-ui-docs
```

Deploy the docs app:
```
./node_modules/.bin/deploy-splunk-postcss-loader-docs
```

The docs will be available at http://localhost:8012

Caution: The version of the docs app must be the same as the version of splunk-ui that you are using. To install a specific version of the app, specify it in the install command:
```
npm install --dev splunk-ui-docs@version
```

Using
-------
Example webpack configuration. Note, style-loader is a dependency and an optional debug params
can be passed to disable minification.
``` js
loaders: [
    ...
    {
        test: /\.p?css$/,
        loaders: [
            'style-loader',
            DEBUG ? 'splunk-postcss-loader?debug' : 'splunk-postcss-loader',
        ],
    },
    ...
],
```


Theme dependencies
-------
The loader will automatically generates Enterprise and Lite styles, and insert the correct css
into the document head based on splunkd partials at run time. If splunkd partials have not been
loaded, Enterprise styles will be displayed.

It's possible to control this by setting a global variable named `__splunk_ui_theme__` to `lite` or,
`enterprise`, but can be problematic. It must be set before any compiled modules are loaded,
such as in a synchronous script.


Plugins
------
#### import-mixins-and-variables
> A custom plugin to automatically import the variables and mixin files.

#### [postcss-import](https://github.com/postcss/postcss-import)
> Transfer @import rule by inlining content, e.g. @import 'normalize.css'

#### [postcss-mixins](https://github.com/postcss/postcss-mixins)
> Sass like mixins with @define-mixin and @mixin

#### [postcss-for](https://github.com/antyakushev/postcss-for)
> Simple numeric @for loops.

#### [postcss-url](https://github.com/postcss/postcss-url)
> Base 64 encodes urls, such as fonts and images ({ url: 'inline', maxSize: 100 }).

#### [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars)
> Sass-like $variables

#### [postcss-conditionals](https://github.com/andyjansson/postcss-conditionals)
> @if statements.

#### [postcss-custom-media](https://github.com/postcss/postcss-custom-media)
> W3C CSS Custom Media Queries, e.g. @custom-media --small-viewport (max-width: 30em);

#### [postcss-media-minmax](https://github.com/postcss/postcss-media-minmax)
> CSS4 Media Queries, e.g. @media screen and (width >= 500px) and (width <= 1200px) { }

#### [postcss-custom-selectors](https://github.com/postcss/postcss-custom-selectors)
> W3C CSS Custom Selectors, e.g. @custom-selector :--heading h1, h2, h3, h4, h5, h6;

#### [postcss-calc](https://github.com/postcss/postcss-calc)
> W3C calc() function, e.g. div { height: calc(100px - 2em); }

#### [postcss-color-function](https://github.com/postcss/postcss-color-function)
> W3C color() function, e.g. div { background: color(red alpha(90%)); }

#### [postcss-initial](https://github.com/maximkoretskiy/postcss-initial)
> Resets any css property back to it's default. Also supports all: initial.

#### [pleeease-filters](https://github.com/iamvdo/pleeease-filters)
> Convert CSS shorthand filters to SVG equivalent, e.g. .blur { filter: blur(4px); }

#### [postcss-selector-matches](https://github.com/postcss/postcss-selector-matches)
> W3C CSS Level4 :matches() pseudo class, e.g. p:matches(:first-child, .special) { }

#### [postcss-selector-not](https://github.com/postcss/postcss-selector-not)
> Transforms :not() W3C CSS Level 4 pseudo class to :not() CSS Level 3 selectors

#### [autoprefixer](https://github.com/postcss/autoprefixer)
> Add vendor prefixes to CSS rules using values from [caniuse.com](http://caniuse.com).

#### [postcss-nested](https://github.com/postcss/postcss-nested)
> Allows you to nest one style rule inside another with Sass syntax

#### [postcss-modules](https://github.com/css-modules/css-modules)
> A CSS Module is a CSS file in which all class names and animation names are
scoped locally by default.

#### [cssnano](https://github.com/ben-eb/cssnano)
> When the debug flag is not passed, the css will be minimized using cssnano.
