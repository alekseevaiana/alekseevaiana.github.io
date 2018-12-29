'use strict';

(function () {
  var MAX_PINS = 5;
  var SUCCESS_CODE = 200;
  var MainPinSize = {
    CIRCLE_DIAMETER: 62,
    POINT_HEIGHT: 20
  };

  var MainPinStartCoord = {
    left: 570,
    top: 375
  };

  var PinLocation = {
    LEFT_MIN: 40,
    LEFT_MAX: 1160,
    TOP_MIN: 130,
    TOP_MAX: 630
  };

  window.data = {
    MAX_PINS: MAX_PINS,
    SUCCESS_CODE: SUCCESS_CODE,
    PinLocation: PinLocation,
    MainPinSize: MainPinSize,
    MainPinStartCoord: MainPinStartCoord
  };
})();
