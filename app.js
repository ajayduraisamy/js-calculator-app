const display = document.getElementById("display");
const historyEl = document.getElementById("history");

function press(val){
    display.value += val;
}

function clearDisplay(){
    display.value = "";
    historyEl.innerText = "";
}

function calculate(){
    try{
        const exp = display.value;
        const result = eval(exp);

        historyEl.innerText = exp + " =";
        display.value = result;

    } catch {
        display.value = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", (e) => {

    const valid = "0123456789/*-+.";

    if(valid.includes(e.key)){
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
