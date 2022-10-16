const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(() => {
  fillContent();
}, 2500);

function fillContent() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1661344853432-97655cdb17bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80" alt=""/>';
  title.innerHTML = "Lorem ipsum dolor sit amet.";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, quae.";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/35.jpg" alt="">';
  name.innerHTML = "John Doe";
  date.innerHTML = "Oct 25, 2022";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bgt) => bgt.classList.remove("animated-bg-text"));
}
