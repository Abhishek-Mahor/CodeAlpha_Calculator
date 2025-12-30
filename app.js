let btn_1 = document.querySelector("#btn-1");
let btn_2 = document.querySelector("#btn-2");
let btn_3 = document.querySelector("#btn-3");
let btn_4 = document.querySelector("#btn-4");
let btn_5 = document.querySelector("#btn-5");
let btn_6 = document.querySelector("#btn-6");
let btn_7 = document.querySelector("#btn-7");
let btn_8 = document.querySelector("#btn-8");   
let btn_9 = document.querySelector("#btn-9");
let btn_0 = document.querySelector("#btn-0");
let btn_dot = document.querySelector("#btn-dot");

let btn_add = document.querySelector("#btn-add");
let btn_sub = document.querySelector("#btn-subtract");
let btn_mul = document.querySelector("#btn-multiply");
let btn_div = document.querySelector("#btn-divide");   
let btn_clear = document.querySelector("#btn-clear");
let btn_percent = document.querySelector("#btn-percent");
let btn_backspace = document.querySelector("#backspace");

let input_area = document.querySelector("#input-area");
let result_area = document.querySelector("#result-area");   

// Append character helper and realtime compute
function appendChar(ch) {
    input_area.value += ch;
    computeResult();
}

function computeResult(final = false) {
    const expr = input_area.value;
    if (!expr) {
        result_area.textContent = "";
        return;
    }
    // Only allow digits, operators, parentheses, dot and spaces
    if (!/^[0-9+\-*/.() ]+$/.test(expr)) {
        result_area.textContent = final ? "Invalid input" : "";
        return;
    }
    // Remove trailing operators/dots/spaces for live calculation
    const safeExpr = expr.replace(/[+\-*/. ]+$/g, "");
    if (!safeExpr) {
        result_area.textContent = "";
        return;
    }
    try {
        const value = eval(safeExpr);
        result_area.textContent = value;
    } catch (e) {
        result_area.textContent = final ? "Error" : "";
    }
}



btn_1.onclick = function() { appendChar("1"); }
btn_2.onclick = function() { appendChar("2"); }
btn_3.onclick = function() { appendChar("3"); }
btn_4.onclick = function() { appendChar("4"); }
btn_5.onclick = function() { appendChar("5"); }
btn_6.onclick = function() { appendChar("6"); }
btn_7.onclick = function() { appendChar("7"); }
btn_8.onclick = function() { appendChar("8"); }
btn_9.onclick = function() { appendChar("9"); }
btn_0.onclick = function() { appendChar("0"); }
btn_dot.onclick = function() { appendChar("."); }
btn_percent.onclick = function() { appendChar("/100"); }
btn_add.onclick = function() { appendChar("+"); }
btn_sub.onclick = function() { appendChar("-"); }
btn_mul.onclick = function() { appendChar("*"); }
btn_div.onclick = function() { appendChar("/"); }

btn_backspace.onclick = function() {        
    input_area.value = input_area.value.slice(0, -1);
    computeResult();
}

btn_clear.onclick = function() {        
    input_area.value = "";
    result_area.textContent = "";
}



// If the input is ever editable directly, recompute on typing
input_area.addEventListener('input', () => computeResult());

// Keyboard support
document.addEventListener('keydown', (e) => {
    const key = e.key;
    
    // Number keys (0-9)
    if (key >= '0' && key <= '9') {
        appendChar(key);
        e.preventDefault();
    }
    // Operators
    else if (key === '+') {
        appendChar('+');
        e.preventDefault();
    }
    else if (key === '-') {
        appendChar('-');
        e.preventDefault();
    }
    else if (key === '*') {
        appendChar('*');
        e.preventDefault();
    }
    else if (key === '/') {
        appendChar('/');
        e.preventDefault();
    }
    else if (key === '.') {
        appendChar('.');
        e.preventDefault();
    }
    // Parentheses
    else if (key === '(') {
        appendChar('(');
        e.preventDefault();
    }
    else if (key === ')') {
        appendChar(')');
        e.preventDefault();
    }
    // Backspace - delete last character
    else if (key === 'Backspace') {
        input_area.value = input_area.value.slice(0, -1);
        computeResult();
        e.preventDefault();
    }
   

    // Escape - clear
    else if (key === 'Escape') {
        input_area.value = "";
        result_area.textContent = "";
        e.preventDefault();
    }
});
