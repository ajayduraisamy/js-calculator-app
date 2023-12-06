const display = document.getElementById("display");

function press(val){
    display.value += val;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", (e) => {

    const allowedKeys = "0123456789/*-+.";

    if(allowedKeys.includes(e.key)){
        press(e.key);
    }

    if(e.key === "Enter"){
        e.preventDefault();
        calculate();
    }

    if(e.key === "Backspace"){
        display.value = display.value.slice(0,-1);
    }

    if(e.key === "Escape"){
        clearDisplay();
    }
});
