// Registration Form Validation
const form = document.getElementById("form");
const success = document.getElementById("success");

const fields = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  password: document.getElementById("password"),
  confirm: document.getElementById("confirm"),
};

function setState(input, valid, message="") {
  input.classList.remove("valid","invalid");
  input.classList.add(valid ? "valid" : "invalid");
  input.closest(".field").querySelector("small").textContent = valid ? "" : message;
  return valid;
}

function validate() {
  let ok = true;
  ok = setState(fields.name, fields.name.value.trim().length >= 3, "Minimum 3 characters") && ok;
  ok = setState(fields.email,/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value),"Enter a valid email") && ok;
  ok = setState(fields.phone,/^\+?\d{7,15}$/.test(fields.phone.value),"Enter a valid phone number") && ok;
  ok = setState(fields.password,/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(fields.password.value),"Minimum 8 characters, 1 uppercase, 1 number") && ok;
  ok = setState(fields.confirm,fields.confirm.value === fields.password.value && fields.confirm.value !== "","Passwords do not match") && ok;
  success.textContent = ok ? "Registration successful!" : "";
  return ok;
}

form.addEventListener("submit", e => {
  e.preventDefault();
  validate();
});

document.getElementById("toggle").addEventListener("click", function () {
  const p = fields.password;
  p.type = p.type === "password" ? "text" : "password";
  this.textContent = p.type === "password" ? "Show" : "Hide";
});
