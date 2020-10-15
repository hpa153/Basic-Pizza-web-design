const btnSpans = document.querySelectorAll('button');

const display = document.querySelector('.screen');

btnSpans.forEach(function(button) {
    button.addEventListener('click', calculate);
});

function calculate(event) {
    const clickedBtn = event.target.value;
    var current = display.value;
    var lastDigit = display.value.charAt(display.value.length-1);
    console.log(current);
    
    if (clickedBtn === "=") {
        if (display.value !== '') {
            display.value = eval(display.value);
        }
    } else if (clickedBtn === 'C') {
        display.value = '';
    } else if (lastDigit === "+" || lastDigit === "-" || lastDigit === "*" || lastDigit === "/"){
        if (clickedBtn === "+" || clickedBtn === "-" || clickedBtn === "*" || clickedBtn === "/" || clickedBtn === "%") {
            display.value = display.value.replace(lastDigit, clickedBtn);
        } else {
            display.value += clickedBtn;
        }
    } else if (lastDigit === "."){
        if (clickedBtn === "+" || clickedBtn === "-" || clickedBtn === "*" || clickedBtn === "/" || clickedBtn === "%" || clickedBtn === ".") {
            clickedBtn = "";
        } else {
            display.value += clickedBtn;
        }
    } else {
        display.value += clickedBtn;
    }
}