const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
if(menu&&nav){menu.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
const form=document.querySelector('#quote-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent('Woodworx Quote Request from '+d.get('name'));const body=encodeURIComponent(`Name: ${d.get('name')}\nPhone/Email: ${d.get('contact')}\n\nProject:\n${d.get('project')}`);window.location.href=`mailto:iycywcw@gmail.com?subject=${subject}&body=${body}`;const note=document.querySelector('#form-note');if(note)note.textContent='Your email app should open with the quote request ready to send.'})}
const modal=document.querySelector('#photo-modal');
if(modal){const modalImg=modal.querySelector('img'),caption=modal.querySelector('.modal-caption');document.querySelectorAll('[data-full]').forEach(card=>card.addEventListener('click',()=>{modalImg.src=card.dataset.full;modalImg.alt=card.dataset.alt||'';caption.textContent=card.dataset.title||'';modal.classList.add('open')}));const close=()=>modal.classList.remove('open');modal.querySelector('.modal-close').addEventListener('click',close);modal.addEventListener('click',e=>{if(e.target===modal)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()})}
const filters=document.querySelectorAll('[data-filter]');
if(filters.length){const cards=document.querySelectorAll('.work-card');filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;cards.forEach(c=>c.style.display=(f==='all'||c.dataset.category===f)?'block':'none')}))}
