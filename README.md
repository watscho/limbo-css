# limbo.css

## Install

With [NPM](http://npmjs.com):

```command
$ npm install limbo-css
```

With [Yarn](https://yarnpkg.com):

```command
$ yarn add limbo-css
```

## Usage

HTML:

```html
<link rel="stylesheet" href="/path/to/limbo-css/limbo.css" />
```

CSS:

```css
@import '/path/to/limbo-css/limbo.css';
```

Via PostCSS and [postcss-import](https://github.com/postcss/postcss-import):

```css
@import 'limbo-css';
```

Via webpack and [css-loader](https://github.com/webpack-contrib/css-loader):

```js
import 'limbo-css';
```

Via Less:

```less
@import '/path/to/limbo-css/less/limbo';
```

Via Sass:

```scss
@import '/path/to/limbo-css/sass/limbo';
```

## \*Changelog

Three changes have been made from the 2011 version, all approved by [Mr. Meyer](https://github.com/meyerweb):

- Added `main` to list of HTML 5 elements [(#7)](https://github.com/shannonmoeller/limbo-css/pull/7#issuecomment-233969617)
- Added rule to fix `hidden` attribute on HTML 5 elements [(#12)](https://github.com/shannonmoeller/limbo-css/issues/12#issuecomment-372821712)
- Added `menu` to list of lists [(#17)](https://github.com/shannonmoeller/limbo-css/pull/17#issuecomment-542340039)

----

Eric Meyer http://meyerweb.com/eric/tools/css/limbo/

License: none (public domain)
