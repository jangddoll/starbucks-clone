//searchInput
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
    searchInputEl.focus();
})
searchInputEl.addEventListener("focus", function () {
    searchEl.classList.add("focused");
    searchInputEl.setAttribute("placeholder", "통합검색");
})
searchInputEl.addEventListener("blur", function () {
    searchEl.classList.remove("focused");
    searchInputEl.setAttribute("placeholder", "");
})

//move-nav 열고 닫기
const berger = document.querySelector(".berger");
const moBtn = document.querySelector(".move-btn");
const moBg = document.querySelector(".move-nav_bg")
const moNav = document.querySelector(".move-nav");

berger.addEventListener("click", function () {
    moNav.classList.add("on");
    moBg.style.display = "block";
})
moBtn.addEventListener("click", function () {
    moNav.classList.remove("on");
    moBg.style.display = "none";
})

//move-nav
const navTit = document.querySelectorAll("nav .move-list-dep1 .tit");
const navList = document.querySelectorAll("nav .move-list-dep2");

function navClick(e) {
    for (var i = 0; i < navList.length; i++) {
        e.currentTarget.parentNode.classList.toggle("on")
    }
}
for (var i = 0; i < navTit.length; i++) {
    navTit[i].addEventListener("click", navClick);
}

function navClick02(e) {
    for (var i = 0; i < navList.length; i++) {
        e.target.parentNode.classList.toggle("on")
    }
}
for (var i = 0; i < navList.length; i++) {
    navList[i].addEventListener("click", navClick02);
}

//main-visual gsap
const fadeEls = document.querySelectorAll(".main-visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    });
});

//notice swiper
var swiper1 = new Swiper(".notice .swiper", {
    direction: "vertical",
    autoplay: true,
    loop: true
});

//main-banner gsap
gsap.to(".main-banner .fade-in", {
    duration: 3,
    opacity: 1
});
gsap.to(".main-banner .move", {
    duration: 3,
    x: 0
});

//reserve gsap
gsap.to(".reserve .fade-in", {
    duration: 3,
    opacity: 1
});

//Pick
gsap.registerPlugin(ScrollTrigger);

//모바일 버전
gsap.to(".pick .fade-in", {
    scrollTrigger: {
        trigger: ".pick",
        start: "300px center",
        end: "bottom 200px",
        markers: true,
        toggleActions: "restart none none reverse"
    },
    duration: 0.3,
    opacity: 1
})

//pc 버전
gsap.to(".pick .move01", {
    scrollTrigger: {
        trigger: ".pick",
        markers: true,
        start: "top center",
        end: "bottom 200px",
        toggleActions: "restart none none reverse",
        toggleClass: {
            targets: ".move01", 
            className: "on"
        }
    },
})
gsap.to(".pick .move02", {
    scrollTrigger: {
        trigger: ".pick",
        markers: true,
        start: "top center",
        end: "bottom 200px",
        toggleActions: "restart none none reverse",
        toggleClass: {
            targets: ".move02",
            className: "on"
        }
    },
    
})

//magazine gsap
gsap.to(".magazine .fade-in", {
    duration: 3,
    opacity: 1
});

// store
gsap.registerPlugin(ScrollTrigger);

// (function () {
//     var controller = new ScrollMagic.Controller();

//     var scene1 = new ScrollMagic.Scene({
//         triggerElement: ".store"
//     })
//         .addTo(controller)
//         .setClassToggle(".store-text01", "on")
//     var scene2 = new ScrollMagic.Scene({
//         triggerElement: ".store-img02"
//     })
//         .addTo(controller)
//         .setClassToggle(".store-text02", "on")

//     var scene3 = new ScrollMagic.Scene({
//         triggerElement: ".store .store-img03",
//         offset: 100
//     })
//         .addTo(controller)
//         .setClassToggle(".store-btn", "on")

//     var tweenStagger = TweenMax.staggerFromTo(".store .move", 0.5,
//         {
//             opacity: 0,
//             right: -700
//         },
//         {
//             opacity: 1,
//             right: 260
//         },
//         0.3
//     );
//     var scene4 = new ScrollMagic.Scene({
//         triggerElement: ".store",
//         offset: -100
//     })
//         .setTween(tweenStagger)
//         .addTo(controller)
// }());

//fnb
const fnb01 = document.querySelectorAll(".fnb-item-dep1");
const fnb02 = document.querySelectorAll(".fnb-list-dep2");

for (var i = 0; i < fnb01.length; i++) {
    fnb01[i].addEventListener("click", function (e) {
        e.preventDefault();
        for (var j = 0; j < fnb01.length; j++) {
            fnb01[j].parentNode.classList.remove("on")
            fnb01[j].classList.remove("on")
        }
        this.parentNode.classList.add("on")
        this.classList.add("on")
    })
}

//footer-awards
var swiper3 = new Swiper(".footer-awards .swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        660: {
            slidesPerView: 3
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});





