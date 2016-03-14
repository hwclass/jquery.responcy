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
      tags: {img: 'IMG'},
      default : {
      	sizes: { 
      		small: 1024, 
      		medium: 1600, 
      		large: 2000
      	}
      }
    },
    responcyObj = null,
    currentSrc = new String(),
    tagName = $(this).get(0).tagName,
    // returns width of browser viewport
    getWindowWidth = function () {
      return $(window).width();
    },
    // returns width of HTML document
    getDocWidth = function () {
      return $(document).width();
    },
    //checks if the arg parameter is undefined or not
    isUndefined = function (arg) {
      return (typeof arg === 'undefined' ? true : false);
    },
    //logs messages
    log = function (message) {
      console.log(message);
    }

    /*get all sizes*/
    var setAllSizes = function (options) {
      if (!isUndefined(options)) {
        config.default.sizes.small = options.small;
        config.default.sizes.medium = options.medium;
        config.default.sizes.large = options.large;
      }
    };

    /*calculate the screen resolutions*/
    var setCurrentSrc = function () {
      if (getWindowWidth() <= config.default.sizes.small && getDocWidth() <= config.default.sizes.small) {
        currentSrc = responcyObj.small;
      } else if (getWindowWidth() > config.default.sizes.small && getDocWidth() > config.default.sizes.small && getWindowWidth() <= config.default.sizes.medium && getDocWidth() <= config.default.sizes.medium) {
        currentSrc = responcyObj.medium;
      } else if (getWindowWidth() > config.default.sizes.medium && getDocWidth() > config.default.sizes.medium && getWindowWidth() <= config.default.sizes.large && getDocWidth() <= config.default.sizes.large) {
        currentSrc = responcyObj.large;
      } else if (getWindowWidth() >= config.default.sizes.large && getDocWidth() >= config.default.sizes.large) {
        currentSrc = responcyObj.large;
      }
      return currentSrc;
    }

    /*initialize a responcy object to control itself*/
    responcyObj = JSON.parse(JSON.stringify($(this).data('responcy')), function (key, value) {
      var type;
      if (value && typeof value === 'object') {
        type = value.type;
        if (typeof type === 'string' && typeof window[type] === 'function') {
          return new(window[type])(value);
        }
      }
      return value;
    });

    setAllSizes(options);

    /*here comes magic!*/
    if (tagName === config.tags.img) {
      $(this).attr('src', setCurrentSrc());
    } else {
      $($(this)).load(setCurrentSrc(), function (response, status, xhr) {
        if (status == "error") {
          var msg = "Responcy Error: " + xhr.status + " " + xhr.statusText;
          log(msg);
        }
      });
    };

  }

})(jQuery);
