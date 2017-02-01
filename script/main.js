(function (){

"use strict";
console.log("Seaf fired");

var nav_links = document.querySelectorAll('.nav-link'),
    section1content = document.querySelectorAll('.section_one_content');


function changeContent(){

    [].forEach.call(section1content, function(section){
      section.style.display="none";
    });

    section1content[this.id].style.display="table-cell";
}


[].forEach.call(nav_links, function(nav_link) {
  nav_link.addEventListener("click", changeContent, false);
});


})();
