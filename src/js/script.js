const menuButtonIdle = document.querySelector(".menu-icon--idle");
const menuButtonOpen = document.querySelector(".menu-icon--open");
const navBar = document.querySelector('.navigation');
const menuIcon = document.querySelector('.menu-icon');

function openMenu() {
  navBar.style.display = "block";
  menuButtonIdle.style.display = "none";
  menuButtonOpen.style.display = "block";
}

function closeMenu() {
  navBar.style.display = "none";
  menuButtonIdle.style.display = "block";
  menuButtonOpen.style.display = "none";
}

function handleResize() {
  const screenWidth = window.innerWidth;
 
  let refElem = document.querySelector('.logo__title');
let refElemDisplay = window.getComputedStyle(refElem).getPropertyValue('display');
 
  
  if (refElemDisplay === 'none') {
    navBar.style.display = "none";
    menuButtonIdle.style.display = "block";
    menuButtonOpen.style.display = "none";
  } else if (refElemDisplay === 'block'){
    navBar.style.display = "block";
    menuButtonIdle.style.display = "none";
    menuButtonOpen.style.display = "none";
  }
}


menuButtonIdle.addEventListener('click', openMenu);
menuButtonOpen.addEventListener('click', closeMenu);
window.addEventListener('resize', handleResize);


handleResize();
