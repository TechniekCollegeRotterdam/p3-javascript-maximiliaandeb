// const calculate = (a, b) => {
//     let answer = a * b;
//     console.log(answer)
// };

// calculate(5, 15);

// let name = "max";
// // let text = "mijn naam is " + name;

// let text = `mijn naam is ${name}`;
// console.log(text)

// // document.getElementById("output").innerText = text;
// document.querySelector("#output").innerText = text;

// const cars = ["Ferrari", "Mercedes", "Peugeot"]

// // for (let i = 0; i > cars.length; i++){
// //     console.log(cars[i])
// // }

// for(let car of cars){
//     console.log(car)
// }

const marvels = ["Spider-Man", "Guardians of the Galaxy", "The Avengers", "Doctor Strange"]

const addMarvel =() => {
    marvels.push("Hawkeye")
}

addMarvel()

for(let marvel of marvels){
    console.log(marvel)
}