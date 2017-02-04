(function (){

"use strict";
console.log("Seaf fired");

var nav_links = document.querySelectorAll('.nav-link'),
    section1content = document.querySelectorAll('.section_one_content'),
    section2content = document.querySelectorAll('.section_two_content');


//checking screen size- add data toggle or not for mobile or desktop menu
function  checkScreenSize() {

var mq = window.matchMedia("(min-width: 992px)");

if(mq.matches){
  [].forEach.call(nav_links, function(nav_link) {
    nav_link.removeAttribute("data-toggle");
    nav_link.removeAttribute("data-target");
  });

}else {
  [].forEach.call(nav_links, function(nav_link) {
    nav_link.setAttribute("data-toggle", "collapse");
    nav_link.setAttribute("data-target", "#nav_content");
  });
}
}

window.addEventListener("resize", checkScreenSize, false);
window.addEventListener("load", checkScreenSize, false);


//Changing content based on nav link
function changeContent(e){

  e.preventDefault();

    [].forEach.call(section1content, function(section){
      section.style.display="none";
    });

    [].forEach.call(section2content, function(section){
      section.style.display="none";
    });

    section1content[this.id].style.display="table-cell";
    section2content[this.id].style.display="block";


    [].forEach.call(nav_links, function(active_link) {
      active_link.classList.remove("active_link");
    });

    nav_links[this.id].classList.add("active_link");

}


[].forEach.call(nav_links, function(nav_link) {
  nav_link.addEventListener("click", changeContent, false);
});


//loading about page content based on 1st member
var team_members = document.querySelectorAll('.team_member'),
    member_captions = document.querySelectorAll('.member_caption'),

    about_title = document.querySelector(".about_title"),
    about_name = document.querySelector(".about_name"),
    about_desc = document.querySelector(".about_desc"),
    skills = document.querySelectorAll(".about_skill"),

    other_skills = document.querySelectorAll(".other_skills_con"),

    certifications = document.querySelectorAll(".cert"),

    about_section = document.querySelector("#section_two_content_about");



function showResume() {
  // console.log("show resume working");

  about_title.firstChild.nodeValue = aboutContent.carly.title;
  about_name.firstChild.nodeValue = aboutContent.carly.name;
  about_desc.firstChild.nodeValue = aboutContent.carly.desc;

//show technical skill bullet points
  [].forEach.call(skills, function(skill) {

      skill.firstChild.nodeValue = aboutContent.carly["point"+skill.dataset.box];
    });

  //show certifcations
    [].forEach.call(certifications, function(certification) {
    certification.firstChild.nodeValue = aboutContent.carly["cert"+certification.dataset.box];
      });

//show background image
  about_section.style.backgroundImage = aboutContent.carly.image;

}

window.addEventListener("load", showResume, false);





//Changing about page content based on team selection
function swapResume(){

  about_title.firstChild.nodeValue = aboutContent[this.id].title;
  about_name.firstChild.nodeValue = aboutContent[this.id].name;
  about_desc.firstChild.nodeValue = aboutContent[this.id].desc;

  var id = this.id;

  [].forEach.call(skills, function(skill) {
      skill.firstChild.nodeValue = aboutContent[id]["point"+skill.dataset.box];
    });

    [].forEach.call(certifications, function(certification) {
        certification.firstChild.nodeValue = aboutContent[id]["cert"+certification.dataset.box];
      });

      about_section.style.backgroundImage = aboutContent[id].image;


[].forEach.call(member_captions, function(active_member) {
    active_member.classList.remove("active_member");
  });

  if(id ==='carly') {
    member_captions[0].classList.add("active_member");
    other_skills[0].style.display="block";
    other_skills[1].style.display = "none";
  }

if(id ==='jenn') {
  member_captions[1].classList.add("active_member");
  other_skills[0].style.display="none";
  other_skills[1].style.display = "block";

}

}


[].forEach.call(team_members, function(team_member){
  team_member.addEventListener("click", swapResume, false);
})


















})();
