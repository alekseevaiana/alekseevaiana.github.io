// find list
// find every item in list
// add event listener to every item

let project_list = document.querySelector(".projects__list");
let project_items = document.querySelectorAll(".projects__item");

let popup = document.getElementById("dialog");

let addCheckHandler = function(item) {
    let close_btn = document.querySelector(".popup_close");
    item.addEventListener("click", function() {
        popup.style.display = "block";
    });

}

for (let index = 0; index < project_items.length; index++) {
    addCheckHandler(project_items[index]);
}
