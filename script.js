// Add the real shop details below when ready. Leave empty to show placeholders.
const SHOP_PHONE = '9102531312';
const SHOP_ADDRESS = 'Indraprasth Colony, Jora Talab, Bariatu, Ranchi, Jharkhand - 834009';
const SHOP_MAP_URL = 'https://www.google.com/maps/search/?api=1&query=Indraprasth%20Colony%20Jora%20Talab%20Bariatu%20Ranchi%20834009';

const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
if (SHOP_ADDRESS.trim()) document.getElementById('address').textContent = SHOP_ADDRESS;
if (SHOP_PHONE.trim()) {
  document.getElementById('phone').textContent = SHOP_PHONE;
  const a = document.createElement('a');
  a.href = 'tel:' + SHOP_PHONE.replace(/[^+\d]/g, '');
  a.textContent = 'Call the Shop';
  document.getElementById('contactActions').appendChild(a);
}
if (SHOP_MAP_URL.trim()) {
  const a = document.createElement('a');
  a.href = SHOP_MAP_URL;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.textContent = 'Get Directions';
  document.getElementById('contactActions').appendChild(a);
}
