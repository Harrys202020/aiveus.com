
document.getElementById('toggle-dark').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
window.onload = () => {
  if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');
};
