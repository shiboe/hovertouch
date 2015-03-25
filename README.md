# hovertouch
Unify :hover and touch events into a single styleable class to provide instant visual responsiveness to both touch and mouse driven devices uniformly.

## Usage
Include hovertouch.js on your page, and call `hovertouch.init()`. After that, any user touch or mouseover will add class: `.hovertouch` to an appropriate anchor link, button, or input. Use this instead of janky :hover to capture the imaginations of mobile users and desktop users alike with your fancy pants active styles!

## Example
hovertouch comes in two flavors: [module](https://github.com/ForbesLindesay/browserify-middleware) and global...

### Javascript
You will run the initializer after requiring the module...
```
<script>
  var hovertouch = require('./hovertouch');
  hovertouch.init();
</script>
```

or if you want to go the global route...
```
<script src='/js/hovertouch.js'></script>
hovertouch.init();
```

### CSS
Then add some CSS to fulfill your destiny...
```
<style>
  a.hovertouch { color:rainbow; }
</style>
```

Some additional sugar if you're going for the *simulated app* feel...
```
<style>
/* removes the default fuzzy blue outline when focused on a form element */
input:focus,
textarea:focus,
button:focus { outline: none; }

/* removes the default grey highlight when tapping on mobile */
a { -webkit-tap-highlight-color: rgba(0,0,0,0); -webkit-touch-callout: none; }
</style>
```

## Options
Provide an options object to `.init(options)` with the following methods as desired:
```
hovertouch.init({
  elements: ['TEXTAREA'],
  addElements: ['SELECT']
});
```

| option | expected type | description |
|--------|---------------|-------------|
| *elements* | array of strings | This option will **replace** the default touchable element tagNames `['A', 'BUTTON', 'INPUT']` with those provided |
| *addElements* | array of strings | This option will **add** the provided tagNames to teh default touchable element tagNames |

## Dependencies
This module requires support for element.classList, array.map, and array.indexOf specified in ES5, which means IE 9 and below are not supported, because *IE*. To fulfill this dependency on legacy browsers (IE), you should load appropriate polyfills prior to hovertouch. I recommend [polyfill.io](https://cdn.polyfill.io/v1/docs/).

## FAQ

#### When will testing be added?
As soon as I have time (apologies). I really like testing now, honest!

#### Why does hovertouch rely on polyfills? 
I'm trying a new approach with this, in that, if every widget/plugin/module rolls it's own polyfill, we are at best bloating our code.

#### Where's the minified version?
We live in the future. As a resident of said future, it is your techno obligation to be compiling and minifying your scripts in an appropriate fashion. Providing a minified singleton should be considered *incentive towards that end*, not *me being lazy*. Both work however.
