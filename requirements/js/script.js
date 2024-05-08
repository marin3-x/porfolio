
function showAlert() {
    alert("the website is under construction");
}

var typed = new Typed(".auto-type", {
    strings: ["web dev.", "web3 dev.", "app dev."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

let curTheme = "light";
let themeBtn = document.querySelector("#themeBtn");
let a = document.querySelectorAll('.nav-link');

themeBtn.addEventListener("click", () => {
    if (curTheme === "light") {
        curTheme = "dark";
        document.querySelector("body").setAttribute("class", "dark");
        for (let link of a) {
            link.classList.add("a-dark");
        }
        document.querySelector(".myAbout").classList.add("myAbout-dark");
        document.querySelector("#themeBtn").setAttribute("class", "ri-sun-line");
    } else {
        curTheme = "light";
        document.querySelector("body").setAttribute("class", "light");
        for (let link of a) {
            link.classList.remove("a-dark");
            document.querySelector(".myAbout").classList.remove("myAbout-dark");
            document.querySelector("#themeBtn").setAttribute("class", "ri-moon-line");
        }
    }
});
let loaderAnimation = (() => {
    let tl = gsap.timeline();

    tl.from("#loader h3", {
        x: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1
    })
    .to("#loader h3", {
        opacity: 0,
        x: -10,
        duration: 1,
        stagger: 0.1
    })
    .to("#loader", {
        opacity: 0,
        duration: 0.1,
        display: "none"
    });

    return tl;
});let pageAnimation = (() => {
    let tl = gsap.timeline();

    tl.from(".logo", { duration: 0.5, opacity: 0, y: -50, ease: "power4.out" })
    tl.from("#themeBtn", { duration: 0.8, opacity: 0, y: -50, stagger: 0.2, ease: "power4.out" }, "-=0.5")
      tl.from(".nav-link", { duration: 0.8, opacity: 0, y: -50, stagger: 0.2, ease: "power4.out" }, "-=0.5")
      tl.from(".ri-menu-3-fill", { duration: 0.8, opacity: 0, x: 50, ease: "power4.out" }, "-=0.5")
      tl.from(".left", { duration: 0.8, opacity: 0, x: -50, ease: "power4.out" }, "-=0.5")
      tl.from(".right", { duration: 0.8, opacity: 0, x: 50, ease: "power4.out" }, "-=0.5")
      tl.from(".social a", { duration: 0.8, opacity: 0, y: 50, stagger: 0.2, ease: "power4.out" }, "-=0.5");

    return tl;
});

let masterTimeline = gsap.timeline();
masterTimeline.add(loaderAnimation()).add(pageAnimation());

