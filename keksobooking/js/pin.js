'use strict';

(function () {

  var renderPin = function (house, onHouseSelect) {
    var similarPinElementTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

    var pinElement = similarPinElementTemplate.cloneNode(true);
    pinElement.classList.add('map__pin--another');
    pinElement.style.left = house.location.x + 'px';
    pinElement.style.top = house.location.y + 'px';
    pinElement.querySelector('.map__pin img').setAttribute('alt', house.offer.title);
    pinElement.querySelector('.map__pin img').setAttribute('src', house.author.avatar);
    pinElement.addEventListener('click', function (evt) {
      evt.preventDefault();
      var previousActivePin = document.querySelector('.map__pin--active');
      if (previousActivePin) {
        previousActivePin.classList.remove('map__pin--active');
      }
      onHouseSelect(house);
      pinElement.classList.add('map__pin--active');
    });
    return pinElement;
  };

  var removeOldPins = function () {
    var mapPinBlock = document.querySelector('.map__pins');
    var anotherPins = document.querySelectorAll('.map__pin--another');
    anotherPins.forEach(function (pin) {
      mapPinBlock.removeChild(pin);
    });
  };

  var renderNewPins = function (houses, onHouseSelect) {
    removeOldPins();
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < Math.min((houses.length), window.data.MAX_PINS); j++) {
      if (houses[j].offer) {
        fragment.appendChild(renderPin(houses[j], onHouseSelect));
      }
    }
    return fragment;
  };

  window.pin = {
    renderNewPins: renderNewPins,
    removeOldPins: removeOldPins
  };

})();
