// Generated by CoffeeScript 1.7.1
(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  angular.module('bardo.directives', []);

  angular.module('bardo.directives').directive('slick', function($timeout) {
    var SLICK_FUNCTION_WHITELIST, SLICK_OPTION_WHITELIST, isEmpty;
    SLICK_OPTION_WHITELIST = ['accessiblity', 'autoplay', 'autoplaySpeed', 'arrows', 'cssEase', 'dots', 'draggable', 'fade', 'easing', 'infinite', 'onBeforeChange', 'onAfterChange', 'pauseOnHover', 'responsive', 'slide', 'slidesToShow', 'slidesToScroll', 'speed', 'swipe', 'touchMove', 'touchThreshold', 'vertical'];
    SLICK_FUNCTION_WHITELIST = ['slickGoTo', 'slickNext', 'slickPrev', 'slickPause', 'slickPlay', 'slickAdd', 'slickRemove', 'slickFilter', 'slickUnfilter', 'unslick'];
    isEmpty = function(value) {
      var key;
      if (angular.isArray(value)) {
        return value.length === 0;
      } else if (angular.isObject(value)) {
        for (key in value) {
          if (value.hasOwnProperty(key)) {
            return false;
          }
        }
      }
      return true;
    };
    return {
      scope: {
        settings: '=',
        control: '=',
        onDirectiveInit: '&'
      },
      restrict: 'AE',
      transclude: true,
      terminal: true,
      link: function(scope, element, attr, ngModel) {
        $timeout((function() {
          var options, slick;
          element.addClass('bardo-slick');
          options = scope.settings || {};
          angular.forEach(attr, function(value, key) {
            if (__indexOf.call(SLICK_OPTION_WHITELIST, key) >= 0) {
              return options[key] = scope.$eval(value);
            }
          });
          slick = element.slick(options);
          scope.internalControl = scope.control || {};
          SLICK_FUNCTION_WHITELIST.forEach(function(value) {
            scope.internalControl[value] = function() {
              slick[value].apply(slick, arguments);
            };
          });
          scope.onDirectiveInit();
        }), 500);
      }
    };
  });

}).call(this);

//# sourceMappingURL=slick.map