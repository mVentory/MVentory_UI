(function($){
  $.easing['jswing'] = $.easing['swing'];
$.extend( $.easing,
{
  def: 'easeOutQuad',
  swing: function (x, t, b, c, d) {
    //alert($.easing.default);
    return $.easing[$.easing.def](x, t, b, c, d);
  },
  easeInQuad: function (x, t, b, c, d) {
    return c*(t/=d)*t + b;
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
  },
  easeInCubic: function (x, t, b, c, d) {
    return c*(t/=d)*t*t + b;
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
  },
  easeInQuart: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
  },
  easeInQuint: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t*t + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  },
  easeInOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
  },
  easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
  },
  easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  },
  easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t/=d) < (1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
  },
  easeInOutBounce: function (x, t, b, c, d) {
    if (t < d/2) return $.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
    return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
  }
});
})(jQuery);
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals.
    factory(jQuery);
  }
}(function ($) {
  var pluses = /\+/g;
  function raw(s) {
    return s;
  }
  function decoded(s) {
    return decodeURIComponent(s.replace(pluses, ' '));
  }
  function converted(s) {
    if (s.indexOf('"') === 0) {
      // This is a quoted cookie as according to RFC2068, unescape
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }
    try {
      return config.json ? JSON.parse(s) : s;
    } catch(er) {}
  }
  var config = $.cookie = function (key, value, options) {
    // write
    if (value !== undefined) {
      options = $.extend({}, config.defaults, options);
      if (typeof options.expires === 'number') {
        var days = options.expires, t = options.expires = new Date();
        t.setDate(t.getDate() + days);
      }
      value = config.json ? JSON.stringify(value) : String(value);
      return (document.cookie = [
        config.raw ? key : encodeURIComponent(key),
        '=',
        config.raw ? value : encodeURIComponent(value),
        options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
        options.path    ? '; path=' + options.path : '',
        options.domain  ? '; domain=' + options.domain : '',
        options.secure  ? '; secure' : ''
      ].join(''));
    }
    // read
    var decode = config.raw ? raw : decoded;
    var cookies = document.cookie.split('; ');
    var result = key ? undefined : {};
    for (var i = 0, l = cookies.length; i < l; i++) {
      var parts = cookies[i].split('=');
      var name = decode(parts.shift());
      var cookie = decode(parts.join('='));
      if (key && key === name) {
        result = converted(cookie);
        break;
      }
      if (!key) {
        result[name] = converted(cookie);
      }
    }
    return result;
  };
  config.defaults = {};
  $.removeCookie = function (key, options) {
    if ($.cookie(key) !== undefined) {
      $.cookie(key, '', $.extend(options, { expires: -1 }));
      return true;
    }
    return false;
  };
}));
//MT Lightbox
LightboxOptions = Object.extend({
  fileLoadingImage:        '',
  fileBottomNavCloseImage: '',
  overlayOpacity: 0.8,   // controls transparency of shadow overlay
  animate: true,         // toggles resizing animations
  resizeSpeed: 7,        // controls the speed of the image resizing animations (1=slowest and 10=fastest)
  borderSize: 10,         //if you adjust the padding in the CSS, you will need to update this variable
  // When grouping images this is used to write: Image # of #.
  // Change it for non-english localization
  labelImage: "Image",
  labelOf: "of"
}, window.LightboxOptions || {});
// -----------------------------------------------------------------------------------
var Lightbox = Class.create();
Lightbox.prototype = {
  imageArray: [],
  activeImage: undefined,
  // initialize()
  // Constructor runs on completion of the DOM loading. Calls updateImageList and then
  // the function inserts html at the bottom of the page which is used to display the shadow
  // overlay and the image container.
  //
  initialize: function() {
    this.updateImageList();
    this.keyboardAction = this.keyboardAction.bindAsEventListener(this);
    if (LightboxOptions.resizeSpeed > 10) LightboxOptions.resizeSpeed = 10;
    if (LightboxOptions.resizeSpeed < 1)  LightboxOptions.resizeSpeed = 1;
    this.resizeDuration = LightboxOptions.animate ? ((11 - LightboxOptions.resizeSpeed) * 0.15) : 0;
    this.overlayDuration = LightboxOptions.animate ? 0.2 : 0;  // shadow fade in/out duration
    // When Lightbox starts it will resize itself from 250 by 250 to the current image dimension.
    // If animations are turned off, it will be hidden as to prevent a flicker of a
    // white 250 by 250 box.
    var size = (LightboxOptions.animate ? 250 : 1) + 'px';
    // Code inserts html at the bottom of the page that looks similar to this:
    //
    //  <div id="overlay"></div>
    //  <div id="lightbox">
    //      <div id="outerImageContainer">
    //          <div id="imageContainer">
    //              <img id="lightboxImage">
    //              <div style="" id="hoverNav">
    //                  <a href="#" id="prevLink"></a>
    //                  <a href="#" id="nextLink"></a>
    //              </div>
    //              <div id="loading">
    //                  <a href="#" id="loadingLink">
    //                      <img src="images/loading.gif">
    //                  </a>
    //              </div>
    //          </div>
    //      </div>
    //      <div id="imageDataContainer">
    //          <div id="imageData">
    //              <div id="imageDetails">
    //                  <span id="caption"></span>
    //                  <span id="numberDisplay"></span>
    //              </div>
    //              <div id="bottomNav">
    //                  <a href="#" id="bottomNavClose">
    //                      <img src="images/close.gif">
    //                  </a>
    //              </div>
    //          </div>
    //      </div>
    //  </div>
    var objBody = $$('body')[0];
    objBody.appendChild(Builder.node('div',{id:'overlay'}));
    objBody.appendChild(Builder.node('div',{id:'lightbox'}, [
      Builder.node('div',{id:'outerImageContainer'},
        Builder.node('div',{id:'imageContainer'}, [
          Builder.node('img',{id:'lightboxImage'}),
          Builder.node('div',{id:'hoverNav'}, [
            Builder.node('a',{id:'prevLink', href: '#' }),
            Builder.node('a',{id:'nextLink', href: '#' })
          ]),
          Builder.node('div',{id:'loading'},
            Builder.node('a',{id:'loadingLink', href: '#' },
              Builder.node('img', {src: LightboxOptions.fileLoadingImage})
            )
          )
        ])
      ),
      Builder.node('div', {id:'imageDataContainer'},
        Builder.node('div',{id:'imageData'}, [
          Builder.node('div',{id:'imageDetails'}, [
            Builder.node('span',{id:'caption'}),
            Builder.node('span',{id:'numberDisplay'})
          ]),
          Builder.node('div',{id:'bottomNav'},
            Builder.node('a',{id:'bottomNavClose', href: '#' },
              Builder.node('img', { src: LightboxOptions.fileBottomNavCloseImage })
            )
          )
        ])
      )
    ]));
    $('overlay').hide().observe('click', (function() { this.end(); }).bind(this));
    $('lightbox').hide().observe('click', (function(event) { if (event.element().id == 'lightbox') this.end(); }).bind(this));
    //$('outerImageContainer').setStyle({ width: size, height: size });
    $('prevLink').observe('click', (function(event) { event.stop(); this.changeImage(this.activeImage - 1); }).bindAsEventListener(this));
    $('nextLink').observe('click', (function(event) { event.stop(); this.changeImage(this.activeImage + 1); }).bindAsEventListener(this));
    $('loadingLink').observe('click', (function(event) { event.stop(); this.end(); }).bind(this));
    $('bottomNavClose').observe('click', (function(event) { event.stop(); this.end(); }).bind(this));
    var th = this;
    (function(){
      var ids =
        'overlay lightbox outerImageContainer imageContainer lightboxImage hoverNav prevLink nextLink loading loadingLink ' +
        'imageDataContainer imageData imageDetails caption numberDisplay bottomNav bottomNavClose';
      $w(ids).each(function(id){ th[id] = $(id); });
    }).defer();
  },
  //
  // updateImageList()
  // Loops through anchor tags looking for 'lightbox' references and applies onclick
  // events to appropriate links. You can rerun after dynamically adding images w/ajax.
  //
  updateImageList: function() {
    this.updateImageList = Prototype.emptyFunction;
    document.observe('click', (function(event){
      var targetP = event.findElement('p[class^=product-image]');
      if(targetP) {
        var elementA = $$('a.mt-a-lighbox')[0];
        //var target = event.findElement('a[rel^=lightbox]') || event.findElement('area[rel^=lightbox]');
        if (elementA) {
          event.stop();
          this.start(elementA);
        }
      }
    }).bind(this));
  },
  //
  //  start()
  //  Display overlay and lightbox. If image is part of a set, add siblings to imageArray.
  //
  start: function(imageLink) {
    $$('select', 'object', 'embed').each(function(node){ node.style.visibility = 'hidden' });
    // stretch overlay to fill page and fade in
    var arrayPageSize = this.getPageSize();
    $('overlay').setStyle({ width: arrayPageSize[0] + 'px', height: arrayPageSize[1] + 'px' });
    new Effect.Appear(this.overlay, { duration: this.overlayDuration, from: 0.0, to: LightboxOptions.overlayOpacity });
    this.imageArray = [];
    var imageNum = 0;
    if ((imageLink.rel == 'lightbox')){
      // if image is NOT part of a set, add single image to imageArray
      this.imageArray.push([imageLink.href, imageLink.title]);
    } else {
      // if image is part of a set..
      this.imageArray =
        $$(imageLink.tagName + '[href][rel="' + imageLink.rel + '"]').
        collect(function(anchor){ return [anchor.href, anchor.title]; }).
        uniq();
      while (this.imageArray[imageNum][0] != imageLink.href) { imageNum++; }
    }
    // calculate top and left offset for the lightbox
    var arrayPageScroll = document.viewport.getScrollOffsets();
    var lightboxTop = arrayPageScroll[1] + (document.viewport.getHeight() / 10);
    var lightboxLeft = arrayPageScroll[0];
    this.lightbox.setStyle({ top: lightboxTop + 'px', left: lightboxLeft + 'px' }).show();
    this.changeImage(imageNum);
  },
  //
  //  changeImage()
  //  Hide most elements and preload image in preparation for resizing image container.
  //
  changeImage: function(imageNum) {
    this.activeImage = imageNum; // update global var
    // hide elements during transition
    if (LightboxOptions.animate) this.loading.show();
    this.lightboxImage.hide();
    this.hoverNav.hide();
    this.prevLink.hide();
    this.nextLink.hide();
    // HACK: Opera9 does not currently support scriptaculous opacity and appear fx
    this.imageDataContainer.setStyle({opacity: .0001});
    this.numberDisplay.hide();
    var imgPreloader = new Image();
    // once image is preloaded, resize image container
    imgPreloader.onload = (function(){
      this.lightboxImage.src = this.imageArray[this.activeImage][0];
      this.resizeImageContainer(imgPreloader.width, imgPreloader.height);
    }).bind(this);
    imgPreloader.src = this.imageArray[this.activeImage][0];
  },
  //
  //  resizeImageContainer()
  //
  resizeImageContainer: function(imgWidth, imgHeight) {
    // get current width and height
    var widthCurrent  = this.outerImageContainer.getWidth();
    var heightCurrent = this.outerImageContainer.getHeight();
    // get new width and height
    var widthNew  = (imgWidth  + LightboxOptions.borderSize * 2);
    var heightNew = (imgHeight + LightboxOptions.borderSize * 2);
    // scalars based on change from old to new
    var xScale = (widthNew  / widthCurrent)  * 100;
    var yScale = (heightNew / heightCurrent) * 100;
    // calculate size difference between new and old image, and resize if necessary
    var wDiff = widthCurrent - widthNew;
    var hDiff = heightCurrent - heightNew;
    if (hDiff != 0) new Effect.Scale(this.outerImageContainer, yScale, {scaleX: false, duration: this.resizeDuration, queue: 'front'});
    if (wDiff != 0) new Effect.Scale(this.outerImageContainer, xScale, {scaleY: false, duration: this.resizeDuration, delay: this.resizeDuration});
    // if new and old image are same size and no scaling transition is necessary,
    // do a quick pause to prevent image flicker.
    var timeout = 0;
    if ((hDiff == 0) && (wDiff == 0)){
      timeout = 100;
      if (Prototype.Browser.IE) timeout = 250;
    }
    (function(){
      this.prevLink.setStyle({ height: imgHeight + 'px' });
      this.nextLink.setStyle({ height: imgHeight + 'px' });
      this.imageDataContainer.setStyle({ width: widthNew + 'px' });
      //-----------------
      this.showImage();
    }).bind(this).delay(timeout / 1000);
  },
  //
  //  showImage()
  //  Display image and begin preloading neighbors.
  //
  showImage: function(){
    this.loading.hide();
    new Effect.Appear(this.lightboxImage, {
      duration: this.resizeDuration,
      queue: 'end',
      afterFinish: (function(){ this.updateDetails(); }).bind(this)
    });
    this.preloadNeighborImages();
  },
  //
  //  updateDetails()
  //  Display caption, image number, and bottom nav.
  //
  updateDetails: function() {
    // if caption is not null
    if (this.imageArray[this.activeImage][1] != ""){
      this.caption.update(this.imageArray[this.activeImage][1]).show();
    }
    // if image is part of set display 'Image x of x'
    if (this.imageArray.length > 1){
      this.numberDisplay.update( LightboxOptions.labelImage + ' ' + (this.activeImage + 1) + ' ' + LightboxOptions.labelOf + '  ' + this.imageArray.length).show();
    }
    new Effect.Parallel(
      [
        new Effect.SlideDown(this.imageDataContainer, { sync: true, duration: this.resizeDuration, from: 0.0, to: 1.0 }),
        new Effect.Appear(this.imageDataContainer, { sync: true, duration: this.resizeDuration })
      ],
      {
        duration: this.resizeDuration,
        afterFinish: (function() {
          // update overlay size and update nav
          var arrayPageSize = this.getPageSize();
          this.overlay.setStyle({ height: arrayPageSize[1] + 'px' });
          this.updateNav();
        }).bind(this)
      }
    );
  },
  //
  //  updateNav()
  //  Display appropriate previous and next hover navigation.
  //
  updateNav: function() {
    this.hoverNav.show();
    // if not first image in set, display prev image button
    if (this.activeImage > 0) this.prevLink.show();
    // if not last image in set, display next image button
    if (this.activeImage < (this.imageArray.length - 1)) this.nextLink.show();
    this.enableKeyboardNav();
  },
  //
  //  enableKeyboardNav()
  //
  enableKeyboardNav: function() {
    document.observe('keydown', this.keyboardAction);
  },
  //
  //  disableKeyboardNav()
  //
  disableKeyboardNav: function() {
    document.stopObserving('keydown', this.keyboardAction);
  },
  //
  //  keyboardAction()
  //
  keyboardAction: function(event) {
    var keycode = event.keyCode;
    var escapeKey;
    if (event.DOM_VK_ESCAPE) {  // mozilla
      escapeKey = event.DOM_VK_ESCAPE;
    } else { // ie
      escapeKey = 27;
    }
    var key = String.fromCharCode(keycode).toLowerCase();
    if (key.match(/x|o|c/) || (keycode == escapeKey)){ // close lightbox
      this.end();
    } else if ((key == 'p') || (keycode == 37)){ // display previous image
      if (this.activeImage != 0){
        this.disableKeyboardNav();
        this.changeImage(this.activeImage - 1);
      }
    } else if ((key == 'n') || (keycode == 39)){ // display next image
      if (this.activeImage != (this.imageArray.length - 1)){
        this.disableKeyboardNav();
        this.changeImage(this.activeImage + 1);
      }
    }
  },
  //
  //  preloadNeighborImages()
  //  Preload previous and next images.
  //
  preloadNeighborImages: function(){
    var preloadNextImage, preloadPrevImage;
    if (this.imageArray.length > this.activeImage + 1){
      preloadNextImage = new Image();
      preloadNextImage.src = this.imageArray[this.activeImage + 1][0];
    }
    if (this.activeImage > 0){
      preloadPrevImage = new Image();
      preloadPrevImage.src = this.imageArray[this.activeImage - 1][0];
    }
  },
  //
  //  end()
  //
  end: function() {
    this.disableKeyboardNav();
    this.lightbox.hide();
    new Effect.Fade(this.overlay, { duration: this.overlayDuration });
    $$('select', 'object', 'embed').each(function(node){ node.style.visibility = 'visible' });
  },
  //
  //  getPageSize()
  //
  getPageSize: function() {
     var xScroll, yScroll;
    if (window.innerHeight && window.scrollMaxY) {
      xScroll = window.innerWidth + window.scrollMaxX;
      yScroll = window.innerHeight + window.scrollMaxY;
    } else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
      xScroll = document.body.scrollWidth;
      yScroll = document.body.scrollHeight;
    } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
      xScroll = document.body.offsetWidth;
      yScroll = document.body.offsetHeight;
    }
    var windowWidth, windowHeight;
    if (self.innerHeight) { // all except Explorer
      if(document.documentElement.clientWidth){
        windowWidth = document.documentElement.clientWidth;
      } else {
        windowWidth = self.innerWidth;
      }
      windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
      windowWidth = document.documentElement.clientWidth;
      windowHeight = document.documentElement.clientHeight;
    } else if (document.body) { // other Explorers
      windowWidth = document.body.clientWidth;
      windowHeight = document.body.clientHeight;
    }
    // for small pages with total height less then height of the viewport
    if(yScroll < windowHeight){
      pageHeight = windowHeight;
    } else {
      pageHeight = yScroll;
    }
    // for small pages with total width less then width of the viewport
    if(xScroll < windowWidth){
      pageWidth = xScroll;
    } else {
      pageWidth = windowWidth;
    }
    return [pageWidth,pageHeight];
  }
}
document.observe('dom:loaded', function () { new Lightbox(); });
//Scroller
(function(d){d.flexslider=function(j,l){var a=d(j),c=d.extend({},d.flexslider.defaults,l),e=c.namespace,q="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,u=q?"touchend":"click",m="vertical"===c.direction,n=c.reverse,h=0<c.itemWidth,s="fade"===c.animation,t=""!==c.asNavFor,f={};d.data(j,"flexslider",a);f={init:function(){a.animating=!1;a.currentSlide=c.startAt;a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=c.selector.substr(0,
c.selector.search(" "));a.slides=d(c.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(c.sync).length;"slide"===c.animation&&(c.animation="swing");a.prop=m?"top":"marginLeft";a.args={};a.manualPause=!1;var b=a,g;if(g=!c.video)if(g=!s)if(g=c.useCSS)a:{g=document.createElement("div");var p=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],e;for(e in p)if(void 0!==g.style[p[e]]){a.pfx=p[e].replace("Perspective","").toLowerCase();
a.prop="-"+a.pfx+"-transform";g=!0;break a}g=!1}b.transitions=g;""!==c.controlsContainer&&(a.controlsContainer=0<d(c.controlsContainer).length&&d(c.controlsContainer));""!==c.manualControls&&(a.manualControls=0<d(c.manualControls).length&&d(c.manualControls));c.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();t&&f.asNav.setup();a.setup("init");c.controlNav&&f.controlNav.setup();c.directionNav&&f.directionNav.setup();c.keyboard&&
(1===d(a.containerSelector).length||c.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;if(!a.animating&&(39===b||37===b))b=39===b?a.getTarget("next"):37===b?a.getTarget("prev"):!1,a.flexAnimate(b,c.pauseOnAction)});c.mousewheel&&a.bind("mousewheel",function(b,g){b.preventDefault();var d=0>g?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(d,c.pauseOnAction)});c.pausePlay&&f.pausePlay.setup();c.slideshow&&(c.pauseOnHover&&a.hover(function(){!a.manualPlay&&!a.manualPause&&a.pause()},
function(){!a.manualPause&&!a.manualPlay&&a.play()}),0<c.initDelay?setTimeout(a.play,c.initDelay):a.play());q&&c.touch&&f.touch();(!s||s&&c.smoothHeight)&&d(window).bind("resize focus",f.resize);setTimeout(function(){c.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");a.slides.click(function(b){b.preventDefault();b=d(this);var g=b.index();
!d(c.asNavFor).data("flexslider").animating&&!b.hasClass("active")&&(a.direction=a.currentItem<g?"next":"prev",a.flexAnimate(g,c.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var b=1,g;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===c.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var p=0;p<a.pagingCount;p++)g="thumbnails"===c.controlNav?
'<img src="'+a.slides.eq(p).attr("data-thumb")+'"/>':"<a>"+b+"</a>",a.controlNavScaffold.append("<li>"+g+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);f.controlNav.set();f.controlNav.active();a.controlNavScaffold.delegate("a, img",u,function(b){b.preventDefault();b=d(this);var g=a.controlNav.index(b);b.hasClass(e+"active")||(a.direction=g>a.currentSlide?"next":"prev",a.flexAnimate(g,c.pauseOnAction))});q&&a.controlNavScaffold.delegate("a",
"click touchstart",function(a){a.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls;f.controlNav.active();a.controlNav.live(u,function(b){b.preventDefault();b=d(this);var g=a.controlNav.index(b);b.hasClass(e+"active")||(g>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(g,c.pauseOnAction))});q&&a.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===c.controlNav?"img":"a"),
a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,c){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(c).closest("li").remove();f.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(c,b):f.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+
e+'direction-nav"><li><a class="'+e+'prev" href="#">'+c.prevText+'</a></li><li><a class="'+e+'next" href="#">'+c.nextText+"</a></li></ul>");a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));f.directionNav.update();a.directionNav.bind(u,function(b){b.preventDefault();b=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,c.pauseOnAction)});
q&&a.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var b=e+"disabled";1===a.pagingCount?a.directionNav.addClass(b):c.animationLoop?a.directionNav.removeClass(b):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b):a.directionNav.removeClass(b)}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?
(a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",a));f.pausePlay.update(c.slideshow?e+"pause":e+"play");a.pausePlay.bind(u,function(b){b.preventDefault();d(this).hasClass(e+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())});q&&a.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+"pause").addClass(e+
"play").text(c.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").text(c.pauseText)}},touch:function(){function b(b){k=m?d-b.touches[0].pageY:d-b.touches[0].pageX;q=m?Math.abs(k)<Math.abs(b.touches[0].pageX-e):Math.abs(k)<Math.abs(b.touches[0].pageY-e);if(!q||500<Number(new Date)-l)b.preventDefault(),!s&&a.transitions&&(c.animationLoop||(k/=0===a.currentSlide&&0>k||a.currentSlide===a.last&&0<k?Math.abs(k)/r+2:1),a.setProps(f+k,"setTouch"))}function g(){j.removeEventListener("touchmove",
b,!1);if(a.animatingTo===a.currentSlide&&!q&&null!==k){var h=n?-k:k,m=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(m)&&(550>Number(new Date)-l&&50<Math.abs(h)||Math.abs(h)>r/2)?a.flexAnimate(m,c.pauseOnAction):s||a.flexAnimate(a.currentSlide,c.pauseOnAction,!0)}j.removeEventListener("touchend",g,!1);f=k=e=d=null}var d,e,f,r,k,l,q=!1;j.addEventListener("touchstart",function(k){a.animating?k.preventDefault():1===k.touches.length&&(a.pause(),r=m?a.h:a.w,l=Number(new Date),f=h&&n&&a.animatingTo===
a.last?0:h&&n?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+c.itemMargin)*a.move*a.currentSlide:n?(a.last-a.currentSlide+a.cloneOffset)*r:(a.currentSlide+a.cloneOffset)*r,d=m?k.touches[0].pageY:k.touches[0].pageX,e=m?k.touches[0].pageX:k.touches[0].pageY,j.addEventListener("touchmove",b,!1),j.addEventListener("touchend",g,!1))},!1)},resize:function(){!a.animating&&a.is(":visible")&&(h||a.doMath(),s?f.smoothHeight():h?(a.slides.width(a.computedW),
a.update(a.pagingCount),a.setProps()):m?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(c.smoothHeight&&f.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(b){if(!m||s){var c=s?a:a.viewport;b?c.animate({height:a.slides.eq(a.animatingTo).height()},b):c.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var g=d(c.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":g.flexAnimate(e,c.pauseOnAction,!1,!0);break;case "play":!g.playing&&
!g.asNav&&g.play();break;case "pause":g.pause()}}};a.flexAnimate=function(b,g,p,j,l){t&&1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev");if(!a.animating&&(a.canAdvance(b,l)||p)&&a.is(":visible")){if(t&&j)if(p=d(c.asNavFor).data("flexslider"),a.atEnd=0===b||b===a.count-1,p.flexAnimate(b,!0,!1,!0,l),a.direction=a.currentItem<b?"next":"prev",p.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+
"active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;c.before(a);g&&a.pause();a.syncExists&&!l&&f.sync("animate");c.controlNav&&f.controlNav.active();h||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;c.directionNav&&f.directionNav.update();b===a.last&&(c.end(a),c.animationLoop||a.pause());if(s)q?(a.slides.eq(a.currentSlide).css({opacity:0,
zIndex:1}),a.slides.eq(b).css({opacity:1,zIndex:2}),a.slides.unbind("webkitTransitionEnd transitionend"),a.slides.eq(a.currentSlide).bind("webkitTransitionEnd transitionend",function(){c.after(a)}),a.animating=!1,a.currentSlide=a.animatingTo):(a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed,c.easing),a.slides.eq(b).fadeIn(c.animationSpeed,c.easing,a.wrapup));else{var r=m?a.slides.filter(":first").height():a.computedW;h?(b=c.itemWidth>a.w?2*c.itemMargin:c.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,
b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&b===a.count-1&&c.animationLoop&&"next"!==a.direction?n?(a.count+a.cloneOffset)*r:0:a.currentSlide===a.last&&0===b&&c.animationLoop&&"prev"!==a.direction?n?0:(a.count+1)*r:n?(a.count-1-b+a.cloneOffset)*r:(b+a.cloneOffset)*r;a.setProps(b,"",c.animationSpeed);if(a.transitions){if(!c.animationLoop||!a.atEnd)a.animating=!1,a.currentSlide=a.animatingTo;a.container.unbind("webkitTransitionEnd transitionend");a.container.bind("webkitTransitionEnd transitionend",
function(){a.wrapup(r)})}else a.container.animate(a.args,c.animationSpeed,c.easing,function(){a.wrapup(r)})}c.smoothHeight&&f.smoothHeight(c.animationSpeed)}};a.wrapup=function(b){!s&&!h&&(0===a.currentSlide&&a.animatingTo===a.last&&c.animationLoop?a.setProps(b,"jumpEnd"):a.currentSlide===a.last&&(0===a.animatingTo&&c.animationLoop)&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;c.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=
function(){clearInterval(a.animatedSlides);a.playing=!1;c.pausePlay&&f.pausePlay.update("play");a.syncExists&&f.sync("pause")};a.play=function(){a.animatedSlides=setInterval(a.animateSlides,c.slideshowSpeed);a.playing=!0;c.pausePlay&&f.pausePlay.update("pause");a.syncExists&&f.sync("play")};a.canAdvance=function(b,g){var d=t?a.pagingCount-1:a.last;return g?!0:t&&a.currentItem===a.count-1&&0===b&&"prev"===a.direction?!0:t&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b===a.currentSlide&&
!t?!1:c.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===d&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===d&&0===b&&"next"===a.direction?!1:!0};a.getTarget=function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1};a.setProps=function(b,g,d){var e,f=b?b:(a.itemW+c.itemMargin)*a.move*a.animatingTo;e=-1*function(){if(h)return"setTouch"===g?b:n&&a.animatingTo===a.last?0:n?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:a.animatingTo===
a.last?a.limit:f;switch(g){case "setTotal":return n?(a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+a.cloneOffset)*b;case "setTouch":return b;case "jumpEnd":return n?b:a.count*b;case "jumpStart":return n?a.count*b:b;default:return b}}()+"px";a.transitions&&(e=m?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",d=void 0!==d?d/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",d));a.args[a.prop]=e;(a.transitions||void 0===d)&&a.container.css(a.args)};a.setup=function(b){if(s)a.slides.css({width:"100%",
"float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(q?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+c.animationSpeed/1E3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed,c.easing)),c.smoothHeight&&f.smoothHeight();else{var g,p;"init"===b&&(a.viewport=d('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=
0,n&&(p=d.makeArray(a.slides).reverse(),a.slides=d(p),a.container.empty().append(a.slides)));c.animationLoop&&!h&&(a.cloneCount=2,a.cloneOffset=1,"init"!==b&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));a.newSlides=d(c.selector,a);g=n?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;m&&!h?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),
setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);a.setProps(g*a.h,"init")},"init"===b?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(g*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,"float":"left",display:"block"});c.smoothHeight&&f.smoothHeight()},"init"===b?100:0))}h||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+"active-slide")};a.doMath=function(){var b=a.slides.first(),
d=c.itemMargin,e=c.minItems,f=c.maxItems;a.w=a.width();a.h=b.height();a.boxPadding=b.outerWidth()-b.width();h?(a.itemT=c.itemWidth+d,a.minW=e?e*a.itemT:a.w,a.maxW=f?f*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-d*e)/e:a.maxW<a.w?(a.w-d*f)/f:c.itemWidth>a.w?a.w:c.itemWidth,a.visible=Math.floor(a.w/(a.itemW+d)),a.move=0<c.move&&c.move<a.visible?c.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:c.itemWidth>a.w?(a.itemW+2*d)*a.count-a.w-
d:(a.itemW+d)*a.count-a.w-d):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-a.boxPadding};a.update=function(b,d){a.doMath();h||(b<a.currentSlide?a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(c.controlNav&&!a.manualControls)if("add"===d&&!h||a.pagingCount>a.controlNav.length)f.controlNav.update("add");else if("remove"===d&&!h||a.pagingCount<a.controlNav.length)h&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),
f.controlNav.update("remove",a.last);c.directionNav&&f.directionNav.update()};a.addSlide=function(b,e){var f=d(b);a.count+=1;a.last=a.count-1;m&&n?void 0!==e?a.slides.eq(a.count-e).after(f):a.container.prepend(f):void 0!==e?a.slides.eq(e).before(f):a.container.append(f);a.update(e,"add");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.added(a)};a.removeSlide=function(b){var e=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,a.slides).remove():m&&n?a.slides.eq(a.last).remove():
a.slides.eq(b).remove();a.doMath();a.update(e,"remove");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.removed(a)};f.init()};d.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",
keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};d.fn.flexslider=function(j){void 0===j&&(j={});if("object"===typeof j)return this.each(function(){var a=d(this),c=a.find(j.selector?j.selector:".slides > li");1===c.length?(c.fadeIn(400),
j.start&&j.start(a)):void 0==a.data("flexslider")&&new d.flexslider(this,j)});var l=d(this).data("flexslider");switch(j){case "play":l.play();break;case "pause":l.pause();break;case "next":l.flexAnimate(l.getTarget("next"),!0);break;case "prev":case "previous":l.flexAnimate(l.getTarget("prev"),!0);break;default:"number"===typeof j&&l.flexAnimate(j,!0)}}})(jQuery);
(function($){$.fn.jCarouselLite=function(o){o=$.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,vertical:false,circular:true,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var b=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var c=$(this),ul=$("ul",c),tLi=$("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v}var f=$("li",ul),itemLength=f.size(),curr=o.start;c.css("visibility","visible");f.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=o.vertical?height(f):width(f);var h=g*itemLength;var j=g*v;f.css({width:f.width(),height:f.height()});ul.css(sizeCss,h+"px").css(animCss,-(curr*g));c.css(sizeCss,j+"px");if(o.btnPrev)$(o.btnPrev).click(function(){return go(curr-o.scroll)});if(o.btnNext)$(o.btnNext).click(function(){return go(curr+o.scroll)});if(o.btnGo)$.each(o.btnGo,function(i,a){$(a).click(function(){return go(o.circular?o.visible+i:i)})});if(o.mouseWheel&&c.mousewheel)c.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll)});if(o.auto)setInterval(function(){go(curr+o.scroll)},o.auto+o.speed);function vis(){return f.slice(curr).slice(0,v)};function go(a){if(!b){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular){if(a<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*g)+"px");curr=a==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll}else if(a>=itemLength-v+1){ul.css(animCss,-((v)*g)+"px");curr=a==itemLength-v+1?v+1:v+o.scroll}else curr=a}else{if(a<0||a>itemLength-v)return;else curr=a}b=true;ul.animate(animCss=="left"?{left:-(curr*g)}:{top:-(curr*g)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());b=false});if(!o.circular){$(o.btnPrev+","+o.btnNext).removeClass("disabled");$((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled")}}return false}})};function css(a,b){return parseInt($.css(a[0],b))||0};function width(a){return a[0].offsetWidth+css(a,'marginLeft')+css(a,'marginRight')};function height(a){return a[0].offsetHeight+css(a,'marginTop')+css(a,'marginBottom')}})(jQuery);
//Zoom
(function ($) {
  $(document).ready(function () {
    $('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();
  });
  function format(str) {
    for (var i = 1; i < arguments.length; i++) {
      str = str.replace('%' + (i - 1), arguments[i]);
    }
    return str;
  }
  function CloudZoom(jWin, opts) {
    var sImg = $('img', jWin);
    var img1;
    var img2;
    var zoomDiv = null;
    var $mouseTrap = null;
    var lens = null;
    var $tint = null;
    var softFocus = null;
    var $ie6Fix = null;
    var zoomImage;
    var controlTimer = 0;
    var cw, ch;
    var destU = 0;
    var destV = 0;
    var currV = 0;
    var currU = 0;
    var filesLoaded = 0;
    var mx,
      my;
    var ctx = this, zw;
    // Display an image loading message. This message gets deleted when the images have loaded and the zoom init function is called.
    // We add a small delay before the message is displayed to avoid the message flicking on then off again virtually immediately if the
    // images load really fast, e.g. from the cache.
    //var ctx = this;
    setTimeout(function () {
      //             <img src="/images/loading.gif"/>
      if ($mouseTrap === null) {
        var w = jWin.width();
        jWin.parent().append(format('<div style="width:%0px;position:absolute;top:75%;left:%1px;text-align:center" class="cloud-zoom-loading" >Loading...</div>')).find(':last').css('opacity', 0.5);
      }
    }, 200);
    var ie6FixRemove = function () {
      if ($ie6Fix !== null) {
        $ie6Fix.remove();
        $ie6Fix = null;
      }
    };
    // Removes cursor, tint layer, blur layer etc.
    this.removeBits = function () {
      //$mouseTrap.unbind();
      if (lens) {
        lens.remove();
        lens = null;
      }
      if ($tint) {
        $tint.remove();
        $tint = null;
      }
      if (softFocus) {
        softFocus.remove();
        softFocus = null;
      }
      ie6FixRemove();
      $('.cloud-zoom-loading', jWin.parent()).remove();
    };
    this.destroy = function () {
      jWin.data('zoom', null);
      if ($mouseTrap) {
        $mouseTrap.unbind();
        $mouseTrap.remove();
        $mouseTrap = null;
      }
      if (zoomDiv) {
        zoomDiv.remove();
        zoomDiv = null;
      }
      //ie6FixRemove();
      this.removeBits();
      // DON'T FORGET TO REMOVE JQUERY 'DATA' VALUES
    };
    // This is called when the zoom window has faded out so it can be removed.
    this.fadedOut = function () {
      if (zoomDiv) {
        zoomDiv.remove();
        zoomDiv = null;
      }
       this.removeBits();
      //ie6FixRemove();
    };
    this.controlLoop = function () {
      if (lens) {
        var x = (mx - sImg.offset().left - (cw * 0.5)) >> 0;
        var y = (my - sImg.offset().top - (ch * 0.5)) >> 0;
        if (x < 0) {
          x = 0;
        }
        else if (x > (sImg.outerWidth() - cw)) {
          x = (sImg.outerWidth() - cw);
        }
        if (y < 0) {
          y = 0;
        }
        else if (y > (sImg.outerHeight() - ch)) {
          y = (sImg.outerHeight() - ch);
        }
        lens.css({
          left: x,
          top: y
        });
        lens.css('background-position', (-x) + 'px ' + (-y) + 'px');
        destU = (((x) / sImg.outerWidth()) * zoomImage.width) >> 0;
        destV = (((y) / sImg.outerHeight()) * zoomImage.height) >> 0;
        currU += (destU - currU) / opts.smoothMove;
        currV += (destV - currV) / opts.smoothMove;
        zoomDiv.css('background-position', (-(currU >> 0) + 'px ') + (-(currV >> 0) + 'px'));
      }
      controlTimer = setTimeout(function () {
        ctx.controlLoop();
      }, 30);
    };
    this.init2 = function (img, id) {
      filesLoaded++;
      //console.log(img.src + ' ' + id + ' ' + img.width);
      if (id === 1) {
        zoomImage = img;
      }
      //this.images[id] = img;
      if (filesLoaded === 2) {
        this.init();
      }
    };
    /* Init function start.  */
    this.init = function () {
      // Remove loading message (if present);
      $('.cloud-zoom-loading', jWin.parent()).remove();
/* Add a box (mouseTrap) over the small image to trap mouse events.
    It has priority over zoom window to avoid issues with inner zoom.
    We need the dummy background image as IE does not trap mouse events on
    transparent parts of a div.
    */
      $mouseTrap = jWin.parent().append(format("<div class='mousetrap visible-desktop' style='background:#fff;opacity:0;filter:alpha(opacity=0);z-index:99;position:absolute;width:%0px;height:%1px;left:%2px;top:%3px;\'></div>", sImg.outerWidth(), sImg.outerHeight(), 0, 0)).find(':last');
      //////////////////////////////////////////////////////////////////////
      /* Do as little as possible in mousemove event to prevent slowdown. */
      $mouseTrap.bind('mousemove', this, function (event) {
        // Just update the mouse position
        mx = event.pageX;
        my = event.pageY;
      });
      //////////////////////////////////////////////////////////////////////
      $mouseTrap.bind('mouseleave', this, function (event) {
        clearTimeout(controlTimer);
        //event.data.removeBits();
        if(lens) { lens.fadeOut(299); }
        if($tint) { $tint.fadeOut(299); }
        if(softFocus) { softFocus.fadeOut(299); }
        zoomDiv.fadeOut(300, function () {
          ctx.fadedOut();
        });
        return false;
      });
      //////////////////////////////////////////////////////////////////////
      $mouseTrap.bind('mouseenter', this, function (event) {
        mx = event.pageX;
        my = event.pageY;
        zw = event.data;
        if (zoomDiv) {
          zoomDiv.stop(true, false);
          zoomDiv.remove();
        }
        var xPos = opts.adjustX,
          yPos = opts.adjustY;
        var siw = sImg.outerWidth();
        var sih = sImg.outerHeight();
        var w = opts.zoomWidth;
        var h = opts.zoomHeight;
        if (opts.zoomWidth == 'auto') {
          w = siw;
        }
        if (opts.zoomHeight == 'auto') {
          h = sih;
        }
        //$('#info').text( xPos + ' ' + yPos + ' ' + siw + ' ' + sih );
        var appendTo = jWin.parent(); // attach to the wrapper
        switch (opts.position) {
        case 'top':
          yPos -= h; // + opts.adjustY;
          break;
        case 'right':
          xPos += siw; // + opts.adjustX;
          break;
        case 'bottom':
          yPos += sih; // + opts.adjustY;
          break;
        case 'left':
          xPos -= w; // + opts.adjustX;
          break;
        case 'inside':
          w = siw;
          h = sih;
          break;
          // All other values, try and find an id in the dom to attach to.
        default:
          appendTo = $('#' + opts.position);
          // If dom element doesn't exit, just use 'right' position as default.
          if (!appendTo.length) {
            appendTo = jWin;
            xPos += siw; //+ opts.adjustX;
            yPos += sih; // + opts.adjustY;
          } else {
            w = appendTo.innerWidth();
            h = appendTo.innerHeight();
          }
        }
        zoomDiv = appendTo.append(format('<div id="cloud-zoom-big" class="cloud-zoom-big hidden-phone" style="display:none;position:absolute;left:%0px;top:%1px;width:%2px;height:%3px;background-image:url(\'%4\');z-index:99;"></div>', xPos, yPos, w, h, zoomImage.src)).find(':last');
        // Add the title from title tag.
        if (sImg.attr('title') && opts.showTitle) {
          zoomDiv.append(format('<div class="cloud-zoom-title">%0</div>', sImg.attr('title'))).find(':last').css('opacity', opts.titleOpacity);
        }
        // Fix ie6 select elements wrong z-index bug. Placing an iFrame over the select element solves the issue...
        if ($.browser.msie && $.browser.version < 7) {
          $ie6Fix = $('<iframe frameborder="0" src="#"></iframe>').css({
            position: "absolute",
            left: xPos,
            top: yPos,
            zIndex: 99,
            width: w,
            height: h
          }).insertBefore(zoomDiv);
        }
        zoomDiv.fadeIn(500);
        if (lens) {
          lens.remove();
          lens = null;
        } /* Work out size of cursor */
        if(typeof event.data.zoomDivWidth == 'undefined'){
          event.data.zoomDivWidth = zoomDiv.get(0).offsetWidth - (zoomDiv.css('border-left-width').replace(/\D/g, '')*1) - (zoomDiv.css('border-right-width').replace(/\D/g, '')*1);
        }
        if(typeof event.data.zoomDivHeight == 'undefined'){
          event.data.zoomDivHeight = zoomDiv.get(0).offsetHeight - (zoomDiv.css('border-top-width').replace(/\D/g, '')*1) - (zoomDiv.css('border-bottom-width').replace(/\D/g, '')*1);
        }
        cw = (sImg.outerWidth() / zoomImage.width) * event.data.zoomDivWidth;
        ch = (sImg.outerHeight() / zoomImage.height) * event.data.zoomDivHeight;
        // Attach mouse, initially invisible to prevent first frame glitch
        lens = jWin.append(format("<div class = 'cloud-zoom-lens' style='display:none;z-index:98;position:absolute;width:%0px;height:%1px;'></div>", cw, ch)).find(':last');
        $mouseTrap.css('cursor', lens.css('cursor'));
        var noTrans = false;
        // Init tint layer if needed. (Not relevant if using inside mode)
        if (opts.tint) {
          lens.css('background', 'url("' + sImg.attr('src') + '")');
          $tint = jWin.append(format('<div style="display:none;position:absolute; left:0px; top:0px; width:%0px; height:%1px; background-color:%2;" />', sImg.outerWidth(), sImg.outerHeight(), opts.tint)).find(':last');
          $tint.css('opacity', opts.tintOpacity);
          noTrans = true;
          $tint.fadeIn(500);
        }
        if (opts.softFocus) {
          lens.css('background', 'url("' + sImg.attr('src') + '")');
          softFocus = jWin.append(format('<div style="position:absolute;display:none;top:2px; left:2px; width:%0px; height:%1px;" />', sImg.outerWidth() - 2, sImg.outerHeight() - 2, opts.tint)).find(':last');
          softFocus.css('background', 'url("' + sImg.attr('src') + '")');
          softFocus.css('opacity', 0.5);
          noTrans = true;
          softFocus.fadeIn(500);
        }
        if (!noTrans) {
          lens.css('opacity', opts.lensOpacity);
        }
        if ( opts.position !== 'inside' ) { lens.fadeIn(500); }
        // Start processing.
        zw.controlLoop();
        return; // Don't return false here otherwise opera will not detect change of the mouse pointer type.
      });
    };
    img1 = new Image();
    $(img1).load(function () {
      ctx.init2(this, 0);
    });
    img1.src = sImg.attr('src');
    img2 = new Image();
    $(img2).load(function () {
      ctx.init2(this, 1);
    });
    img2.src = jWin.attr('href');
  }
  $.fn.CloudZoom = function (options) {
    // IE6 background image flicker fix
    try {
      document.execCommand("BackgroundImageCache", false, true);
    } catch (e) {}
    this.each(function () {
      var relOpts, opts;
      // Hmm...eval...slap on wrist.
      eval('var a = {' + $(this).attr('rel') + '}');
      relOpts = a;
      if ($(this).is('.cloud-zoom')) {
        $(this).css({
          'position': 'relative',
          'display': 'block'
        });
        $('img', $(this)).css({
          'display': 'block'
        });
        // Wrap an outer div around the link so we can attach things without them becoming part of the link.
        // But not if wrap already exists.
        if ($(this).parent().attr('id') != 'wrap') {
          $(this).wrap('<div id="wrap" style="top:0px;z-index:99;position:relative;"></div>');
        }
        opts = $.extend({}, $.fn.CloudZoom.defaults, options);
        opts = $.extend({}, opts, relOpts);
        $(this).data('zoom', new CloudZoom($(this), opts));
      } else if ($(this).is('.cloud-zoom-gallery')) {
        opts = $.extend({}, relOpts, options);
        $(this).data('relOpts', opts);
        $(this).bind('click', $(this), function (event) {
          var data = event.data.data('relOpts');
          // Destroy the previous zoom
          $('#' + data.useZoom).data('zoom').destroy();
          // Change the biglink to point to the new big image.
          $('#' + data.useZoom).attr('href', event.data.attr('href'));
          // Change the small image to point to the new small image.
          $('#' + data.useZoom + ' img').attr('src', event.data.data('relOpts').smallImage);
          // Init a new zoom with the new images.
          $('#' + event.data.data('relOpts').useZoom).CloudZoom();
          return false;
        });
      }
    });
    return this;
  };
  $.fn.CloudZoom.defaults = {
    zoomWidth: 'auto',
    zoomHeight: 'auto',
    position: 'right',
    tint: false,
    tintOpacity: 0.5,
    lensOpacity: 0.5,
    softFocus: false,
    smoothMove: 3,
    showTitle: false,
    titleOpacity: 0.5,
    adjustX: 0,
    adjustY: 0
  };
})(jQuery);
//Megamenu
jQuery.fn.megamenu = function(options) {
  options = jQuery.extend({
    animation: "slide",
    mm_timeout: 300
  }, options);
  var $megamenu_object = this;
  $megamenu_object.find("li.parent").each(function(){
    var $mm_item = jQuery(this).children('div');
    $mm_item.hide();
    $mm_item.wrapInner('<div class="mm-item-base clearfix"></div>');
    var $timer = 0;
    jQuery(this).bind('mouseenter', function(e){
      var mm_item_obj = jQuery(this).children('div');
      jQuery(this).find("a:first").addClass('hover');
      clearTimeout($timer);
      $timer = setTimeout(function(){
        switch(options.animation) {
          case "show":
            mm_item_obj.show().addClass("shown-sub");
            break;
          case "slide":
            mm_item_obj.height("auto");
            mm_item_obj.slideDown('fast').addClass("shown-sub");
            break;
          case "fade":
            mm_item_obj.fadeTo('fast', 1).addClass("shown-sub");
            break;
        }
      }, options.mm_timeout);
    });
    jQuery(this).bind('mouseleave', function(e){
      clearTimeout($timer);
      var mm_item_obj = jQuery(this).children('div');
      jQuery(this).find("a:first").removeClass('hover');
      switch(options.animation) {
        case "show":
            mm_item_obj.hide();
            break;
        case "slide":
            mm_item_obj.slideUp( 'fast',  function() {
            });
            break;
        case "fade":
            mm_item_obj.fadeOut( 'fast', function() {
            });
            break;
        break;
      }
    });
  });
  this.show();
};
//Mousewheel
(function($) {
var types = ['DOMMouseScroll', 'mousewheel'];
$.event.special.mousewheel = {
  setup: function() {
    if ( this.addEventListener ) {
      for ( var i=types.length; i; ) {
        this.addEventListener( types[--i], handler, false );
      }
    } else {
      this.onmousewheel = handler;
    }
  },
  teardown: function() {
    if ( this.removeEventListener ) {
      for ( var i=types.length; i; ) {
        this.removeEventListener( types[--i], handler, false );
      }
    } else {
      this.onmousewheel = null;
    }
  }
};
$.fn.extend({
  mousewheel: function(fn) {
    return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
  },
  unmousewheel: function(fn) {
    return this.unbind("mousewheel", fn);
  }
});
function handler(event) {
  var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
  event = $.event.fix(orgEvent);
  event.type = "mousewheel";
  // Old school scrollwheel delta
  if ( event.wheelDelta ) { delta = event.wheelDelta/120; }
  if ( event.detail     ) { delta = -event.detail/3; }
  // New school multidimensional scroll (touchpads) deltas
  deltaY = delta;
  // Gecko
  if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
    deltaY = 0;
    deltaX = -1*delta;
  }
  // Webkit
  if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
  if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
  // Add event and delta to the front of the arguments
  args.unshift(event, delta, deltaX, deltaY);
  return $.event.handle.apply(this, args);
}
})(jQuery);
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.1 (Mon, 01 Oct 2012)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */
(function (window, document, $, undefined) {
  "use strict";
  var W = $(window),
    D = $(document),
    F = $.fancybox = function () {
      F.open.apply( this, arguments );
    },
    didUpdate = null,
    isTouch   = document.createTouch !== undefined,
    isQuery = function(obj) {
      return obj && obj.hasOwnProperty && obj instanceof $;
    },
    isString = function(str) {
      return str && $.type(str) === "string";
    },
    isPercentage = function(str) {
      return isString(str) && str.indexOf('%') > 0;
    },
    isScrollable = function(el) {
      return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
    },
    getScalar = function(orig, dim) {
      var value = parseInt(orig, 10) || 0;
      if (dim && isPercentage(orig)) {
        value = F.getViewport()[ dim ] / 100 * value;
      }
      return Math.ceil(value);
    },
    getValue = function(value, dim) {
      return getScalar(value, dim) + 'px';
    };
  $.extend(F, {
    // The current version of fancyBox
    version: '2.1.1',
    defaults: {
      padding : 15,
      margin  : 20,
      width     : 800,
      height    : 600,
      minWidth  : 100,
      minHeight : 100,
      maxWidth  : 9999,
      maxHeight : 9999,
      autoSize   : true,
      autoHeight : false,
      autoWidth  : false,
      autoResize  : !isTouch,
      autoCenter  : !isTouch,
      fitToView   : true,
      aspectRatio : false,
      topRatio    : 0.5,
      leftRatio   : 0.5,
      scrolling : 'auto', // 'auto', 'yes' or 'no'
      wrapCSS   : '',
      arrows     : true,
      closeBtn   : true,
      closeClick : false,
      nextClick  : false,
      mouseWheel : true,
      autoPlay   : false,
      playSpeed  : 3000,
      preload    : 3,
      modal      : false,
      loop       : true,
      ajax  : {
        dataType : 'html',
        headers  : { 'X-fancyBox': true }
      },
      iframe : {
        scrolling : 'auto',
        preload   : true
      },
      swf : {
        wmode: 'transparent',
        allowfullscreen   : 'true',
        allowscriptaccess : 'always'
      },
      keys  : {
        next : {
          13 : 'left', // enter
          34 : 'up',   // page down
          39 : 'left', // right arrow
          40 : 'up'    // down arrow
        },
        prev : {
          8  : 'right',  // backspace
          33 : 'down',   // page up
          37 : 'right',  // left arrow
          38 : 'down'    // up arrow
        },
        close  : [27], // escape key
        play   : [32], // space - start/stop slideshow
        toggle : [70]  // letter "f" - toggle fullscreen
      },
      direction : {
        next : 'left',
        prev : 'right'
      },
      scrollOutside  : true,
      // Override some properties
      index   : 0,
      type    : null,
      href    : null,
      content : null,
      title   : null,
      // HTML templates
      tpl: {
        wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        image    : '<img class="fancybox-image" src="{href}" alt="" />',
        iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0"' + ($.browser.msie ? ' allowtransparency="true"' : '') + '></iframe>',
        error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
        closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
        next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
        prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
      },
      // Properties for each animation type
      // Opening fancyBox
      openEffect  : 'fade', // 'elastic', 'fade' or 'none'
      openSpeed   : 250,
      openEasing  : 'swing',
      openOpacity : true,
      openMethod  : 'zoomIn',
      // Closing fancyBox
      closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
      closeSpeed   : 250,
      closeEasing  : 'swing',
      closeOpacity : true,
      closeMethod  : 'zoomOut',
      // Changing next gallery item
      nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
      nextSpeed  : 250,
      nextEasing : 'swing',
      nextMethod : 'changeIn',
      // Changing previous gallery item
      prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
      prevSpeed  : 250,
      prevEasing : 'swing',
      prevMethod : 'changeOut',
      // Enable default helpers
      helpers : {
        overlay : true,
        title   : true
      },
      // Callbacks
      onCancel     : $.noop, // If canceling
      beforeLoad   : $.noop, // Before loading
      afterLoad    : $.noop, // After loading
      beforeShow   : $.noop, // Before changing in current item
      afterShow    : $.noop, // After opening
      beforeChange : $.noop, // Before changing gallery item
      beforeClose  : $.noop, // Before closing
      afterClose   : $.noop  // After closing
    },
    //Current state
    group    : {}, // Selected group
    opts     : {}, // Group options
    previous : null,  // Previous element
    coming   : null,  // Element being loaded
    current  : null,  // Currently loaded element
    isActive : false, // Is activated
    isOpen   : false, // Is currently open
    isOpened : false, // Have been fully opened at least once
    wrap  : null,
    skin  : null,
    outer : null,
    inner : null,
    player : {
      timer    : null,
      isActive : false
    },
    // Loaders
    ajaxLoad   : null,
    imgPreload : null,
    // Some collections
    transitions : {},
    helpers     : {},
    /*
     *  Static methods
     */
    open: function (group, opts) {
      if (!group) {
        return;
      }
      if (!$.isPlainObject(opts)) {
        opts = {};
      }
      // Close if already active
      if (false === F.close(true)) {
        return;
      }
      // Normalize group
      if (!$.isArray(group)) {
        group = isQuery(group) ? $(group).get() : [group];
      }
      // Recheck if the type of each element is `object` and set content type (image, ajax, etc)
      $.each(group, function(i, element) {
        var obj = {},
          href,
          title,
          content,
          type,
          rez,
          hrefParts,
          selector;
        if ($.type(element) === "object") {
          // Check if is DOM element
          if (element.nodeType) {
            element = $(element);
          }
          if (isQuery(element)) {
            obj = {
              href    : element.data('fancybox-href') || element.attr('href'),
              title   : element.data('fancybox-title') || element.attr('title'),
              isDom   : true,
              element : element
            };
            if ($.metadata) {
              $.extend(true, obj, element.metadata());
            }
          } else {
            obj = element;
          }
        }
        href  = opts.href  || obj.href || (isString(element) ? element : null);
        title = opts.title !== undefined ? opts.title : obj.title || '';
        content = opts.content || obj.content;
        type    = content ? 'html' : (opts.type  || obj.type);
        if (!type && obj.isDom) {
          type = element.data('fancybox-type');
          if (!type) {
            rez  = element.prop('class').match(/fancybox\.(\w+)/);
            type = rez ? rez[1] : null;
          }
        }
        if (isString(href)) {
          // Try to guess the content type
          if (!type) {
            if (F.isImage(href)) {
              type = 'image';
            } else if (F.isSWF(href)) {
              type = 'swf';
            } else if (href.charAt(0) === '#') {
              type = 'inline';
            } else if (isString(element)) {
              type    = 'html';
              content = element;
            }
          }
          // Split url into two pieces with source url and content selector, e.g,
          // "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
          if (type === 'ajax') {
            hrefParts = href.split(/\s+/, 2);
            href      = hrefParts.shift();
            selector  = hrefParts.shift();
          }
        }
        if (!content) {
          if (type === 'inline') {
            if (href) {
              content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7
            } else if (obj.isDom) {
              content = element;
            }
          } else if (type === 'html') {
            content = href;
          } else if (!type && !href && obj.isDom) {
            type    = 'inline';
            content = element;
          }
        }
        $.extend(obj, {
          href     : href,
          type     : type,
          content  : content,
          title    : title,
          selector : selector
        });
        group[ i ] = obj;
      });
      // Extend the defaults
      F.opts = $.extend(true, {}, F.defaults, opts);
      // All options are merged recursive except keys
      if (opts.keys !== undefined) {
        F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
      }
      F.group = group;
      return F._start(F.opts.index);
    },
    // Cancel image loading or abort ajax request
    cancel: function () {
      var coming = F.coming;
      if (!coming || false === F.trigger('onCancel')) {
        return;
      }
      F.hideLoading();
      if (F.ajaxLoad) {
        F.ajaxLoad.abort();
      }
      F.ajaxLoad = null;
      if (F.imgPreload) {
        F.imgPreload.onload = F.imgPreload.onerror = null;
      }
      // If the first item has been canceled, then clear everything
      if (coming.wrap) {
        coming.wrap.stop(true).trigger('onReset').remove();
      }
      if (!F.current) {
        F.trigger('afterClose');
      }
      F.coming = null;
    },
    // Start closing animation if is open; remove immediately if opening/closing
    close: function (immediately) {
      F.cancel();
      if (false === F.trigger('beforeClose')) {
        return;
      }
      F.unbindEvents();
      if (!F.isOpen || immediately === true) {
        $('.fancybox-wrap').stop(true).trigger('onReset').remove();
        F._afterZoomOut();
      } else {
        F.isOpen = F.isOpened = false;
        F.isClosing = true;
        $('.fancybox-item, .fancybox-nav').remove();
        F.wrap.stop(true, true).removeClass('fancybox-opened');
        if (F.wrap.css('position') === 'fixed') {
          F.wrap.css(F._getPosition( true ));
        }
        F.transitions[ F.current.closeMethod ]();
      }
    },
    // Manage slideshow:
    //   $.fancybox.play(); - toggle slideshow
    //   $.fancybox.play( true ); - start
    //   $.fancybox.play( false ); - stop
    play: function ( action ) {
      var clear = function () {
          clearTimeout(F.player.timer);
        },
        set = function () {
          clear();
          if (F.current && F.player.isActive) {
            F.player.timer = setTimeout(F.next, F.current.playSpeed);
          }
        },
        stop = function () {
          clear();
          $('body').unbind('.player');
          F.player.isActive = false;
          F.trigger('onPlayEnd');
        },
        start = function () {
          if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
            F.player.isActive = true;
            $('body').bind({
              'afterShow.player onUpdate.player'   : set,
              'onCancel.player beforeClose.player' : stop,
              'beforeLoad.player' : clear
            });
            set();
            F.trigger('onPlayStart');
          }
        };
      if (action === true || (!F.player.isActive && action !== false)) {
        start();
      } else {
        stop();
      }
    },
    // Navigate to next gallery item
    next: function ( direction ) {
      var current = F.current;
      if (current) {
        if (!isString(direction)) {
          direction = current.direction.next;
        }
        F.jumpto(current.index + 1, direction, 'next');
      }
    },
    // Navigate to previous gallery item
    prev: function ( direction ) {
      var current = F.current;
      if (current) {
        if (!isString(direction)) {
          direction = current.direction.prev;
        }
        F.jumpto(current.index - 1, direction, 'prev');
      }
    },
    // Navigate to gallery item by index
    jumpto: function ( index, direction, router ) {
      var current = F.current;
      if (!current) {
        return;
      }
      index = getScalar(index);
      F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
      F.router    = router || 'jumpto';
      if (current.loop) {
        if (index < 0) {
          index = current.group.length + (index % current.group.length);
        }
        index = index % current.group.length;
      }
      if (current.group[ index ] !== undefined) {
        F.cancel();
        F._start(index);
      }
    },
    // Center inside viewport and toggle position type to fixed or absolute if needed
    reposition: function (e, onlyAbsolute) {
      var pos;
      if (F.isOpen) {
        pos = F._getPosition(onlyAbsolute);
        if (e && e.type === 'scroll') {
          delete pos.position;
          F.wrap.stop(true, true).animate(pos, 200);
        } else {
          F.wrap.css(pos);
        }
      }
    },
    update: function (e) {
      var type = (e && e.type),
        anyway = !type || type === 'orientationchange';
      if (anyway) {
        clearTimeout(didUpdate);
        didUpdate = null;
      }
      if (!F.isOpen || didUpdate) {
        return;
      }
      // Help browser to restore document dimensions
      if (anyway || isTouch) {
        F.wrap.removeAttr('style').addClass('fancybox-tmp');
        F.trigger('onUpdate');
      }
      didUpdate = setTimeout(function() {
        var current = F.current;
        if (!current) {
          return;
        }
        F.wrap.removeClass('fancybox-tmp');
        if (type !== 'scroll') {
          F._setDimension();
        }
        if (!(type === 'scroll' && current.canShrink)) {
          F.reposition(e);
        }
        F.trigger('onUpdate');
        didUpdate = null;
      }, (isTouch ? 500 : (anyway ? 20 : 300)));
    },
    // Shrink content to fit inside viewport or restore if resized
    toggle: function ( action ) {
      if (F.isOpen) {
        F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;
        F.update();
      }
    },
    hideLoading: function () {
      D.unbind('keypress.fb');
      $('#fancybox-loading').remove();
    },
    showLoading: function () {
      var el, viewport;
      F.hideLoading();
      // If user will press the escape-button, the request will be canceled
      D.bind('keypress.fb', function(e) {
        if ((e.which || e.keyCode) === 27) {
          e.preventDefault();
          F.cancel();
        }
      });
      el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');
      if (!F.defaults.fixed) {
        viewport = F.getViewport();
        el.css({
          position : 'absolute',
          top  : (viewport.h * 0.5) + viewport.y,
          left : (viewport.w * 0.5) + viewport.x
        });
      }
    },
    getViewport: function () {
      var locked = (F.current && F.current.locked) || false,
        rez    = {
          x: W.scrollLeft(),
          y: W.scrollTop()
        };
      if (locked) {
        rez.w = locked[0].clientWidth;
        rez.h = locked[0].clientHeight;
      } else {
        // See http://bugs.jquery.com/ticket/6724
        rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
        rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
      }
      return rez;
    },
    // Unbind the keyboard / clicking actions
    unbindEvents: function () {
      if (F.wrap && isQuery(F.wrap)) {
        F.wrap.unbind('.fb');
      }
      D.unbind('.fb');
      W.unbind('.fb');
    },
    bindEvents: function () {
      var current = F.current,
        keys;
      if (!current) {
        return;
      }
      // Changing document height on iOS devices triggers a 'resize' event,
      // that can change document height... repeating infinitely
      W.bind('orientationchange.fb' + (current.autoResize ? ' resize.fb' : '' ) + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);
      keys = current.keys;
      if (keys) {
        D.bind('keydown.fb', function (e) {
          var code   = e.which || e.keyCode,
            target = e.target || e.srcElement;
          // Ignore key combinations and key events within form elements
          if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
            $.each(keys, function(i, val) {
              if (current.group.length > 1 && val[ code ] !== undefined) {
                F[ i ]( val[ code ] );
                e.preventDefault();
                return false;
              }
              if ($.inArray(code, val) > -1) {
                F[ i ] ();
                e.preventDefault();
                return false;
              }
            });
          }
        });
      }
      if ($.fn.mousewheel && current.mouseWheel) {
        F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
          var target = e.target || null,
            parent = $(target),
            canScroll = false;
          while (parent.length) {
            if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
              break;
            }
            canScroll = isScrollable( parent[0] );
            parent    = $(parent).parent();
          }
          if (delta !== 0 && !canScroll) {
            if (F.group.length > 1 && !current.canShrink) {
              if (deltaY > 0 || deltaX > 0) {
                F.prev( deltaY > 0 ? 'down' : 'left' );
              } else if (deltaY < 0 || deltaX < 0) {
                F.next( deltaY < 0 ? 'up' : 'right' );
              }
              e.preventDefault();
            }
          }
        });
      }
    },
    trigger: function (event, o) {
      var ret, obj = o || F.coming || F.current;
      if (!obj) {
        return;
      }
      if ($.isFunction( obj[event] )) {
        ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
      }
      if (ret === false) {
        return false;
      }
      if (event === 'onCancel' && !F.isOpened) {
        F.isActive = false;
      }
      if (obj.helpers) {
        $.each(obj.helpers, function (helper, opts) {
          if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
            opts = $.extend(true, {}, F.helpers[helper].defaults, opts);
            F.helpers[helper][event](opts, obj);
          }
        });
      }
      $.event.trigger(event + '.fb');
    },
    isImage: function (str) {
      return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i);
    },
    isSWF: function (str) {
      return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
    },
    _start: function (index) {
      var coming = {},
        obj,
        href,
        type,
        margin,
        padding;
      index = getScalar( index );
      obj   = F.group[ index ] || null;
      if (!obj) {
        return false;
      }
      coming = $.extend(true, {}, F.opts, obj);
      // Convert margin and padding properties to array - top, right, bottom, left
      margin  = coming.margin;
      padding = coming.padding;
      if ($.type(margin) === 'number') {
        coming.margin = [margin, margin, margin, margin];
      }
      if ($.type(padding) === 'number') {
        coming.padding = [padding, padding, padding, padding];
      }
      // 'modal' propery is just a shortcut
      if (coming.modal) {
        $.extend(true, coming, {
          closeBtn   : false,
          closeClick : false,
          nextClick  : false,
          arrows     : false,
          mouseWheel : false,
          keys       : null,
          helpers: {
            overlay : {
              closeClick : false
            }
          }
        });
      }
      // 'autoSize' property is a shortcut, too
      if (coming.autoSize) {
        coming.autoWidth = coming.autoHeight = true;
      }
      if (coming.width === 'auto') {
        coming.autoWidth = true;
      }
      if (coming.height === 'auto') {
        coming.autoHeight = true;
      }
      /*
       * Add reference to the group, so it`s possible to access from callbacks, example:
       * afterLoad : function() {
       *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
       * }
       */
      coming.group  = F.group;
      coming.index  = index;
      // Give a chance for callback or helpers to update coming item (type, title, etc)
      F.coming = coming;
      if (false === F.trigger('beforeLoad')) {
        F.coming = null;
        return;
      }
      type = coming.type;
      href = coming.href;
      if (!type) {
        F.coming = null;
        //If we can not determine content type then drop silently or display next/prev item if looping through gallery
        if (F.current && F.router && F.router !== 'jumpto') {
          F.current.index = index;
          return F[ F.router ]( F.direction );
        }
        return false;
      }
      F.isActive = true;
      if (type === 'image' || type === 'swf') {
        coming.autoHeight = coming.autoWidth = false;
        coming.scrolling  = 'visible';
      }
      if (type === 'image') {
        coming.aspectRatio = true;
      }
      if (type === 'iframe' && isTouch) {
        coming.scrolling = 'scroll';
      }
      // Build the neccessary markup
      coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );
      $.extend(coming, {
        skin  : $('.fancybox-skin',  coming.wrap),
        outer : $('.fancybox-outer', coming.wrap),
        inner : $('.fancybox-inner', coming.wrap)
      });
      $.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
        coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
      });
      F.trigger('onReady');
      // Check before try to load; 'inline' and 'html' types need content, others - href
      if (type === 'inline' || type === 'html') {
        if (!coming.content || !coming.content.length) {
          return F._error( 'content' );
        }
      } else if (!href) {
        return F._error( 'href' );
      }
      if (type === 'image') {
        F._loadImage();
      } else if (type === 'ajax') {
        F._loadAjax();
      } else if (type === 'iframe') {
        F._loadIframe();
      } else {
        F._afterLoad();
      }
    },
    _error: function ( type ) {
      $.extend(F.coming, {
        type       : 'html',
        autoWidth  : true,
        autoHeight : true,
        minWidth   : 0,
        minHeight  : 0,
        scrolling  : 'no',
        hasError   : type,
        content    : F.coming.tpl.error
      });
      F._afterLoad();
    },
    _loadImage: function () {
      // Reset preload image so it is later possible to check "complete" property
      var img = F.imgPreload = new Image();
      img.onload = function () {
        this.onload = this.onerror = null;
        F.coming.width  = this.width;
        F.coming.height = this.height;
        F._afterLoad();
      };
      img.onerror = function () {
        this.onload = this.onerror = null;
        F._error( 'image' );
      };
      img.src = F.coming.href;
      if (img.complete === undefined || !img.complete) {
        F.showLoading();
      }
    },
    _loadAjax: function () {
      var coming = F.coming;
      F.showLoading();
      F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
        url: coming.href,
        error: function (jqXHR, textStatus) {
          if (F.coming && textStatus !== 'abort') {
            F._error( 'ajax', jqXHR );
          } else {
            F.hideLoading();
          }
        },
        success: function (data, textStatus) {
          if (textStatus === 'success') {
            coming.content = data;
            F._afterLoad();
          }
        }
      }));
    },
    _loadIframe: function() {
      var coming = F.coming,
        iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
          .attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
          .attr('src', coming.href);
      // This helps IE
      $(coming.wrap).bind('onReset', function () {
        try {
          $(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
        } catch (e) {}
      });
      if (coming.iframe.preload) {
        F.showLoading();
        iframe.one('load', function() {
          $(this).data('ready', 1);
          // iOS will lose scrolling if we resize
          if (!isTouch) {
            $(this).bind('load.fb', F.update);
          }
          // Without this trick:
          //   - iframe won't scroll on iOS devices
          //   - IE7 sometimes displays empty iframe
          $(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();
          F._afterLoad();
        });
      }
      coming.content = iframe.appendTo( coming.inner );
      if (!coming.iframe.preload) {
        F._afterLoad();
      }
    },
    _preloadImages: function() {
      var group   = F.group,
        current = F.current,
        len     = group.length,
        cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
        item,
        i;
      for (i = 1; i <= cnt; i += 1) {
        item = group[ (current.index + i ) % len ];
        if (item.type === 'image' && item.href) {
          new Image().src = item.href;
        }
      }
    },
    _afterLoad: function () {
      var coming   = F.coming,
        previous = F.current,
        placeholder = 'fancybox-placeholder',
        current,
        content,
        type,
        scrolling,
        href,
        embed;
      F.hideLoading();
      if (!coming || F.isActive === false) {
        return;
      }
      if (false === F.trigger('afterLoad', coming, previous)) {
        coming.wrap.stop(true).trigger('onReset').remove();
        F.coming = null;
        return;
      }
      if (previous) {
        F.trigger('beforeChange', previous);
        previous.wrap.stop(true).removeClass('fancybox-opened')
          .find('.fancybox-item, .fancybox-nav')
          .remove();
        if (previous.wrap.css('position') === 'fixed') {
          previous.wrap.css(F._getPosition( true ));
        }
      }
      F.unbindEvents();
      current   = coming;
      content   = coming.content;
      type      = coming.type;
      scrolling = coming.scrolling;
      $.extend(F, {
        wrap  : current.wrap,
        skin  : current.skin,
        outer : current.outer,
        inner : current.inner,
        current  : current,
        previous : previous
      });
      href = current.href;
      switch (type) {
        case 'inline':
        case 'ajax':
        case 'html':
          if (current.selector) {
            content = $('<div>').html(content).find(current.selector);
          } else if (isQuery(content)) {
            if (!content.data(placeholder)) {
              content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
            }
            content = content.show().detach();
            current.wrap.bind('onReset', function () {
              if ($(this).find(content).length) {
                content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
              }
            });
          }
        break;
        case 'image':
          content = current.tpl.image.replace('{href}', href);
        break;
        case 'swf':
          content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
          embed   = '';
          $.each(current.swf, function(name, val) {
            content += '<param name="' + name + '" value="' + val + '"></param>';
            embed   += ' ' + name + '="' + val + '"';
          });
          content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
        break;
      }
      if (!(isQuery(content) && content.parent().is(current.inner))) {
        current.inner.append( content );
      }
      // Give a chance for helpers or callbacks to update elements
      F.trigger('beforeShow');
      // Set scrolling before calculating dimensions
      current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));
      // Set initial dimensions and start position
      F._setDimension();
      current.wrap.removeClass('fancybox-tmp');
      current.pos = $.extend({}, current.dim, F._getPosition( true ));
      F.isOpen = false;
      F.coming = null;
      F.bindEvents();
      if (!F.isOpened) {
        $('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();
      } else if (previous.prevMethod) {
        F.transitions[ previous.prevMethod ]();
      }
      F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();
      F._preloadImages();
    },
    _setDimension: function () {
      var viewport   = F.getViewport(),
        steps      = 0,
        canShrink  = false,
        canExpand  = false,
        wrap       = F.wrap,
        skin       = F.skin,
        inner      = F.inner,
        current    = F.current,
        width      = current.width,
        height     = current.height,
        minWidth   = current.minWidth,
        minHeight  = current.minHeight,
        maxWidth   = current.maxWidth,
        maxHeight  = current.maxHeight,
        scrolling  = current.scrolling,
        scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
        margin     = current.margin,
        wMargin    = margin[1] + margin[3],
        hMargin    = margin[0] + margin[2],
        wPadding,
        hPadding,
        wSpace,
        hSpace,
        origWidth,
        origHeight,
        origMaxWidth,
        origMaxHeight,
        ratio,
        width_,
        height_,
        maxWidth_,
        maxHeight_,
        iframe,
        body;
      // Reset dimensions so we could re-check actual size
      wrap.add(skin).add(inner).width('auto').height('auto');
      wPadding = skin.outerWidth(true)  - skin.width();
      hPadding = skin.outerHeight(true) - skin.height();
      // Any space between content and viewport (margin, padding, border, title)
      wSpace = wMargin + wPadding;
      hSpace = hMargin + hPadding;
      origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
      origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;
      if (current.type === 'iframe') {
        iframe = current.content;
        if (current.autoHeight && iframe.data('ready') === 1) {
          try {
            if (iframe[0].contentWindow.document.location) {
              inner.width( origWidth ).height(9999);
              body = iframe.contents().find('body');
              if (scrollOut) {
                body.css('overflow-x', 'hidden');
              }
              origHeight = body.height();
            }
          } catch (e) {}
        }
      } else if (current.autoWidth || current.autoHeight) {
        inner.addClass( 'fancybox-tmp' );
        // Set width or height in case we need to calculate only one dimension
        if (!current.autoWidth) {
          inner.width( origWidth );
        }
        if (!current.autoHeight) {
          inner.height( origHeight );
        }
        if (current.autoWidth) {
          origWidth = inner.width();
        }
        if (current.autoHeight) {
          origHeight = inner.height();
        }
        inner.removeClass( 'fancybox-tmp' );
      }
      width  = getScalar( origWidth );
      height = getScalar( origHeight );
      ratio  = origWidth / origHeight;
      // Calculations for the content
      minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
      maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);
      minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
      maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);
      // These will be used to determine if wrap can fit in the viewport
      origMaxWidth  = maxWidth;
      origMaxHeight = maxHeight;
      maxWidth_  = viewport.w - wMargin;
      maxHeight_ = viewport.h - hMargin;
      if (current.aspectRatio) {
        if (width > maxWidth) {
          width  = maxWidth;
          height = width / ratio;
        }
        if (height > maxHeight) {
          height = maxHeight;
          width  = height * ratio;
        }
        if (width < minWidth) {
          width  = minWidth;
          height = width / ratio;
        }
        if (height < minHeight) {
          height = minHeight;
          width  = height * ratio;
        }
      } else {
        width  = Math.max(minWidth,  Math.min(width,  maxWidth));
        height = Math.max(minHeight, Math.min(height, maxHeight));
      }
      // Try to fit inside viewport (including the title)
      if (current.fitToView) {
        maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
        maxHeight = Math.min(viewport.h - hSpace, maxHeight);
        inner.width( getScalar( width ) ).height( getScalar( height ) );
        wrap.width( getScalar( width + wPadding ) );
        // Real wrap dimensions
        width_  = wrap.width();
        height_ = wrap.height();
        if (current.aspectRatio) {
          while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
            if (steps++ > 19) {
              break;
            }
            height = Math.max(minHeight, Math.min(maxHeight, height - 10));
            width  = height * ratio;
            if (width < minWidth) {
              width  = minWidth;
              height = width / ratio;
            }
            if (width > maxWidth) {
              width  = maxWidth;
              height = width / ratio;
            }
            inner.width( getScalar( width ) ).height( getScalar( height ) );
            wrap.width( getScalar( width + wPadding ) );
            width_  = wrap.width();
            height_ = wrap.height();
          }
        } else {
          width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
          height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
        }
      }
      if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
        width += scrollOut;
      }
      inner.width( getScalar( width ) ).height( getScalar( height ) );
      wrap.width( getScalar( width + wPadding ) );
      width_  = wrap.width();
      height_ = wrap.height();
      canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
      canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));
      $.extend(current, {
        dim : {
          width : getValue( width_ ),
          height  : getValue( height_ )
        },
        origWidth  : origWidth,
        origHeight : origHeight,
        canShrink  : canShrink,
        canExpand  : canExpand,
        wPadding   : wPadding,
        hPadding   : hPadding,
        wrapSpace  : height_ - skin.outerHeight(true),
        skinSpace  : skin.height() - height
      });
      if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
        inner.height('auto');
      }
    },
    _getPosition: function (onlyAbsolute) {
      var current  = F.current,
        viewport = F.getViewport(),
        margin   = current.margin,
        width    = F.wrap.width()  + margin[1] + margin[3],
        height   = F.wrap.height() + margin[0] + margin[2],
        rez      = {
          position: 'absolute',
          top  : margin[0],
          left : margin[3]
        };
      if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
        rez.position = 'fixed';
      } else if (!current.locked) {
        rez.top  += viewport.y;
        rez.left += viewport.x;
      }
      rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
      rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));
      return rez;
    },
    _afterZoomIn: function () {
      var current = F.current;
      if (!current) {
        return;
      }
      F.isOpen = F.isOpened = true;
      F.wrap.addClass('fancybox-opened').css('overflow', 'visible');
      F.reposition();
      // Assign a click event
      if (current.closeClick || current.nextClick) {
        F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
          if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
            F[ current.closeClick ? 'close' : 'next' ]();
          }
        });
      }
      // Create a close button
      if (current.closeBtn) {
        $(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', F.close);
      }
      // Create navigation arrows
      if (current.arrows && F.group.length > 1) {
        if (current.loop || current.index > 0) {
          $(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
        }
        if (current.loop || current.index < F.group.length - 1) {
          $(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
        }
      }
      F.trigger('afterShow');
      // Stop the slideshow if this is the last item
      if (!current.loop && current.index === current.group.length - 1) {
        F.play( false );
      } else if (F.opts.autoPlay && !F.player.isActive) {
        F.opts.autoPlay = false;
        F.play();
      }
    },
    _afterZoomOut: function () {
      var current = F.current;
      $('.fancybox-wrap').stop(true).trigger('onReset').remove();
      $.extend(F, {
        group  : {},
        opts   : {},
        router : false,
        current   : null,
        isActive  : false,
        isOpened  : false,
        isOpen    : false,
        isClosing : false,
        wrap   : null,
        skin   : null,
        outer  : null,
        inner  : null
      });
      F.trigger('afterClose', current);
    }
  });
  /*
   *  Default transitions
   */
  F.transitions = {
    getOrigPosition: function () {
      var current  = F.current,
        element  = current.element,
        orig     = current.orig,
        pos      = {},
        width    = 50,
        height   = 50,
        hPadding = current.hPadding,
        wPadding = current.wPadding,
        viewport = F.getViewport();
      if (!orig && current.isDom && element.is(':visible')) {
        orig = element.find('img:first');
        if (!orig.length) {
          orig = element;
        }
      }
      if (isQuery(orig)) {
        pos = orig.offset();
        if (orig.is('img')) {
          width  = orig.outerWidth();
          height = orig.outerHeight();
        }
      } else {
        pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
        pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
      }
      if (current.locked) {
        pos.top  -= viewport.y;
        pos.left -= viewport.x;
      }
      pos = {
        top     : getValue(pos.top  - hPadding * current.topRatio),
        left    : getValue(pos.left - wPadding * current.leftRatio),
        width   : getValue(width  + wPadding),
        height  : getValue(height + hPadding)
      };
      return pos;
    },
    step: function (now, fx) {
      var ratio,
        padding,
        value,
        prop       = fx.prop,
        current    = F.current,
        wrapSpace  = current.wrapSpace,
        skinSpace  = current.skinSpace;
      if (prop === 'width' || prop === 'height') {
        ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);
        if (F.isClosing) {
          ratio = 1 - ratio;
        }
        padding = prop === 'width' ? current.wPadding : current.hPadding;
        value   = now - padding;
        F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
        F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
      }
    },
    zoomIn: function () {
      var current  = F.current,
        startPos = current.pos,
        effect   = current.openEffect,
        elastic  = effect === 'elastic',
        endPos   = $.extend({opacity : 1}, startPos);
      // Remove "position" property that breaks older IE
      delete endPos.position;
      if (elastic) {
        startPos = this.getOrigPosition();
        if (current.openOpacity) {
          startPos.opacity = 0.1;
        }
      } else if (effect === 'fade') {
        startPos.opacity = 0.1;
      }
      F.wrap.css(startPos).animate(endPos, {
        duration : effect === 'none' ? 0 : current.openSpeed,
        easing   : current.openEasing,
        step     : elastic ? this.step : null,
        complete : F._afterZoomIn
      });
    },
    zoomOut: function () {
      var current  = F.current,
        effect   = current.closeEffect,
        elastic  = effect === 'elastic',
        endPos   = {opacity : 0.1};
      if (elastic) {
        endPos = this.getOrigPosition();
        if (current.closeOpacity) {
          endPos.opacity = 0.1;
        }
      }
      F.wrap.animate(endPos, {
        duration : effect === 'none' ? 0 : current.closeSpeed,
        easing   : current.closeEasing,
        step     : elastic ? this.step : null,
        complete : F._afterZoomOut
      });
    },
    changeIn: function () {
      var current   = F.current,
        effect    = current.nextEffect,
        startPos  = current.pos,
        endPos    = { opacity : 1 },
        direction = F.direction,
        distance  = 200,
        field;
      startPos.opacity = 0.1;
      if (effect === 'elastic') {
        field = direction === 'down' || direction === 'up' ? 'top' : 'left';
        if (direction === 'down' || direction === 'right') {
          startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
          endPos[ field ]   = '+=' + distance + 'px';
        } else {
          startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
          endPos[ field ]   = '-=' + distance + 'px';
        }
      }
      // Workaround for http://bugs.jquery.com/ticket/12273
      if (effect === 'none') {
        F._afterZoomIn();
      } else {
        F.wrap.css(startPos).animate(endPos, {
          duration : current.nextSpeed,
          easing   : current.nextEasing,
          complete : F._afterZoomIn
        });
      }
    },
    changeOut: function () {
      var previous  = F.previous,
        effect    = previous.prevEffect,
        endPos    = { opacity : 0.1 },
        direction = F.direction,
        distance  = 200;
      if (effect === 'elastic') {
        endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
      }
      previous.wrap.animate(endPos, {
        duration : effect === 'none' ? 0 : previous.prevSpeed,
        easing   : previous.prevEasing,
        complete : function () {
          $(this).trigger('onReset').remove();
        }
      });
    }
  };
  /*
   *  Overlay helper
   */
  F.helpers.overlay = {
    defaults : {
      closeClick : true,  // close if clicking on the overlay
      speedOut   : 200,   // animation speed of fading out
      showEarly  : true,  // should be opened immediately or wait until the content is ready
      css        : {},    // custom overlay style
      locked     : true   // should be content locked into overlay
    },
    overlay : null,
    update : function () {
      var width = '100%', offsetWidth;
      // Reset width/height so it will not mess
      this.overlay.width(width).height('100%');
      // jQuery does not return reliable result for IE
      if ($.browser.msie) {
        offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
        if (D.width() > offsetWidth) {
          width = D.width();
        }
      } else if (D.width() > W.width()) {
        width = D.width();
      }
      this.overlay.width(width).height(D.height());
    },
    // This is where we can manipulate DOM, because later it would cause iframes to reload
    onReady : function (opts, obj) {
      $('.fancybox-overlay').stop(true, true);
      if (!this.overlay) {
        $.extend(this, {
          overlay : $('<div class="fancybox-overlay"></div>').appendTo( obj.parent || 'body' ),
          margin  : D.height() > W.height() || $('body').css('overflow-y') === 'scroll' ? $('body').css('margin-right') : false,
          el : document.all && !document.querySelector ? $('html') : $('body')
        });
      }
      if (obj.fixed && !isTouch) {
        this.overlay.addClass('fancybox-overlay-fixed');
        if (obj.autoCenter && opts.locked) {
          obj.locked = this.overlay.append( obj.wrap );
        }
      }
      if (opts.showEarly === true) {
        this.beforeShow.apply(this, arguments);
      }
    },
    beforeShow : function(opts, obj) {
      var overlay = this.overlay.unbind('.fb').width('auto').height('auto').css( opts.css );
      if (opts.closeClick) {
        overlay.bind('click.fb', function(e) {
          if ($(e.target).hasClass('fancybox-overlay')) {
            F.close();
          }
        });
      }
      if (obj.fixed && !isTouch) {
        if (obj.locked) {
          this.el.addClass('fancybox-lock');
          if (this.margin !== false) {
            $('body').css('margin-right', getScalar( this.margin ) + obj.scrollbarWidth);
          }
        }
      } else {
        this.update();
      }
      overlay.show();
    },
    onUpdate : function(opts, obj) {
      if (!obj.fixed || isTouch) {
        this.update();
      }
    },
    afterClose: function (opts) {
      var that  = this,
        speed = opts.speedOut || 0;
      // Remove overlay if exists and fancyBox is not opening
      // (e.g., it is not being open using afterClose callback)
      if (that.overlay && !F.isActive) {
        that.overlay.fadeOut(speed || 0, function () {
          $('body').css('margin-right', that.margin);
          that.el.removeClass('fancybox-lock');
          that.overlay.remove();
          that.overlay = null;
        });
      }
    }
  };
  /*
   *  Title helper
   */
  F.helpers.title = {
    defaults : {
      type     : 'float', // 'float', 'inside', 'outside' or 'over',
      position : 'bottom' // 'top' or 'bottom'
    },
    beforeShow: function (opts) {
      var current = F.current,
        text    = current.title,
        type    = opts.type,
        title,
        target;
      if ($.isFunction(text)) {
        text = text.call(current.element, current);
      }
      if (!isString(text) || $.trim(text) === '') {
        return;
      }
      title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');
      switch (type) {
        case 'inside':
          target = F.skin;
        break;
        case 'outside':
          target = F.wrap;
        break;
        case 'over':
          target = F.inner;
        break;
        default: // 'float'
          target = F.skin;
          title.appendTo('body');
          if ($.browser.msie) {
            title.width( title.width() );
          }
          title.wrapInner('<span class="child"></span>');
          //Increase bottom margin so this title will also fit into viewport
          F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
        break;
      }
      title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
    }
  };
  // jQuery plugin initialization
  $.fn.fancybox = function (options) {
    var index,
      that     = $(this),
      selector = this.selector || '',
      run      = function(e) {
        var what = $(this).blur(), idx = index, relType, relVal;
        if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
          relType = options.groupAttr || 'data-fancybox-group';
          relVal  = what.attr(relType);
          if (!relVal) {
            relType = 'rel';
            relVal  = what.get(0)[ relType ];
          }
          if (relVal && relVal !== '' && relVal !== 'nofollow') {
            what = selector.length ? $(selector) : that;
            what = what.filter('[' + relType + '="' + relVal + '"]');
            idx  = what.index(this);
          }
          options.index = idx;
          // Stop an event from bubbling if everything is fine
          if (F.open(what, options) !== false) {
            e.preventDefault();
          }
        }
      };
    options = options || {};
    index   = options.index || 0;
    if (!selector || options.live === false) {
      that.unbind('click.fb-start').bind('click.fb-start', run);
    } else {
      D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
    }
    return this;
  };
  // Tests that need a body at doc ready
  D.ready(function() {
    if ( $.scrollbarWidth === undefined ) {
      // http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
      $.scrollbarWidth = function() {
        var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
          child  = parent.children(),
          width  = child.innerWidth() - child.height( 99 ).innerWidth();
        parent.remove();
        return width;
      };
    }
    if ( $.support.fixedPosition === undefined ) {
      $.support.fixedPosition = (function() {
        var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
          fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );
        elem.remove();
        return fixed;
      }());
    }
    $.extend(F.defaults, {
      scrollbarWidth : $.scrollbarWidth(),
      fixed  : $.support.fixedPosition,
      parent : $('body')
    });
  });
}(window, document, jQuery));
//Accordion menu
(function($){
  $.fn.extend({
    mtAccordionMenu: function(options) {
      var defaults = {
        accordion: 'true',
        speed: 300,
        closedSign: 'collapse',
        openedSign: 'expand'
      };
      var opts = $.extend(defaults, options);
      var $this = $(this);
      $this.find("li").each(function() {
        if($(this).find("ul").size() != 0){
          $(this).find("a:first").after("<span class='"+ opts.closedSign +"'>"+ opts.closedSign +"</span>");
          if($(this).find("a:first").attr('href') == "#"){
            $(this).find("a:first").click(function(){return false;});
          }
        }
      });
      $this.find("li.active").each(function() {
        $(this).parents("ul").slideDown(opts.speed);
        $(this).parents("ul").parent("li").find("span:first").html(opts.openedSign).removeClass(opts.closedSign);
      });
      if(opts.mouseType==0){
        $this.find("li span").click(function() {
          if($(this).parent().find("ul").size() != 0){
            if(opts.accordion){
              //Do nothing when the list is open
              if(!$(this).parent().find("ul").is(':visible')){
                parents = $(this).parent().parents("ul");
                visible = $this.find("ul:visible");
                visible.each(function(visibleIndex){
                  var close = true;
                  parents.each(function(parentIndex){
                    if(parents[parentIndex] == visible[visibleIndex]){
                      close = false;
                      return false;
                    }
                  });
                  if(close){
                    if($(this).parent().find("ul") != visible[visibleIndex]){
                      $(visible[visibleIndex]).slideUp(opts.speed, function(){
                        $(this).parent("li").find("span:first").html(opts.closedSign).addClass(opts.closedSign);
                      });
                    }
                  }
                });
              }
            }
            if($(this).parent().find("ul:first").is(":visible")){
              $(this).parent().find("ul:first").slideUp(opts.speed, function(){
                $(this).parent("li").find("span:first").delay(opts.speed+1000).html(opts.closedSign).addClass(opts.closedSign);
              });
            }else{
              $(this).parent().find("ul:first").slideDown(opts.speed, function(){
                $(this).parent("li").find("span:first").delay(opts.speed+1000).html(opts.openedSign).removeClass(opts.closedSign);
              });
            }
          }
        });
      }
      if(opts.mouseType>0){
        $this.find("li a").mouseenter(function() {
          if($(this).parent().find("ul").size() != 0){
            if(opts.accordion){
              if(!$(this).parent().find("ul").is(':visible')){
                parents = $(this).parent().parents("ul");
                visible = $this.find("ul:visible");
                visible.each(function(visibleIndex){
                  var close = true;
                  parents.each(function(parentIndex){
                    if(parents[parentIndex] == visible[visibleIndex]){
                      close = false;
                      return false;
                    }
                  });
                  if(close){
                    if($(this).parent().find("ul") != visible[visibleIndex]){
                      $(visible[visibleIndex]).slideUp(opts.speed, function(){
                        $(this).parent("li").find("span:first").html(opts.closedSign).addClass(opts.closedSign);
                      });
                    }
                  }
                });
              }
            }
            if($(this).parent().find("ul:first").is(":visible")){
              $(this).parent().find("ul:first").slideUp(opts.speed, function(){
                $(this).parent("li").find("span:first").delay(opts.speed+1000).html(opts.closedSign).addClass(opts.closedSign);
              });
            }else{
              $(this).parent().find("ul:first").slideDown(opts.speed, function(){
                $(this).parent("li").find("span:first").delay(opts.speed+1000).html(opts.openedSign).removeClass(opts.closedSign);
              });
            }
          }
        });
      }
    }
  });
jQuery.fn.extend({
scrollToMe: function () {
  var x = jQuery(this).offset().top - 100;
  jQuery('html,body').animate({scrollTop: x}, 500);
}});
})(jQuery);
//Script Manual
jQuery(window).load(function(){
   var productHover = {
    over: function(){
      jQuery('.mt-hover', this).animate({opacity:1}, 200);
    },
    timeout: 20,
    out: function(){
      jQuery('.mt-hover', this).animate({opacity:0}, 200);
    }
  };
  jQuery('.products-grid .product-image, .products-list .product-image').hoverIntent( productHover );
});
jQuery(document).ready(function() {
  /*$mtkb('.top-cart').hoverIntent({
    interval: 20,
    over: function() { $mtkb(this).addClass('cart-active').find('.mtajaxcart').slideDown(); },
    out: function() { $mtkb(this).removeClass('cart-active').find('.mtajaxcart').slideUp(); }
  });
  $mtkb('.mtajaxcart').css("display","none"); */
  jQuery(function () {
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 100) {
        jQuery('#back-top').fadeIn();
      } else {
        jQuery('#back-top').fadeOut();
      }
    });
    jQuery('#back-top a').click(function () {
      jQuery('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });
  jQuery('.product-image').hover(
    function () {
      var qleft = (jQuery(this).width() - jQuery(".main-quicklook").width())/ 2,
        qtop = (jQuery(this).height() - jQuery(".main-quicklook").height())/2;
      jQuery(".main-quicklook", jQuery(this)).css({top:qtop, left:qleft}).show();
    },
    function () {
      jQuery(".main-quicklook", jQuery(this)).hide();
    }
  );
  jQuery('.products-list-image').hover(
    function () {
      var qleft = (jQuery(this).width() - jQuery(".main-quicklook").width())/ 2,
        qtop = (jQuery(this).height() - jQuery(".main-quicklook").height())/2;
      jQuery(".main-quicklook", jQuery(this)).css({top:qtop, left:qleft}).show();
    },
    function () {
      jQuery(".main-quicklook", jQuery(this)).hide();
    }
  );
  if(jQuery('.category-image img:first').length){
    var container = jQuery('#category-image');
    var catimg = jQuery('.category-image').html();
    jQuery(catimg).appendTo(container).css('text-align', 'center');
    jQuery('.category-image').detach();
    if(jQuery('.category-description').length){
      var catdesc = jQuery('.category-description').html();
      jQuery('<div/>').html(catdesc)
        .addClass('category-desc container hidden-phone')
        .appendTo(container);
      jQuery('.category-description').detach();
    }
  }
});
function showMessage(message)
{
  jQuery('body').append('<div class="message-alert"></div>');
  jQuery('.message-alert').html(message).append('<button></button>');
  jQuery('.message-alert').slideDown(200);
  jQuery('button').click(function () {
    jQuery('.message-alert').slideUp(500);
  });
  jQuery('.message-alert').slideDown('500', function () {
    setTimeout(function () {
      jQuery('.message-alert').slideUp('500', function () {
        jQuery(this).slideUp(500, function(){ jQuery(this).detach(); })
      });
    }, 9000)
  });
}
function showOptions(id){
  jQuery('#fancybox'+id).trigger('click');
}
function quicklook(id){
  jQuery('#quicklook'+id).trigger('click');
}
function setAjaxData(data,iframe){
  if(data.status == 'ERROR'){
    alert(data.message);
  }else{
    jQuery('.top-cart').html('');
    if(jQuery('.top-cart')){
      jQuery('.top-cart').append(data.output);
    }
    jQuery.fancybox.close();
  }
}
function ajaxReload(data,iframe){
  jQuery('.mt-top-menu .links').replaceWith(data.toplink);
}
function productView(url){
  jQuery.fancybox.close();
  window.location.href=url;
}
function filterCategory(catid,e){
  var url = "mtdendadmin/product/request/category/"+catid+"/";
  url += 'isAjax/1/';
  jQuery('#filters').find('a').removeClass('selected');
  jQuery(e).addClass('selected');
  jQuery('#mtcontainer').find('.mainproduct').css('opacity', '0.2');
  jQuery('<div/>').appendTo(jQuery('#mtcontainer')).addClass('isotop-loading');
  jQuery.ajax({
    url: url,
    dataType: 'html',
    success: function (data) {
      jQuery('#mtcontainer').replaceWith(data);
      jQuery('#mtcontainer').find('.mainproduct').css('opacity', '1');
      jQuery('#mtcontainer').find('.element').show();
      jQuery('#mtcontainer').find('.isotop-loading').remove();
    }
  });
}
function addCompare(e,url,id){
  url = url.replace("catalog/product_compare/add","mtdendadmin/product/compare");
  url += 'isAjax/1/';
  if(e.parents('.products-list-inner').length>0){
    e.parents('.products-list-inner').find('.ajax-loading-list').css('display', 'block');
  }else{
    e.parents('.top-actions-inner').find('.ajax-loading').css('display', 'block');
  }
  if(jQuery("#product_addtocart_form").length>0){
    jQuery("#product_addtocart_form").find('.cart-loading').show();
  }
  jQuery('.block-compare').addClass('compare-loading');
  jQuery('.block-compare .block-content').css('display','none');
  jQuery.ajax({
    url:url,
    dataType:'jsonp',
    success:function (data) {
      showMessage(data.message);
      if(e.parents('.products-list-inner').length>0){
        e.parents('.products-list-inner').find('.ajax-loading-list').css('display', 'none');
      }else{
        e.parents('.top-actions-inner').find('.ajax-loading').css('display', 'none');
      }
      if(jQuery("#product_addtocart_form").length>0){
        jQuery("#product_addtocart_form").find('.cart-loading').hide();
      }
      if (data.status != 'ERROR' && jQuery('#block-compare').length) {
        showMessage(data.message);
        jQuery('#block-compare').removeClass('compare-loading');
        jQuery('#block-compare .block-content').css('display','block');
        jQuery('#block-compare').replaceWith(data.output);
      }
      if (data.status != 'ERROR'){
        jQuery('.block-top-compare').html();
        jQuery('.block-top-compare').html(data.topcompare);
      }
    }
  });
}
function removeCompare(url){
  url = url.replace("catalog/product_compare/remove","mtdendadmin/product/rmcompare");
  url += 'isAjax/1/';
  jQuery('#block-compare').addClass('compare-loading');
  jQuery('#block-compare .block-content').css('display','none');
  jQuery.ajax({
    url:url,
    dataType:'jsonp',
    success:function (data) {
      if (data.status != 'ERROR' && jQuery('#block-compare').length) {
        showMessage(data.message);
        jQuery('#block-compare').removeClass('compare-loading');
        jQuery('#block-compare .block-content').css('display','block');
        jQuery('#block-compare').replaceWith(data.output);
      }
      if (data.status != 'ERROR'){
        showMessage(data.message);
        jQuery('.block-top-compare').html();
        jQuery('.block-top-compare').html(data.topcompare);
      }
    }
  });
}
function clearCompare(url){
  url = url.replace("catalog/product_compare/clear","mtdendadmin/product/clearall");
  url += 'isAjax/1/';
  jQuery('#block-compare').addClass('compare-loading');
  jQuery('#block-compare .block-content').css('display','none');
  jQuery.ajax({
    url:url,
    dataType:'jsonp',
    success:function (data) {
      if (data.status != 'ERROR' && jQuery('#block-compare').length) {
        showMessage(data.message);
        jQuery('#block-compare').removeClass('compare-loading');
        jQuery('#block-compare .block-content').css('display','block');
        jQuery('#block-compare').replaceWith(data.output);
      }
      if (data.status != 'ERROR'){
        showMessage(data.message);
        jQuery('.block-top-compare').html();
        jQuery('.block-top-compare').html(data.topcompare);
      }
    }
  });
}
function addWishlist(e,url,id){
  url = url.replace("wishlist/index","mtdendadmin/product");
  url += 'isAjax/1/';
  jQuery('#block-wisthlist').addClass('wisthlist-loading');
  jQuery('#block-wisthlist .block-content').css('display','none');
  if(e.parents('.products-list-inner').length>0){
    e.parents('.products-list-inner').find('.ajax-loading-list').css('display', 'block');
  }else{
    e.parents('.top-actions-inner').find('.ajax-loading').css('display', 'block');
  }
  if(jQuery("#product_addtocart_form").length>0){
    jQuery("#product_addtocart_form").find('.cart-loading').show();
  }
  jQuery.ajax({
    url:url,
    dataType:'jsonp',
    success:function (data) {
      showMessage(data.message);
      if(e.parents('.products-list-inner').length>0){
        e.parents('.products-list-inner').find('.ajax-loading-list').css('display', 'none');
      }else{
        e.parents('.top-actions-inner').find('.ajax-loading').css('display', 'none');
      }
      if(jQuery("#product_addtocart_form").length>0){
        jQuery("#product_addtocart_form").find('.cart-loading').hide();
      }
      if (data.status != 'ERROR' && jQuery('#block-wisthlist').length) {
        showMessage(data.message);
        jQuery('#block-wisthlist').removeClass('wisthlist-loading');
        jQuery('#block-wisthlist .block-content').css('display','block');
        jQuery('#block-wisthlist').replaceWith(data.sidebar);
      }
      if(data.message!='Please Login First'){
        jQuery('.mt-top-menu .links').replaceWith(data.toplink);
      }
    }
  });
  return false;
}
function removeWishlist(url){
  url = url.replace("wishlist/index","mtdendadmin/product");
  url += 'isAjax/1/';
  jQuery('#block-wisthlist').addClass('wisthlist-loading');
  jQuery('#block-wisthlist .block-content').css('display','none');
  jQuery.ajax({
    url:url,
    dataType:'jsonp',
    success:function (data) {
      showMessage(data.message);
      if (data.status != 'ERROR' && jQuery('#block-wisthlist').length) {
        showMessage(data.message);
        jQuery('#block-wisthlist').removeClass('wisthlist-loading');
        jQuery('#block-wisthlist .block-content').css('display','block');
        jQuery('#block-wisthlist').replaceWith(data.sidebar);
      }
      jQuery('.mt-top-menu .links').replaceWith(data.toplink);
    }
  });
}
function ajaxaddcart(url,id){
  jQuery('.cart-loading').show();
  jQuery('.cart').hide();
  data = '&isAjax=1&qty=1';
  url = url.replace("checkout/cart","mtdendadmin/index");
  try {
    jQuery.ajax( {
      url : url,
      dataType : 'json',
      data: data,
      type: 'post',
      success : function(data) {
        setAjaxData(data,false);
        showMessage(data.message);
        removeLoading();
        jQuery('body').find('img.imgfly').remove();
        jQuery('.cart-loading').hide();
        jQuery('.cart').show();
        setTimeout(function () {
          jQuery('.cart-loading').slideUp(500);
        }, 9000)
        jQuery('.mt-top-menu .links').replaceWith(data.toplink);
      }
    });
  } catch (e) {
  }
}
function removeLoading(){
  jQuery('.ajax-loading').hide();
  jQuery(".ajax-loading-list").hide();
}
function deletecart(url){
  jQuery('.cart-loading').show();
  jQuery('.cart').hide();
  if (confirm("Are you sure you would like to remove this item from the shopping cart?")) {
    data = '&isAjax=1&qty=1';
    url = url.replace("checkout/cart","mtdendadmin/index");
    jQuery.ajax( {
      url : url,
      dataType : 'json',
      data: data,
      type: 'post',
      success : function(data) {
        setAjaxData(data,false);
        showMessage(data.message);
        jQuery('.cart-loading').hide();
        jQuery('.cart').show();
        jQuery('.mt-top-menu .links').replaceWith(data.toplink);
      }
    });
  }else{
    jQuery('.cart-loading').hide();
    jQuery('.cart').show();
  }
}
jQuery(document).ready(function(){
  jQuery('.fancybox').fancybox(
    {
       hideOnContentClick : true,
       width: 382,
       autoDimensions: true,
       type : 'iframe',
       showTitle: false,
       scrolling: 'no',
       onComplete: function(){
         jQuery('#fancybox-frame').load(function() {
           jQuery('#fancybox-content').height(jQuery(this).contents().find('body').height()+30);
           jQuery.fancybox.resize();
       });
       }
    }
  );
});
//Accordion config style
(function($){
  $.fn.accordion=function(){
    return this.each(function(){
      var menu= $(this);
      menu.find('ul.listpanel li div.active').slideDown('medium');
      menu.find('ul.listpanel li > span.mttitle').bind('click',function(event){
        var currentlink=$(event.currentTarget);
        if (currentlink.parent().find('div.active').size()==1)
        {
          currentlink.parent().find('div.active').slideUp('medium',function(){
            currentlink.parent().find('div.active').removeClass('active');
            currentlink.find('span.arrows').removeClass('current');
          });
        }
        else if (menu.find('ul.listpanel li div.active').size()==0)
        {
          show(currentlink);
        }
        else
        {
          menu.find('ul.listpanel li div.active').slideUp('medium',function(){
            menu.find('ul.listpanel li div.mainpattern').removeClass('active');
            menu.find('ul.listpanel li span.mttitle > span.arrows').removeClass('current');
            show(currentlink);
          });
        }
      });
      function show(currentlink){
        currentlink.parent().find('div.mainpattern').addClass('active');
        currentlink.find('span.arrows').addClass('current');
        currentlink.parent().find('div.mainpattern').slideDown('medium');
      }
    });
  }
})(jQuery);
/////////Twitter//////
(function($) {
  var TwitterTimeline = $.twitterTimeline = function(element, options) {
    this.element  = $(element);
    this.options  = $.extend(true, {}, this.options, options || {});
    this._init();
  };
  $.extend(TwitterTimeline.prototype, {
    options: {
      ajax: {
        url: 'http://api.twitter.com/1/statuses/user_timeline.json',
        data: {
          screen_name     : '9magentothemes',
          page            : 1,
          count           : 3,
          trim_user       : true,
          include_rts     : true,
          exclude_replies : true,
          include_entities: true
        },
        dataType: 'jsonp',
        type: 'GET'
      },
      count: 5,
      refresh: 300000,
      tweetTemplate : function(item) {
        return '<p>' + TwitterTimeline.parseTweet(item.text) + '</p>';
      },
      animateAdd: function(el) {
        return el;
      },
      animateRemove: function(el) {
        el.remove();
      }
    },
    _refreshTimeout: null,
    _init: function() {
      this._useLocalStorage = typeof localStorage !== 'undefined' && typeof JSON !== 'undefined';
      this._localStorageKey = 'twitterTimeline_' + this.options.ajax.data.screen_name;
      //read localStorage and write tweets if there are cached ones
      if (this._useLocalStorage === true) {
        var cache = localStorage.getItem(this._localStorageKey);
        if (cache !== null) {
          cache = JSON.parse(cache);
          if (cache.length > 0 ) {
            this.update(cache);
          }
        }
      }
      //get new tweets
      this.fetch();
    },
    update: function(data) {
      var self = this;
      if (this._refreshTimeout) {
        clearTimeout(this._refreshTimeout);
      }
      // update localStorage
      if (this._useLocalStorage === true && data.length > 0) {
        var cache = localStorage.getItem(this._localStorageKey);
        cache = cache !== null ? JSON.parse(cache) : [];
        cache = data.concat(cache).splice(0, this.options.count);
        cache = JSON.stringify(cache);
        try {
          localStorage.removeItem(this._localStorageKey);
          localStorage.setItem(this._localStorageKey, cache);
        } catch (e) {
          this._useLocalStorage = false;
        }
      }
      //add new tweets
      $.each(data.reverse(), function(idx, item) {
        //set since_id to current tweet for further updates
        self.options.ajax.data.since_id = item.id_str;
        //get tweet html from template and prepend to list
        var tweet = self.options.tweetTemplate.call(self, item);
        self.element.prepend(self.options.animateAdd($(tweet), idx));
        //remove last tweet if the number of elements is bigger than the defined count
        var tweets = self.element.children(self.options.el);
        if (tweets.length > self.options.count) {
          self.options.animateRemove($(tweets[self.options.count]), idx);
        }
      });
      if (typeof this.options.refresh === 'number') {
        this._refreshTimeout = setTimeout($.proxy(this.fetch, this), this.options.refresh);
      }
    },
    fetch: function(options) {
      var ajax = $.extend(true, {}, this.options.ajax, options || {});
      var self = this,
        success = ajax.success;
      ajax.success = function(data) {
        self.update(data);
        if ($.isFunction(success)) {
          success.apply(this, arguments);
        }
      };
      $.ajax(ajax);
    }
  });
  TwitterTimeline.timeAgo = function(dateString) {
    var rightNow = new Date();
    var then = new Date(dateString);
    if ($.browser.msie) {
      then = Date.parse(dateString.replace(/( \+)/, ' UTC$1'));
    }
    var diff = rightNow - then;
    var second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24,
      week = day * 7;
    if (isNaN(diff) || diff < 0) {
      return "";
    }
    if (diff < second * 2) {
      return "right now";
    }
    if (diff < minute) {
      return Math.floor(diff / second) + " seconds ago";
    }
    if (diff < minute * 2) {
      return "about 1 minute ago";
    }
    if (diff < hour) {
      return Math.floor(diff / minute) + " minutes ago";
    }
    if (diff < hour * 2) {
      return "about 1 hour ago";
    }
    if (diff < day) {
      return  Math.floor(diff / hour) + " hours ago";
    }
    if (diff > day && diff < day * 2) {
      return "yesterday";
    }
    if (diff < day * 365) {
      return Math.floor(diff / day) + " days ago";
    }
    else {
      return "over a year ago";
    }
  };
  TwitterTimeline.parseTweet = function(text) {
    text = text.replace(/(\b(https?|ftp|file):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z0-9+&@#\/%=~_|])/ig, function(url) {
      return '<a href="' + url + '" target="_blank">' + url + '</a>';
    });
    text = text.replace(/(^|\s)@(\w+)/g, function(u) {
      return '<a href="http://twitter.com/' + $.trim(u.replace("@","")) + '" target="_blank">' + u + '</a>';
    });
    text = text.replace(/(^|\s)#(\w+)/g, function(t) {
      return '<a href="http://search.twitter.com/search/' + $.trim(t.replace("#","%23")) + '" target="_blank">' + t + '</a>';
    });
    return text;
  };
  $.fn.twitterTimeline = function(options) {
    if (typeof options === 'string') {
      var instance = $(this).data('twitterTimeline');
      return instance[options].apply(instance, Array.prototype.slice.call(arguments, 1));
    } else {
      return this.each(function() {
        var instance = $(this).data('twitterTimeline');
        if (instance) {
          $.extend(true, instance.options, options || {});
        } else {
          new TwitterTimeline(this, options);
        }
      });
    }
  };
})(jQuery);
