// find list
// find every item in list
// add event listener to every item

const projectData = [
    {
        title: "Pink",
        id: "1",
        image: "./img/pink.jpg",
        link: "./pink",
        description: "Project converted from PSD into a HTML-CSS layout.",
        teck: "CSS, HTML, SVG, LESS, GULP, Cross-Browser Compatibility, Responsive and Adaptive templates"
    },
    {
        title: "Sedona",
        id: "2",
        image: "./img/sedona.jpg",
        link: "./sedona",
        description: "Project converted from PSD into a HTML-CSS layout.",
        teck: "CSS, HTML, Cross-Browser Compatibility"
    },
    {
        title: "Interior Design",
        id: "3",
        image: "./img/interior-design-for-portfolio.jpg",
        link: "./interior_design",
        description: "Project converted from PSD into a HTML-CSS layout.",
        teck: "CSS, HTML, Cross-Browser Compatibility"
    },
    {
        title: "Vinishko",
        id: "4",
        image: "./img/vinishko.png",
        link: "https://alekseevaiana.github.io/vinishko/",
        description: "Project converted from PSD into a HTML-CSS layout.",
        teck: "CSS, HTML, SVG, LESS, GULP, Cross-Browser Compatibility, Responsive and Adaptive templates"
    },
    {
        title: "Basecamp",
        id: "5",
        image: "img/basecamp.png",
        link: "https://basecamp-17.herokuapp.com",
        description: "This project is developing in Ruby on Rails.",
        teck: "Ruby, Ruby on Rails, SQL, SASS, CSS, HTML"
    }
];

let project_list = document.querySelector(".projects__list");
let project_items = document.querySelectorAll(".projects__item"); 

let popup = document.getElementById("dialog");
let close_popup_icon = popup.querySelector(".popup_close");

let addCloseHandler = function(block, element) {
    element.addEventListener("click", function() {
        block.style.display = "none";
    })
}

let addClickHandler = function(item) {
    
    item.addEventListener("click", function() {
        popup.style.display = "block";
        let close_btn = popup.querySelector(".popup_close");
        let item_title = popup.querySelector(".project_title");
        let item_description = popup.querySelector(".project_description");
        let item_teck = popup.querySelector(".project_teck");
        let item_link = popup.querySelector(".projects__link");

        let projectDataEl = projectData.find(element => element.id === item.id);
        item_title.innerHTML = projectDataEl.title;
        item_description.innerHTML = projectDataEl.description;
        item_teck.innerHTML = projectDataEl.teck;
        item_link.href = projectDataEl.link;
        addCloseHandler(popup, close_popup_icon);
    });

}

for (let index = 0; index < project_items.length; index++) {
    let project_item = project_items[index];
    
    addClickHandler(project_item);
}
