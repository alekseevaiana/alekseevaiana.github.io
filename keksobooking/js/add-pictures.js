'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var avatarChooser = document.querySelector('.ad-form-header__upload input[type=file]');
  var avatarPreview = document.querySelector('.ad-form-header__preview img');
  var photoChooser = document.querySelector('.ad-form__upload input[type=file]');
  var photoPreviewPlace = document.querySelector('.ad-form__photo');

  var uploadPicture = function (chooser, preview) {
    var file = chooser.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  };

  avatarChooser.addEventListener('change', function () {
    uploadPicture(avatarChooser, avatarPreview);
  });

  photoChooser.addEventListener('change', function () {
    var photoPreviewImg = document.createElement('img');
    photoPreviewImg.src = '';
    photoPreviewImg.width = '70';
    photoPreviewImg.height = '77';
    photoPreviewImg.alt = 'Фото дома';
    photoPreviewPlace.appendChild(photoPreviewImg);
    uploadPicture(photoChooser, photoPreviewImg);
  });
})();
