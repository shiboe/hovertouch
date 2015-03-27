// https://github.com/shiboe/hovertouch

var hovertouch = (function(){

  // our default elements
  var touchables = ['A', 'BUTTON', 'INPUT'];
  var cls = 'hovertouch';

  // windows uses seperate events, so we need a tester
  var isWindows = !! window.navigator.msPointerEnabled;



  // for assuredness and simplicity, we kill all things, all time
  function unTouchAll(){
    var touched = document.getElementsByClassName(cls);
    while( touched.length ) unTouch( touched[0] );
  };

  // our touching functions--basic class add/remove
  function unTouch( el ){ el.classList.remove(cls); };
  function touch( el ){ el.classList.add(cls); };

  // we only want to hovertouch certain elements for sanity
  function touchable( el ){
    if( touchables.indexOf(el.tagName) !== -1 ) {
      return el;
    }
    else if(el.tagName === 'BODY') {
      return false;
    }
    else {
      return touchable(el.parentElement);
    }
  };



  return {
    init: function(options){
      options = options || {};

      // use custom elements to hovertouch
      if( options.elements ) {
        touchables = options.elements.map(function(el) {
          return el.toUpperCase();
        });
      }

      // add elements to the default touchables
      if( options.addElements ) {
        touchables = touchables.concat(options.addElements.map(function(el) {
          return el.toUpperCase();
        }));
      }

      // when a touch happens, let's hovertouch it!
      document.body.addEventListener( isWindows ? 'MSPointerDown' : 'touchstart', function(e){ console.log('touchstart', e)
        var source = e.target || e.srcElement;
        var touched = touchable(source);

        if( touched ) touch( touched );
      });

      // when the touch has ended, so must the hovertouch
      document.body.addEventListener( isWindows ? 'MSPointerUp' : 'touchend', unTouchAll );
      document.body.addEventListener( isWindows ? 'MSPointerCancel' : 'touchcancel', unTouchAll );


      function mouseOver(el) {
        if( el.classList.contains(cls) ) {
          return true;
        }
        else {
          el.classList.add(cls);
        }
      }

      // lets also cover our elements with mouse overs to replicate hover
      document.body.addEventListener('mouseover', function(e) {
        var source = e.target || e.srcElement;
        var touched = touchable(source);

        if( touched ) mouseOver(touched);
        else unTouchAll();
      });

      // and not forget to remove if the mouse exits the window directly
      document.body.addEventListener('mouseleave', function(e) {
        unTouchAll();
      });

      // lets try to make sure we clear our hover when returning to cache history
      window.addEventListener('popstate', function(e) { unTouchAll(); });
      window.addEventListener('pageshow', function(e) { unTouchAll(); });
    }
  }
})();
