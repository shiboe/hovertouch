var hovertouch = (function(){

  // our default elements
  var touchables = ['A', 'BUTTON', 'INPUT'];

  // windows uses seperate events, so we need a tester
  var isWindows = !! window.navigator.msPointerEnabled;



  // for assuredness and simplicity, we kill all things, all time
  function unTouchAll(){
    var touched = document.getElementsByClassName('hovertouch');
    while( touched.length ) unTouch( touched[0] );
  };

  // our touching functions--basic class add/remove
  function unTouch( el ){ el.classList.remove('hovertouch'); };
  function touch( el ){ el.classList.add('hovertouch'); };

  // we only want to hovertouch certain elements for sanity
  function touchable( el ){
    return touchables.indexOf(el.tagName) !== -1;
  };



  return {
    init: function(options){

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
      document.body.addEventListener( isWindows ? 'MSPointerDown' : 'touchstart', function(e){
        var source = e.target || e.srcElement;
        if( touchable( source ) ) touch( source );
      });

      // when the touch has ended, so must the hovertouch
      document.body.addEventListener( isWindows ? 'MSPointerUp' : 'touchend', unTouchAll );
      document.body.addEventListener( isWindows ? 'MSPointerCancel' : 'touchcancel', unTouchAll );

      var mousing = function(e) {
        document.body.classList.add('hoverable');
        document.body.removeEventListener('mouseover', mousing);
      }

      // lets also check for mouse so we can only enable hover as needed
      document.body.addEventListener('mouseover', mousing);
    }
  }
})();
