let output = document.querySelector('.countrys')
let out = '';

fetch('https://restcountries.com/v3.1/all/')
    .then((Response) => Response.json())
    .then((countrys) => {
        console.log(countrys);

        for (let country of countrys) {
            console.log(country.name.common);
            out += `<div> <h2>${country.name.common}</h2>
        <img src= "${country.flags.png}"></img></div>
        `
        }
        output.innerHTML = out;
    })