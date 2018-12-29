'use strict';

(function () {
  var FormTitleInputLength = {
    MIN: 30,
    MAX: 100
  };
  var Price = {
    FLAT_MIN: 1000,
    HOUSE_MIN: 5000,
    PALACE_MIN: 10000,
    MAX: 1000000
  };
  var titleInput = document.querySelector('#title');
  var adFormFieldsets = window.view.adForm.querySelectorAll('fieldset');
  var roomsNumberSelect = document.querySelector('#room_number');
  var guestsNumberSelect = document.querySelector('#capacity');
  var houseTypeSelect = document.querySelector('#type');
  var priceField = document.querySelector('#price');

  window.view.adForm.classList.add('ad-form--disabled');

  var updateAddress = function () {
    var left = parseInt(window.main.mainPin.style.left, 10);
    var top = parseInt(window.main.mainPin.style.top, 10);
    window.form.changeAddressField(left, top);
  };

  var changeAddressField = function (left, top) {
    var pinCenterOffset = window.data.MainPinSize.CIRCLE_DIAMETER / 2;
    var totalPinHeight = (window.data.MainPinSize.CIRCLE_DIAMETER + window.data.MainPinSize.POINT_HEIGHT);
    var x = (left + pinCenterOffset);
    var y = (top + totalPinHeight);
    document.querySelector('#address').value = x + ', ' + y;
  };

  var onLoad = function () {
    window.popup.showSuccessPopup();
  };

  window.view.adForm.addEventListener('submit', function (evt) {
    window.backend.send(new FormData(window.view.adForm), onLoad, window.main.onError);
    evt.preventDefault();
  });

  titleInput.addEventListener('invalid', function () {
    if (titleInput.validity.tooShort) {
      titleInput.setCustomValidity('Минимальная длина — ' + FormTitleInputLength.MIN + ' символов');
    } else if (titleInput.validity.tooLong) {
      titleInput.setCustomValidity('Максимальная длина — ' + FormTitleInputLength.MAX + ' символов');
    } else if (titleInput.validity.valueMissing) {
      titleInput.setCustomValidity('Ввeдите заголовок объявления');
    } else {
      titleInput.setCustomValidity('');
    }
  });

  titleInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < FormTitleInputLength.MIN) {
      target.setCustomValidity('Минимальная длина — ' + FormTitleInputLength.MIN + ' символов');
    } else {
      target.setCustomValidity('');
    }
  });

  var checkNumberOfGuests = function () {
    if (roomsNumberSelect.value === '1' && guestsNumberSelect.value !== '1') {
      guestsNumberSelect.setCustomValidity('В одну комнату только 1 гостя');
    } else if (roomsNumberSelect.value === '2' && (guestsNumberSelect.value === '3' || guestsNumberSelect.value === '0')) {
      guestsNumberSelect.setCustomValidity('Больше двух нельзя');
    } else if (roomsNumberSelect.value === '3' && guestsNumberSelect.value === '0') {
      guestsNumberSelect.setCustomValidity('Выберите количество гостей');
    } else if (roomsNumberSelect.value === '100' && guestsNumberSelect.value !== '0') {
      guestsNumberSelect.setCustomValidity('Не для гостей');
    } else {
      guestsNumberSelect.setCustomValidity('');
    }
  };
  checkNumberOfGuests();

  roomsNumberSelect.addEventListener('change', function () {
    checkNumberOfGuests();
  });

  guestsNumberSelect.addEventListener('change', function () {
    checkNumberOfGuests();
  });

  var limitPrice = function () {
    if (houseTypeSelect.value === 'bungalo') {
      priceField.min = '0';
      priceField.placeholder = '0';
    } else if (houseTypeSelect.value === 'flat') {
      priceField.min = Price.FLAT_MIN;
      priceField.placeholder = Price.FLAT_MIN;
    } else if (houseTypeSelect.value === 'house') {
      priceField.min = Price.HOUSE_MIN;
      priceField.placeholder = Price.HOUSE_MIN;
    } else if (houseTypeSelect.value === 'palace') {
      priceField.min = Price.PALACE_MIN;
      priceField.placeholder = Price.PALACE_MIN;
    }
  };

  limitPrice();

  houseTypeSelect.addEventListener('change', function () {
    limitPrice();
  });

  priceField.addEventListener('invalid', function () {
    if (priceField.validity.rangeUnderflow && (priceField.min === '0')) {
      priceField.setCustomValidity('Минимальная цена 0');
    } else if (priceField.validity.rangeUnderflow && (priceField.min === String(Price.FLAT_MIN))) {
      priceField.setCustomValidity('Минимальная цена ' + Price.FLAT_MIN + '');
    } else if (priceField.validity.rangeUnderflow && (priceField.min === String(Price.HOUSE_MIN))) {
      priceField.setCustomValidity('Минимальная цена ' + Price.HOUSE_MIN);
    } else if (priceField.validity.rangeUnderflow && (priceField.min === String(Price.PALACE_MIN))) {
      priceField.setCustomValidity('Минимальная цена ' + Price.PALACE_MIN);
    } else if (priceField.validity.rangeOverflow) {
      priceField.setCustomValidity('Максимальная цена ' + Price.MAX);
    } else {
      priceField.setCustomValidity('');
    }
  });

  var addFormFieldsetDisabledAtr = function () {
    for (var i = 0; i < adFormFieldsets.length; i++) {
      var adFormFieldset = adFormFieldsets[i];
      adFormFieldset.disabled = true;
    }
  };
  addFormFieldsetDisabledAtr();

  var removeFieldsetDisabledAtr = function () {
    for (var j = 0; j < adFormFieldsets.length; j++) {
      var adFormFieldset2 = adFormFieldsets[j];
      adFormFieldset2.removeAttribute('disabled');
    }
  };

  var chooseTime = function () {
    var timeInSelect = document.querySelector('#timein');
    var timeOutSelect = document.querySelector('#timeout');

    var onChangeTimeSelect = function (onSelect, changedSelect) {
      for (var k = 0; k < onSelect.options.length; k++) {
        if (onSelect.options[k].selected) {
          changedSelect.options[k].selected = true;
        }
      }
    };

    timeInSelect.addEventListener('change', function () {
      onChangeTimeSelect(timeInSelect, timeOutSelect);
    });

    timeOutSelect.addEventListener('change', function () {
      onChangeTimeSelect(timeOutSelect, timeInSelect);
    });
  };

  chooseTime();

  var activateForm = function () {
    window.view.adForm.classList.remove('ad-form--disabled');
    removeFieldsetDisabledAtr();
  };

  var adFormReset = document.querySelector('.ad-form__reset');
  adFormReset.addEventListener('click', function () {
    window.main.updatePageInformation();
  });

  window.form = {
    updateAddress: updateAddress,
    activateForm: activateForm,
    changeAddressField: changeAddressField,
    addFormFieldsetDisabledAtr: addFormFieldsetDisabledAtr
  };
})();
