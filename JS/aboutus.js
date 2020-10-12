const slider = document.querySelector('.slides');
const slideDivs = document.querySelectorAll('.slides div.review-slide');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 1;
const size = slideDivs[0].clientWidth;

slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', function(){
    if(counter >= slideDivs.length -1){
        return;
    }
    slider.style.transition = "transform 0.6s ease-in-out";
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', function(){
    if(counter <= 0 ){
        return;
    }
    slider.style.transition = "transform 0.6s ease-in-out";
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

slider.addEventListener('transitionend', function(){
    if(slideDivs[counter].id == 'lastClone'){
        slider.style.transition = "none";
        counter = slideDivs.length -2;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(slideDivs[counter].id == 'firstClone'){
        slider.style.transition = "none";
        counter = slideDivs.length - counter;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})