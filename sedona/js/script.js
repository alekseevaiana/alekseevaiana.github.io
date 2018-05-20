var link = document.querySelector(".btn-search");
var popup = document.querySelector(".form-wrapper");
var date = popup.querySelector(".searching-form-input");
var form = popup.querySelector(".searching-form");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("form-wrapper-show");
  date.focus();
});

form.addEventListener("submit", function (evt) {
  if (!date.value) {
    evt.preventDefault();
    console.log("Нужно ввести даты и количество человек");
  }
})
