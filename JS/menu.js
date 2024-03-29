var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

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