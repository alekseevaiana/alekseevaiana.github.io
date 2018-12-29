'use strict';

(function () {
  var KeyCode = {
    Esc: 27,
    Enter: 13
  };

  var isEscEvent = function (evt) {
    return evt.keyCode === KeyCode.Esc;
  };

  var isEnterEvent = function (evt) {
    return evt.keyCode === KeyCode.Enter;
  };


  var debounce = function (cb, debounceInterval) {
    var lastTimeout = null;

    return function () {
      var parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        cb.apply(null, parameters);
      }, debounceInterval);
    };
  };

  window.utils = {
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    debounce: debounce
  };
})();
