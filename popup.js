// find list
// find every item in list
// add event listener to every item

'use strict';

(function () {

const project_items = document.querySelectorAll(".projects__item"); 

const popup = document.getElementById("dialog");
const close_popup_icon = popup.querySelector(".popup_close");
const item_title = popup.querySelector(".project_title");
const item_description = popup.querySelector(".project_description");
const item_teck = popup.querySelector(".project_teck");
const item_link = popup.querySelector(".projects__link");
const github_link = popup.querySelector(".projects__github_link");


const addCloseHandler = function(block, element) {
    element.addEventListener("click", function() {
        block.style.display = "none";
    })
}

const addClickHandler = function(item) {
    
    item.addEventListener("click", function() {
        popup.style.display = "block";
        const projectDataEl = projectData.find(element => element.id === item.id);
        item_title.innerHTML = projectDataEl.title;
        item_description.innerHTML = projectDataEl.description;
        item_teck.innerHTML = projectDataEl.teck;
        item_link.href = projectDataEl.link;
        github_link.href = projectDataEl.github_link;
        addCloseHandler(popup, close_popup_icon);
    });

}

for (let index = 0; index < project_items.length; index++) {
    const project_item = project_items[index];
    addClickHandler(project_item);
}

})();
