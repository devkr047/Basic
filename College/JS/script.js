const header2=document.querySelector(".header2");
window.addEventListener('scroll',function(){
if(window.scrollY>=58){
    header2.classList.add('active');
}
    else{
        header2.classList.remove('active');
    }
});
window.addEventListener('load',changeSlide);
const sliderContainer=document.getElementById('slider-container');
const leftBtn=document.getElementById("left");
const rightBtn=document.getElementById("right");
let slides=['Images/slider0.jpg','Images/slider1.webp','Images/slider2.webp','Images/slider3.webp','Images/slider4.webp','Images/slider5.webp','Images/slider6.jpg','Images/slider7.webp','Images/slider8.jpg','Images/slider9.jpg'];
let i=0;
function clickedLeft(){
i--;
timeout=7000;
changeSlide();
}
function changeSlide(){

    sliderContainer.style.backgroundImage = "url('"+slides[i]+"')";
    i = (i + 1) % slides.length;
    window.setTimeout(changeSlide, timeout);
}

const vidGlass=document.getElementById('vid-glass');
const vidPlayBtn=document.getElementById('vid-play-btn');
vidGlass.addEventListener('mouseover',function(){
    vidPlayBtn.classList.remove('no-active');
    vidPlayBtn.classList.add('active');
});

vidGlass.addEventListener('mouseout',function(){
    vidPlayBtn.classList.add('no-active');
    vidPlayBtn.classList.remove('active');
});

const faqVid=document.getElementById('faq-vid-sec');
const faqPlayBtn=document.getElementById('faq-play-btn');


faqVid.addEventListener('mouseover',function(){
    faqPlayBtn.classList.remove('no-active');
    faqPlayBtn.classList.add('active');
});

faqVid.addEventListener('mouseout',function(){
    faqPlayBtn.classList.add('no-active');
    faqPlayBtn.classList.remove('active');
});