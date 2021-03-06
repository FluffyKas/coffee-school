const form = document.querySelector(".newsletter-right");
const email = document.querySelector(".email");
const errorMessage = document.querySelector(".error-message");

form.addEventListener("submit", e => {
  e.preventDefault();

  checkInput();
});

function checkInput() {

  const emailValue = email.value.trim();

  if (emailValue === "") {
    errorMessage.className = "error-message error";
    errorMessage.innerText ="Email cannot be empty";
  } else if (!isItEmail(emailValue)) {
    errorMessage.className = "error-message error";
    errorMessage.innerText = "Looks like this is not an email";
  } else {
    alert("You subscribed successfully!");
  };
};

//checking email input validity
function isItEmail (email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};

// REVEAL ON SCROLL ANIMATION

window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for(let i = 0; i < reveals.length; i++) {

    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 80;

    if(revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}