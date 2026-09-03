// CHANGE THESE THREE VALUES BEFORE PUBLISHING.
const BUSINESS_NAME = "If You Could You Wood Woodworx";
const BUSINESS_EMAIL = "iycywcw@gmail.com";
const BUSINESS_PHONE = "(940) 287-4637";

document.querySelectorAll("[data-business-name]").forEach(el => el.textContent = BUSINESS_NAME);
document.querySelectorAll("[data-email]").forEach(el => {
  el.textContent = BUSINESS_EMAIL;
  el.href = "mailto:" + BUSINESS_EMAIL;
});
document.querySelectorAll("[data-phone]").forEach(el => {
  el.textContent = BUSINESS_PHONE;
  el.href = "tel:" + BUSINESS_PHONE.replace(/[^0-9+]/g, "");
});
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("quote-form").addEventListener("submit", function(e){
  e.preventDefault();
  const data = new FormData(this);
  const subject = encodeURIComponent("New Custom Woodworking Quote Request");
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nContact: ${data.get("contact")}\n\nProject:\n${data.get("project")}`
  );
  if (BUSINESS_EMAIL.includes("YOUR_EMAIL")) {
    document.getElementById("form-note").textContent =
      "Almost ready! Open script.js and replace YOUR_EMAIL@example.com with your real email.";
    return;
  }
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});
