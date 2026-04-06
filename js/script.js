const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    item.classList.add('active');
  });
});
function goToPage() {
  window.location.href = "all.html"; // page tujuan
}
