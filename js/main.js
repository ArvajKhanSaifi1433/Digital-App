const ham = document.querySelector("#ham");
const menu = document.querySelector("#menu");
const solid = document.querySelector(".fa-solid");
const hlink = document.querySelectorAll("#hlink");

ham.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  solid.classList.toggle("fa-xmark");
});

hlink.forEach((element) => {
  element.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    solid.classList.toggle("fa-xmark");
  });
});

// testimonial

let userTexts = document.getElementsByClassName("user-text");
let userPics = document.getElementsByClassName("user-pic");

function showReview() {
  for (const userPic of userPics) {
    userPic.classList.remove('active-pic')
  }
  for (const userText of userTexts) {
    userText.classList.remove('active-text')
  }

  let i = Array.from(userPics).indexOf(event.target)
  userPics[i].classList.add('active-pic')
  userTexts[i].classList.add('active-text')
}


let x = document.getElementById('tog')

let f = document.querySelectorAll('.fn')
let b = document.querySelectorAll('.bn')

x.addEventListener('change',(e)=>{
  for(let x of f){
    x.classList.toggle('rot1')
  }
  for(let y of b){
    y.classList.toggle('rot2')
  }
})

