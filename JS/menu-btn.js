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