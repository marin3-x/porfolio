
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
