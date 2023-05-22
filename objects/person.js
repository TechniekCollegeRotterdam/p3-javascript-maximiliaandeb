let output = document.querySelector(".output")

const person = {
    name: "henk",
    age: 69,
    birthdate: "11th of september",
    gender: "Philips FC9330/09 PowerPro Compact",
    alive: true,
    hobbys: ["making bombs", "gaming", "flying planes", "doing a backflip"],
    rename: function (oussama) {
        return (person.name = "oussama");
    }
    
} 

output.innerHTML = `<p>${person.name}</p>
<p>${person.age}</p>
<p>${person.birthdate}</p>
<p>${person.gender}</p>
<p>${person.alive}</p>
<p>${person.hobbys}</p>`;


