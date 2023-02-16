let budget = 100
let product = prompt()

if (budget > product){
    greeting = "U heeft genoeg geld";
    text.innerText = "u heeft genoeg geld"
    text.style.color = "green";
}
else if (product > budget){
    greeting = "Helaas, te weinig geldt";
    text.innerText = "Helaas, te weinig geld"
    text.style.color = "red";
}

