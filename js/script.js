const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menu-btn');

const onMenuBtnClick = () => {
  menuBtn.classList.toggle('open');
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
};

menuBtn.addEventListener('click', onMenuBtnClick);
