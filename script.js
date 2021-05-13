window.onload = () => {
  const mainBtn = document.querySelector(".main_btn"),
        heroDesc = document.querySelector(".hero_description"),
        heroRight = document.querySelector(".standout"),
        heroLeft = document.querySelector(".hero_heading");
  const insertLeft = () => heroLeft.classList.add("movein2"),
        insertRight = () => heroRight.classList.add("movein"),
        insertLine = () => heroDesc.classList.add("movein3"),
        showBtn = () => mainBtn.classList.add("movein4");
  setTimeout(insertLeft, 100);
  setTimeout(insertRight, 900);
  setTimeout(insertLine, 1900);
  setTimeout(showBtn, 3000);
}

const mobNavi = document.querySelector("#mobile_menu"); //for mobile menu cross/hbar
const menuLinks = document.querySelector(".navbar_menu"); //mobile menu container and elems
const navLogo = document.querySelector("#navbar_logo"); // main logo

function toggleMobMenu() {
/*   const isActive2 = document.querySelector(".active2");
  if(isActive2 && window.innerWidth <= 960) */
  menuLinks.classList.toggle("active");
  mobNavi.classList.toggle("active2");
}

function dismissMenu() {
  const isActive = document.querySelector(".active");

  if(isActive && window.innerWidth <= 960) {
    menuLinks.classList.remove("active");
    mobNavi.classList.remove("active2");
  }
}

const navHiliter = () => {
  let winWidth = window.innerWidth;
  let scrollVal = window.scrollY;
  const hlSelect = document.querySelector(".hilite"),
        homeLink = document.querySelector("#home_link"),
        aboutLink = document.querySelector("#about_link"),
        productsLink = document.querySelector("#products_link"),
        navBar = document.querySelector(".navigation");

  if(winWidth > 960 && scrollVal <= 615) {
    aboutLink.classList.remove("hilite");
    homeLink.classList.add("hilite");
  } else if(winWidth > 960 && scrollVal <= 1650) {
    homeLink.classList.remove("hilite");
    aboutLink.classList.add("hilite");
    productsLink.classList.remove("hilite");
  } else if(winWidth > 960 && scrollVal <= 2450) {
    aboutLink.classList.remove("hilite");
    productsLink.classList.add("hilite");
  }

  if((scrollVal > 2550 && hlSelect) || winWidth <= 960 && hlSelect) {
    hlSelect.classList.remove("hilite");
  }

  if(scrollVal > 60) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }

}

//highlight Navigation items according to scrollY position
window.addEventListener("scroll", navHiliter);

// toggle mobile dropdown / floating menu
mobNavi.addEventListener("click", toggleMobMenu);

//dismiss mobile dropdown / floating menu
menuLinks.addEventListener("click", dismissMenu);
navLogo.addEventListener("click", dismissMenu);

