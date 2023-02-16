let element = document.getElementById("number")
let value = 0;

function add(){
    if(value >= 9) {
        value = 0;
        element.innerText = value;
    }
else {
    value += 1;
    element.innerText = value;
}
}

