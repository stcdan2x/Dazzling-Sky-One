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

const mainBtn = document.querySelector(".main_btn"),
      heroDesc = document.querySelector(".hero_description"),
      heroRight = document.querySelector(".standout"),
      heroLeft = document.querySelector(".hero_heading");
document.addEventListener("DOMContentLoaded", () => {
  const insertLeft = () => heroLeft.classList.add("movein2"),
        insertRight = () => heroRight.classList.add("movein"),
        insertLine = () => heroDesc.classList.add("movein3"),
        showBtn = () => mainBtn.classList.add("movein4");
  setTimeout(insertLeft, 100);
  setTimeout(insertRight, 500);
  setTimeout(insertLine, 1500);
  setTimeout(showBtn, 3000);
});




/* const scrollFun = () => {
  let scrollVal = window.scrollY;
  console.log(scrollVal);
}

window.addEventListener("scroll", scrollFun); */





//Reveal Mobile Navigation Menu

/* const mobMenu = () => {
  mobNavi.classList.toggle("active2");
  menuLinks.classList.toggle("active");
}

mobNavi.addEventListener("click", mobMenu);

const hlNav = () => {
  const hlSelect = document.querySelector(".hilite");
  const hlHome = document.querySelector("#home_link");
  const hlAbout = document.querySelector("#about_link");
  const hlProducts = document.querySelector("#products_link");
  
  let scrollCoord = window.scrollY;
  if(window.innerWidth > 960 && scrollCoord < 600)  {
    hlHome.classList.add("hilite");
    hlAbout.classList.remove("hilite");
  } else if(window.innerWidth > 960 && scrollCoord < 1400) {
    hlAbout.classList.add("hilite");
    hlHome.classList.remove("hilite");
    hlProducts.classList.remove("hilite");
  } else if(window.innerWidth > 960 && scrollCoord < 2345) {
    hlProducts.classList.add("hilite");
    hlAbout.classList.remove("hilite")
  }

  if ((hlSelect && window.innerWidth <= 960) || hlSelect) {
    elem.classList.remove("hilite");
  }
}

window.addEventListener("scroll", hlNav);
window.addEventListener("click", hlNav);



const hideMobMenu = () => {
  const mobMenuBar = document.querySelector(".active2");
  if(mobMenuBar && window.innerWidth <= 960) {
    menuLinks.classList.remove("active");
    mobMenuBar.classList.remove("active2");
  }
}

menuLinks.addEventListener("click", hideMobMenu);
navLogo.addEventListener("click", hideMobMenu); */