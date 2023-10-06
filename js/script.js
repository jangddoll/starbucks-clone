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


ScrollTrigger.matchMedia({
    // mobile
    "(max-width: 959px)": function () {
        gsap.to(".pick .move01", {
            scrollTrigger: {
                trigger: ".pick",
                start: "400px center",
                end: "bottom 200px",
                toggleActions: "restart none none reverse"
            },
            duration: 1,
            opacity: 1
        });
        gsap.to(".pick .move02", {
            scrollTrigger: {
                trigger: ".pick",
                start: "400px center",
                end: "bottom 200px",
                toggleActions: "restart none none reverse"
            },
            opacity: 1,
            duration: 1,
            delay: 0.5
        });
        gsap.to(".pick .pick-btn", {
            scrollTrigger: {
                trigger: ".pick",
                start: "400px center",
                end: "bottom 200px",
                toggleActions: "restart none none reverse"
            },
            opacity: 1,
            duration: 1,
            delay: 1.5
        });
    },
    // PC
    "(min-width: 960px)": function () {
        gsap.to(".pick .move01", {
            scrollTrigger: {
                trigger: ".pick",
                start: "top center",
                endTrigger: ".footer",
                end: "bottom 200px",
                toggleActions: "restart none none reverse"
            },
            left: "200px",
            opacity: 1,
            duration: 1.5
        })
        gsap.to(".pick .move02", {
            scrollTrigger: {
                trigger: ".pick",
                start: "top center",
                endTrigger: ".footer",
                end: "bottom 200px",
                toggleActions: "restart none none reverse",
            },
            left: "97px",
            opacity: 1,
            duration: 1.5,
            delay: 0.5
        })
        gsap.to(".pick .pick-btn", {
            scrollTrigger: {
                trigger: ".pick",
                start: "top center",
                endTrigger: ".footer",
                end: "bottom 200px",
                toggleActions: "restart none none reverse",
            },
            opacity: 1,
            duration: 1.5,
            delay: 1.5
        })
    }

})

//magazine gsap
gsap.to(".magazine .fade-in", {
    duration: 3,
    opacity: 1
});

// store
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    //mobile
    "(max-width: 959px)": function() {
        gsap.to(".store .store-txt01", {
            scrollTrigger: {
                trigger: ".store",
                start: "top center",
                endTrigger: ".footer",
                end: "bottom 200px",
                toggleActions: "restart none none reverse",
            },
            top: 360,
            opacity: 1,
            duration: 1.5
        })
        gsap.to(".store .store-txt02", {
            scrollTrigger: {
                trigger: ".store",
                start: "top center",
                endTrigger: ".footer",
                end: "bottom 200px",
                toggleActions: "restart none none reverse"
            },
            top: 430,
            opacity: 1,
            duration: 1.5,
            delay: 0.5
        })
        gsap.to(".store .store-btn", {
            scrollTrigger: {
                trigger: ".store",
                start: "top center",
                endTrigger: ".footer",
                end: "bottom 200px",
                toggleActions: "restart none none reverse"
            },
            opacity: 1,
            duration: 1.5,
            delay: 1.5
        })
    },

    //PC
    "(min-width: 960px)": function (){
        gsap.to(".store .store-txt01", {
            scrollTrigger: {
                trigger: ".store",
                start: "top center",
                endTrigger: ".footer",
                end: "bottom 200px",
                toggleActions: "restart none none reverse"
            },
            opacity: 1,
            right: 162,
            duration: 1.5
        })
        gsap.to(".store .store-txt02", {
            scrollTrigger: {
                trigger: ".store",
                start: "top center",
                endTrigger: ".footer",
                end: "bottom 200px",
                toggleActions: "restart none none reverse"
            },
            opacity: 1,
            right: 168,
            duration: 1.5,
            delay: 0.5
        })
        gsap.to(".store .store-btn", {
            scrollTrigger: {
                trigger: ".store",
                start: "top center",
                endTrigger: ".footer",
                end: "bottom 200px",
                toggleActions: "restart none none reverse"
            },
            opacity: 1,
            right: 408,
            duration: 1.5,
            delay: 1
        })
    }
})

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





