# hovertouch
Unifies :hover and touch events into a single style-able class

## Usage
Include hovertouch.js on your page, and call `hovertouch.init()`. After that, any user touch or mouse over will add class: `.hovertouch` to an appropriate anchor link, button, or input. Use this instead of janky :hover to capture the imaginations of mobile users and desktop users alike, with your fancy pants active styles!

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

## Options
Provide an options object to `.init(options)` with the following methods as desired:
```
hovertouch.init({
  elements: ['TEXTAREA'],
  addElements: ['SELECT']
});
```

### elements
This option will REPLACE the existing array of touchable elements with the provided array.

### addElements
This option will ADD the provided array of elements to the default array of touchable elements `['A', 'BUTTON', 'INPUT']`

## Dependencies
This utility requires support for element.classList, array.map, and array.indexOf specified in ECMA5.1, which means IE 9 and below are not supported, because IE. To fulfill this dependency on legacy browsers (IE 8 and below), you should load appropriate polyfills before hovertouch runs. I recommend [polyfill.io](https://cdn.polyfill.io/v1/docs/).

