const BUSINESS_NAME = "If You Could You Wood Woodworx";
const BUSINESS_EMAIL = "iycywcw@gmail.com";
const BUSINESS_PHONE = "(940) 287-4637";

document.querySelectorAll('[data-business-name]').forEach(el => el.textContent = BUSINESS_NAME);
document.querySelectorAll('[data-email]').forEach(el => { el.textContent = BUSINESS_EMAIL; el.href = `mailto:${BUSINESS_EMAIL}`; });
document.querySelectorAll('[data-phone]').forEach(el => { el.textContent = BUSINESS_PHONE; el.href = 'tel:+19402874637'; });
document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
if (menu) menu.addEventListener('click', () => nav.classList.toggle('open'));
const form = document.getElementById('quote-form');
if (form) form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`Quote Request — ${data.get('name')}`);
  const body = encodeURIComponent(`Name: ${data.get('name')}\nPhone or Email: ${data.get('contact')}\n\nProject:\n${data.get('project')}`);
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});