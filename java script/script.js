console.log("Witam serdecznie!")
let button = document.querySelector(".js-viewLess");
let aboutMe = document.querySelector(".section__p");

button.addEventListener("click", () => {
    aboutMe.remove()
});


let button2 = document.querySelector(".js-changeBackground");
let body = document.querySelector("body");

button2.addEventListener("click", () => {
    if (button2.innerText === "Zmień tło na ciemne") {
        body.classList.add("body--darkBackground");
        button2.innerText = "Ustaw jasne tło";
    } else if (button2.innerText === "Ustaw jasne tło") {
        body.classList.remove("body--darkBackground");
        button2.innerText = "Zmień tło na ciemne";
    }
});

let button3 = document.querySelector(".js-selectPlace");
let coldPlace = document.querySelector(".js-cold");
let hotPlace = document.querySelector(".js-hot");

button3.addEventListener("click", () => {
    if (button3.innerText === "Najzimniejsze miejsce") {
        coldPlace.classList.add("table__row--important")
        hotPlace.classList.remove("table__row--important");
        button3.innerText = "Najcieplejsze miejsce"
    } else if (button3.innerText === "Najcieplejsze miejsce") {
        hotPlace.classList.add("table__row--important");
        coldPlace.classList.remove("table__row--important");
        button3.innerText = "Najzimniejsze miejsce"
    }
});