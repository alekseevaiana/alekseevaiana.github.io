'use strict';

(function () {
  var XHR_TIMEOUT = 10 * 1000;

  var sendUrl = 'https://js.dump.academy/keksobooking';
  var getDataUrl = 'https://js.dump.academy/keksobooking/data';

  var send = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === window.data.SUCCESS_CODE) {
        onLoad(xhr.response);
      } else {
        onError('Ошибка загрузки объявления');
      }
    });
    xhr.open('POST', sendUrl);
    xhr.send(data);
  };

  var getData = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GET', getDataUrl + '?' + Math.random());
    xhr.addEventListener('load', function () {
      if (xhr.status === window.data.SUCCESS_CODE) {
        onLoad(xhr.response);
      } else {
        onError('Ошибка');
      }
    });

    xhr.send();

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = XHR_TIMEOUT;
  };

  window.backend = {
    send: send,
    getData: getData
  };
})();
