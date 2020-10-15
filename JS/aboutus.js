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

var myDiv = document.getElementById("hiddenMenu");
var backBeneath = document.getElementById("beneath");
const defer = myDiv.clientWidth;

function showDiv() {
  if (myDiv.style.left = "-70%") {
    myDiv.style.transform = 'translateX(' + defer + 'px)';
    myDiv.style.opacity = "1";
    myDiv.style.display = "block";
    document.body.style.position = 'fixed';
  } 

  if(backBeneath.style.visibility = "hidden") {
    backBeneath.style.visibility = "visible";
    backBeneath.style.opacity = "1";
  }
}

function hideDiv() {
  if (myDiv.style.left = "0%") {
    myDiv.style.transform = 'translateX(-' + defer + 'px)';
    myDiv.style.opacity = "0";
    document.body.style.position = '';
  } 

  if(backBeneath.style.visibility = "visible") {
    backBeneath.style.visibility = "hidden";
    backBeneath.style.opacity = "0";
  }
}