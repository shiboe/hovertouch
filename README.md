# hovertouch
Corrects hover effects for touch devices when paired with CSS replacements

## Usage
Include hovertouch.js on your page, and call `hovertouch.init()`. After that, any user touch will apply and remove a `.hovertouch` class to an associated anchor link, button, or input. Now you can duplicate your CSS hovers as .hovertouch to cover mobile! Some wonkiness can occur with leaving `:hover` on a touch device, so this utility will also add a `.hoverable` class to `document.body` for devices detected with a mouse. This allows you to safely prefix your CSS :hover to prevent it from firing on non-mouse devices.

## Example
After including hovertouch.js...

### Javascript
You will run the initializer...
```
<script>hovertouch.init();</script>
```

### CSS
And have included some CSS to fulfill your destiny...
```
.hoverable a:hover,
a.hovertouch { color:red; }
```
Additionally, the following [SCSS mixin](http://sass-lang.com/guide) mixin will cover your bases automatically.
```
@mixin hover($sel, $attr) {
  .hoverable $sel:hover,
  $sel.hovertouch { $attr }
}
```

## Dependencies
This utility requires classList support. To fulfill this dependency on legacy browsers, you should have a polyfill loaded before hovertouch runs.

