let section = document.querySelector(".left-section");
let section_skills = document.querySelectorAll(".box span");

let section1 = document.querySelector(".skills-header2");

let section_skills1 = document.querySelectorAll(".boxses1 span");

let section_right_down = document.querySelector(".right-down");

let right_down = document.querySelectorAll(".right-down div");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    section_skills.forEach((span) => {
      span.style.width = span.dataset.width;
      span.style.backgroundColor = span.dataset.color;
    });
  }

  if (window.scrollY >= section_right_down.offsetTop - 450) {
    right_down.forEach((div) => {
      div.style.left = div.dataset.left;
    });
  }
};

let right_section = document.querySelector(".right-section");

let right_section_box = document.querySelectorAll(".right-section div");

let all_section = document.querySelector(".all-sections");
let left_section = document.querySelectorAll(".all-sections .left-section");

window.onload = function () {
  if (window.scrollY >= right_section.offsetTop) {
    right_section_box.forEach((div) => {
      div.style.right = div.dataset.right;
    });
    if (window.scrollY >= all_section.offsetTop) {
      left_section.forEach((left_section) => {
        console.log("hi");

        left_section.style.left = left_section.dataset.leftsection;
      });
    }
  }
};
