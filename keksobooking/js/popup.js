'use strict';

(function () {
  var showErrorPopup = function (errorMessage) {
    var mainBlock = document.querySelector('main');
    var errorTemplate = document.querySelector('#error').content.querySelector('.error');
    var errorBlock = errorTemplate.cloneNode(true);
    mainBlock.appendChild(errorBlock);
    var errorMessageParagraph = errorBlock.querySelector('.error__message');
    errorMessageParagraph.innerText = errorMessage;

    var closePopup = function () {
      if (errorBlock) {
        mainBlock.removeChild(errorBlock);
      }
      window.main.makePageActive();
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onPopupEscPress);
    };

    var onClick = function () {
      closePopup();
    };

    var onPopupEscPress = function (evt) {
      if (window.utils.isEscEvent(evt)) {
        closePopup();
      }
    };

    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onPopupEscPress);
  };

  var showSuccessPopup = function () {
    var mainBlock = document.querySelector('main');
    var successTemplate = document.querySelector('#success').content.querySelector('.success');
    var successMessage = successTemplate.cloneNode(true);
    mainBlock.appendChild(successMessage);

    var closePopup = function () {
      if (successMessage) {
        mainBlock.removeChild(successMessage);
      }
      window.main.updatePageInformation();
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onPopupEscPress);
    };

    var onClick = function () {
      closePopup();
    };

    var onPopupEscPress = function (evt) {
      if (window.utils.isEscEvent(evt)) {
        closePopup();
      }
    };

    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onPopupEscPress);
  };


  var cardPopupHandler = function () {
    var cardPopup = document.querySelector('.map__card');
    var cardPopupCloseBtn = cardPopup.querySelector('.popup__close');

    var closePopup = function () {
      var activePin = document.querySelector('.map__pin--active');
      if (activePin) {
        activePin.classList.remove('map__pin--active');
      }
      cardPopup.classList.add('hidden');
      document.removeEventListener('keydown', onPopupEscPress);
    };

    cardPopupCloseBtn.addEventListener('click', function () {
      closePopup();
    });

    var onPopupEnterPress = function (evt) {
      if (window.utils.isEnterEvent(evt)) {
        closePopup();
      }
    };

    var onPopupEscPress = function (evt) {
      if (window.utils.isEscEvent(evt)) {
        closePopup();
      }
    };

    cardPopupCloseBtn.addEventListener('keydown', onPopupEnterPress);

    document.addEventListener('keydown', onPopupEscPress);
  };

  window.popup = {
    showErrorPopup: showErrorPopup,
    showSuccessPopup: showSuccessPopup,
    cardPopupHandler: cardPopupHandler
  };
})();
