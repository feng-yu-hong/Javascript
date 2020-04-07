const slider = document.querySelector(".slider");
const slides = document.querySelector(".slide");
let activeSlide = 0;

function changeSlide(){
    slides[activeSlide].classList.remove("visible");
    activeSlide++;
    if(activeSlide >= slides.lenght){
        activeSlide = 0;
    }
    slides[activeSlide].classList.add("visible");
}

//设置动画开始事件
slider.addEventListener('animationstart',() => {
    setInterval(changeSlide,2500);
})