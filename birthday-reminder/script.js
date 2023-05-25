let output = document.querySelector('.birthdays')
let out = '';

fetch('./birthdays.json')
.then((response) => response.json())
.then((birthdays) => {

    for (let birthday of birthdays) {
        out +=
            `<h2>${birthday.name}</h2>
    <p>${birthday.age}</p>
    <img src= "${birthday.img}"></img>
    `   
    }
    output.innerHTML = out;
})

