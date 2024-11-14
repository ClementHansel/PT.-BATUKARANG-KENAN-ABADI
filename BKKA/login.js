// Left to Right animation
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Up to Down Animation
const containermobile = document.getElementById("containermobile");
const registermobileBtn = document.getElementById("registermobile");
const loginmobileBtn = document.getElementById("loginmobile");

registermobileBtn.addEventListener("click", () => {
  containermobile.classList.add("active");
});

loginmobileBtn.addEventListener("click", () => {
  containermobile.classList.remove("active");
});
