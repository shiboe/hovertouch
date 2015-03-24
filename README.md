# hovertouch
Corrects hover effects for touch devices when paired with CSS replacements

## Usage
Include hovertouch.js on your page, and call `hovertouch.init()`. After that, any user touch will apply and remove a `.hovertouch` class to an associated anchor link, button, or input. Now you can duplicate your CSS hovers as .hovertouch to cover mobile! Some wonkiness can occur with leaving `:hover` on a touch device, so this utility will also add a `.hoverable` class to `document.body` for devices detected with a mouse. This allows you to safely prefix your CSS :hover to prevent it from firing on non-mouse devices.

## Example
After including hovertouch.js...

### Javascript
You will run the initializer...
```
<script>
  hovertouch.init();
</script>
```

### CSS
And have included some CSS to fulfill your destiny...
```
<style>
  .hoverable a:hover,
  a.hovertouch { color:red; }
</style>
```
Additionally, the following [SCSS mixin](http://sass-lang.com/guide) will cover your bases automatically.
```
@mixin hover($sel, $attr) {
  .hoverable $sel:hover,
  $sel.hovertouch { $attr }
}
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
This utility requires support for element.classList, array.map, and array.indexOf specified in ECMA5.1, which means IE 8 and below are not supported. To fulfill this dependency on legacy browsers (IE 8 and below), you should load appropriate polyfills before hovertouch runs.

