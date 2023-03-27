let output = document.getElementById("text");

let input = document.getElementById("input");

let shop = [];

function add_product() {
let product = input.value;
shop.push(product);
output.innerText = shop;
input = ""; 
}

