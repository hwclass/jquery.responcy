/*!
 * jquery.responcy. The jQuery source resizing plugin
 *
 * Copyright (c) 2014 Barış Güler
 * http://hwclass.github.io
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * http://docs.jquery.com/Plugins/Authoring
 * jQuery authoring guidelines
 *
 * Launch  : April 2014
 * Version : 1.0.2
 * Released: April 1st, 2014
 *
 *
 * A jQuery plugin for responsive source calls for a selected HTML element like for image or html
 */

(function ($) {
  $.fn.responcy = function (options) {
    /*config object with default source sizes*/
    var config = {
      tags: { img: 'IMG'},
      default : {
      	sizes: {
      		small: 1024,
      		medium: 1600,
      		large: 2000
      	}
      }
    }
    /*set responcy data from srcset*/
    var srcset = $(this).data("srcset");
    if (srcset) {
      var responcyData = {};
      var _sizes = srcset.split(",");
      for (var i=0; i<_sizes.length;i++) {
        var _pair = _sizes[i].split(" ")
        responcyData[_sizes][_pair.pop()] = _pair.join(" ");
      }
      $(this).data("responcy", JSON.stringify(responcyData));
    }
    /*get needed data from the element with responcy attribute*/
    var responcyObj = JSON.stringify($(this).data('responcy'));
    /*initialize a responcy object to control itself*/
    responcyObj = JSON.parse(responcyObj, function (key, value) {
      var type;
      if (value && typeof value === 'object') {
        type = value.type;
        if (typeof type === 'string' && typeof window[type] === 'function') {
          return new(window[type])(value);
        }
      }
      return value;
    });
    var tagName = $(this).get(0).tagName,
    		currentSrc = new String();
    /*get all sizes*/
    if (!isUndefined(options)) {
      config.default.sizes.small = options.small;
      config.default.sizes.medium = options.medium;
      config.default.sizes.large = options.large;
    }
    /*calculate the screen resolutions*/
    if (getWindowWidth() <= config.default.sizes.small && getDocWidth() <= config.default.sizes.small) {
      currentSrc = responcyObj.small;
    } else if (getWindowWidth() > config.default.sizes.small && getDocWidth() > config.default.sizes.small && getWindowWidth() <= config.default.sizes.medium && getDocWidth() <= config.default.sizes.medium) {
      currentSrc = responcyObj.medium;
    } else if (getWindowWidth() > config.default.sizes.medium && getDocWidth() > config.default.sizes.medium && getWindowWidth() <= config.default.sizes.large && getDocWidth() <= config.default.sizes.large) {
      currentSrc = responcyObj.large;
    } else if (getWindowWidth() >= config.default.sizes.large && getDocWidth() >= config.default.sizes.large) {
      currentSrc = responcyObj.large;
    }
    /*here comes magic!*/
    if (tagName === config.tags.img) {
      $(this).attr('src', currentSrc);
    } else {
      $($(this)).load(currentSrc, function (response, status, xhr) {
        if (status == "error") {
          var msg = "Responcy Error: " + xhr.status + " " + xhr.statusText;
          log(msg);
        }
      });
    };
    // returns width of browser viewport
    function getWindowWidth() { return $(window).width(); };
    // returns width of HTML document
    function getDocWidth() { return $(document).width(); };
    //checks if the arg parameter is undefined or not
    function isUndefined(arg) { return (typeof arg === 'undefined' ? true : false);  }
    //logs messages
    function log(message) { console.log(message); }
  }
})(jQuery);
