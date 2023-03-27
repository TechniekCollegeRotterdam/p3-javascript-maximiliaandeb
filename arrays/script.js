//opdracht 1 

let winkelmand = ["bananen","whiskey","chips","bonen","aardappelen"];

let output = document.getElementById("text");

winkelmand.length

// output.innerText = "er zitten " + winkelmand.length + " producten in uw winkelmand"
//opdracht 2    

output.innerText = "uw producten zijn" + winkelmand;

//opdracht 3 
output.innerText = winkelmand[3] + "staat op de vierde plek in uw winkelmand"

//opdracht 4 
winkelmand[1] = "bier"
//opdracht 5
function product_toevoegen(){
    winkelmand.push("zwitsalbabyolie")
    output.innerText = winkelmand;  
}
//opdracht 6 
 if(winkelmand.length >= 1){
 output.innerText = winkelmand
 }

  else {
output.innerText = "u heeft niet genoeg producten om te tonen"
 }

 //opdracht 7 

 if(winkelmand[4] == "drop"){
output.innerText = winkelmand
 }

 else {
    output.innerText = "u heeft geen drop"
 }

//opdracht 8 
output.innerText = winkelmand.join(" ")

//opdracht 9 
winkelmand.splice(0,2)
output.innerText = winkelmand

//opdracht 10 
winkelmand.sort()
output.innerText = winkelmand;