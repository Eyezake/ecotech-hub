document.addEventListener('DOMContentLoaded',()=>{const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}const form=document.querySelector('#contact-form');if(form){form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const subject=encodeURIComponent(`EcoTech Hub message: ${data.get('topic')}`);const body=encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);window.location.href=`https://github.com/Eyezake/ecotech-hub/issues/new?title=${subject}&body=${body}`;});}});
const toggle = document.getElementById('theme-toggle');
const saved = localStorage.getItem('theme') || 
  (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', saved);

toggle?.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});   
