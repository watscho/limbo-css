# limbo-css

Opinionated CSS reset with low specificity and npm-friendly entry points.

Limbo is not a strict browser-normalizer. It keeps the reset compact, removes common browser defaults, preserves app colors, leaves native focus outlines intact, and keeps the package easy to import from CSS, Sass, Less, bundlers, and CDNs.

## Install

```command
npm install limbo-css
```

```command
yarn add limbo-css
```

## Usage

### Bundlers

```js
import "limbo-css";
```

Works with Vite, Webpack, Rollup, Parcel, Next.js, Remix, React Router, Astro, SvelteKit, Vue, Angular, and any setup that allows global CSS imports.

### CSS and PostCSS

```css
@import "limbo-css";
```

```css
@import "limbo-css/limbo.css";
```

### Sass

```scss
@use "limbo-css/sass/limbo";
```

### Less

```less
@import "limbo-css/less/limbo";
```

### HTML

```html
<link rel="stylesheet" href="/node_modules/limbo-css/limbo.css" />
```

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/limbo-css@6/limbo.min.css" />
```

## Reset Choices

Limbo deliberately:

- uses `:where()` so app styles override the reset without specificity fights;
- applies `border-box` sizing globally;
- resets heading, bold, italic, list, link, table, media, and form defaults;
- keeps colors inherited instead of forcing black;
- keeps focus outlines available for accessibility;
- ships CSS, minified CSS, Sass, and Less entry points from one source file.

## License

MIT
