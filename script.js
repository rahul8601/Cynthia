"use strict";
//#######-Smooth-Scrolling-##########
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
//##################################//

//########################################//
// #######-Mouse-Moveing-cercal-##########//
let curser = document.querySelector("#curser-follower");
function cursor() {
  window.addEventListener("mousemove", function (dets) {
    curser.style.transform = `translate(${dets.clientX - 5}px, ${
      dets.clientY - 5
    }px)`;
  });
}
cursor();
// #######-Mouse-Moveing-cercal-END-######//
//########################################//

//#########################################//
//#########-Navbar-menu-btn-##############//

let menuBtn = document.querySelector("#menuBtn");
let hideNav = document.querySelector("#nav-hide");

menuBtn.addEventListener("click", function () {
  if (hideNav.classList.contains("hidenav")) {
    hideNav.style.transition = "0.5s";
    hideNav.style.transform = "translateY(0%)";
    return hideNav.classList.remove("hidenav");
  } else {
    hideNav.style.transition = " 0.5s";
    hideNav.style.transform = "translateY(-70%)";
    return hideNav.classList.add("hidenav");
  }

  // menuBtn.addEventListener("click", () => {
  //   menuBtn.style.display = "none";
  //   menuBtn.style.transition = "1s";
  //   hideNav.style.transform = "translateY(0%)";
  // });
  // menuBtn.addEventListener("click", () => {
  //   // menuBtn.style.display = "flex";
  //   hideNav.style.transform = "translateY(-70%)";
  //   // menuBtn.style.transition = "1s";
  // });
  // var btn = 2;
  // var btn2 = 3;

  //#########-Navbar-menu-btn-END##############//
  //#########################################//
});
let logo = document.querySelector("#nav h4 ");
let menu = document.querySelector("#nav #menuBtn");
function x() {
  logo.style.transform = "translateY(0%)";
  logo.style.transition = "1s";
}
x();
function y() {
  menu.style.transform = "translateY(0%)";
  menu.style.transition = "1s";
}
y();
/////////hero-bottom/////////
setTimeout(function () {
  let herobotm = document.querySelector("#bottom-text");
  function r() {
    herobotm.style.transform = "translatex(0px)";
    herobotm.style.transition = "1s";
  }
  r();
}, 1100);
/////////////////
let ht = document.querySelectorAll(".hth1");
ht.forEach(function (h) {
  h.style.transform = "translateY(0px)";
  h.style.transition = "1s";
});

/////////////
setTimeout(function () {
  let heroText = document.querySelector("#hero-font div h5");
  function heroT() {
    heroText.style.transform = "translateY(0px)";
    heroText.style.transition = "1s";
  }
  heroT();
}, 1000);
/////////////////////////

let botmText = document.querySelectorAll(".arrowh5");
let footerToptext = document.querySelectorAll("#footer-top div h5");

setTimeout(() => {
  footerToptext.forEach(function (e) {
    e.style.transform = "translateY(0px)";
    e.style.transition = "1s";
  });
}, "1500");

/////////////////////////

//#########################################//
//#########-section2-Show-img-##############//

let div1 = document.querySelectorAll(".flex");

// let img = document.querySelector(".flex img");
// console.log(div1);
function imgshow() {
  div1.forEach(function (e) {
    e.addEventListener("mouseover", function () {
      e.querySelector("img").style.opacity = "1";
      e.querySelector("h1").style.opacity = "0.3";
      e.querySelector("h4").style.opacity = "0.3";
      e.querySelector("h4").style.transition = "0.5s";
      e.querySelector("h1").style.transition = "0.5s";
      e.querySelector("h1").style.transform = "translateX(40px)";
    });
    e.addEventListener("mouseout", function () {
      e.querySelector("img").style.opacity = "0";
      e.querySelector("h1").style.opacity = "1";
      e.querySelector("h4").style.opacity = "1";
      e.querySelector("h4").style.transition = "0.5s";
      e.querySelector("h1").style.transition = "0.5s";
      e.querySelector("h1").style.transform = "translateX(0px)";
    });
  });
}

imgshow();

//#########-section2-Showimg-END##############//
//#########################################//

// let imgLocation = document.querySelector(".flex img");
// function imgfunc() {
//   div1.addEventListener("mousemove", function (dets) {
//     console.log(dets);
//     imgLocation.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
//   });
// }

// imgfunc();

//#########################################//
//#########-scroll-vhprot-section2-########//

const section2 = document.querySelector(".section2");

// console.log(section2);
const sectionObsrvr = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;
    // console.log(entry);

    if (!entry.isIntersecting) {
      // observer.unobserve(entry.target);
      entry.target.classList.add("scrollanimi");
      // console.log("add");
    } else {
      entry.target.classList.remove("scrollanimi");
      entry.target.style.transition = "1s";
      // console.log("remove");
      observer.unobserve(entry.target);
    }
  },
  {
    root: null,
    threshold: 0.15,
  }
);
sectionObsrvr.observe(section2);
//#########-scroll-vhprot-section2-END-########//
//############################################//

//#########################################//
//#########-scroll-vhprot-section3-########//
const section3About = document.querySelector(".about p");
const section3P = document.querySelector(".about-p");
const botmAbout = document.querySelector(".botm-about");
// console.log(section3P);
function vhprotanimi() {
  const secObsrve = new IntersectionObserver(
    function (entries, observer) {
      const [entry] = entries;
      // console.log(entry);

      if (!entry.isIntersecting) {
        // observer.unobserve(entry.target);
        entry.target.style.opacity = "0";
        // console.log("add");
      } else {
        entry.target.style.opacity = "1";
        entry.target.style.transition = "2s";
        // console.log("remove");
        observer.unobserve(entry.target);
      }
    },
    {
      root: null,
      threshold: 0.15,
    }
  );
  secObsrve.observe(section3About);
}
vhprotanimi();

function p() {
  function vhprotanimi() {
    const secObsrve = new IntersectionObserver(
      function (entries, observer) {
        const [entry] = entries;
        // console.log(entry);

        if (!entry.isIntersecting) {
          // observer.unobserve(entry.target);
          entry.target.style.opacity = "0";
          // console.log("add");
        } else {
          entry.target.style.opacity = "1";
          entry.target.style.transition = "2s";
          // console.log("remove");
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.15,
      }
    );
    secObsrve.observe(section3P);
  }
  vhprotanimi();
}
p();

function botAbout() {
  function vhprotanimi() {
    const secObsrve = new IntersectionObserver(
      function (entries, observer) {
        const [entry] = entries;
        // console.log(entry);

        if (!entry.isIntersecting) {
          // observer.unobserve(entry.target);
          entry.target.style.opacity = "0";
          // console.log("add");
        } else {
          entry.target.style.opacity = "1";
          entry.target.style.transition = "2s";
          // console.log("remove");
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.15,
      }
    );
    secObsrve.observe(botmAbout);
  }
  vhprotanimi();
}

botAbout();

//#########-scroll-vhprot-section3-END-########//
//############################################//

// sabse pahle gahr pr aoo
// gate kholo aur gate lagao
// khana pakao
// so jao

var prom = new Promise((res, rejct) => {
  return res("sabse pahle gahr pr aoo ");
});

prom.then(function (data) {
  console.log(data);
  return new Promise(function (res, rej) {
    return res("gate kholo aur gate lagao");
  }).then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
      return res("khana pakao");
    }).then(function (data) {
      console.log(data);
      return new Promise(function (res, rej) {
        return res("so jao");
      }).then(function (a) {
        console.log(a);
      });
    });
  });
});
