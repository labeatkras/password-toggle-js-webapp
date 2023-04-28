const passwordInput = document.querySelector("#password-input");
const togglePasswordBtn = document.querySelector("#toggle-password-btn");

const current = document.querySelector("#current-value");

current.oninput = (event) => {
  passwordInput.value = current.textContent;
};

togglePasswordBtn.addEventListener("click", () => {
  passwordInput.classList.toggle("current");

  if (passwordInput.classList.contains("current")) {
    togglePasswordBtn.innerHTML = "Hide Password";
    passwordInput.type = "text";
  } else {
    togglePasswordBtn.innerHTML = "Show Password";
    passwordInput.type = "password";
  }
});
