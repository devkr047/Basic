const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
const descrip = ["Alaska moose, or Alaskan moose in Alaska, or giant moose and Yukon moose in Canada, is a subspecies of moose that ranges from Alaska to western Yukon. The Alaska moose is the largest subspecies of moose.", "Moose or Elk is the world's tallest, largest and heaviest extant species of deer and the only species in the genus Alces. It is also the tallest, and the second-largest, land animal in North America, falling short only of the American bison in body mass.", "African bush elephant, also known as the African savanna elephant, is one of two extant African elephant species and one of three extant elephant species.", "Leopard is one of the five extant species in the genus Panthera. It has a pale yellowish to dark golden fur with dark spots grouped in rosettes. Its body is slender and muscular reaching a length of 92 to 183 cm with a 66 to 102 cm long tail and a shoulder height of 60 to 70 cm."]
const sliderTitle = document.getElementById("titleSlider");
var slider = document.getElementById("slider");
var description = document.getElementById("description");
let i = -1;
let timeReset;
function autoChange() {
    nextSlide();
    timeReset = setTimeout(autoChange, 7000);
}
function previousautoChange() {
    timeReset = setTimeout(autoChange, 7000);
}
function nextSlide() {
    if (i == images.length - 1) {
        i = 0;
    }
    else {
        i++;
    }
    slider.src = "Images/" + images[i];
    description.innerHTML = descrip[i];

    slider.style.animation = "none";
    slider.offsetHeight;
    slider.style.opacity = "0";
    slider.style.animation = "popOut 1s ease forwards";

    description.style.animation = "none";
    description.offsetHeight;
    description.style.opacity = "0";
    description.style.animation = "slideRight 1.5s ease-in-out forwards";
    description.style.animationDelay = "0.2s";
}
function clickedNext() {
    clearTimeout(timeReset);
    autoChange();
}
function previousSlide() {
    if (i == 0) {
        i = images.length - 1;
    }
    else {
        i--;
    }
    slider.src = "Images/" + images[i];
    description.innerHTML = descrip[i];

    slider.style.animation = "none";
    slider.offsetHeight;
    slider.style.opacity = "0";
    slider.style.animation = "popOut 1s ease forwards";

    description.style.animation = "none";
    description.offsetHeight;
    description.style.opacity = "0";
    description.style.animation = "slideRight 1.5s ease-in-out forwards";
    description.style.animationDelay = "0.2s";

    clearTimeout(timeReset);
    previousautoChange();
}