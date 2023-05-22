let output = document.querySelector(".output")

const product = {
    name: "shirt",
    size: "L",
    gender: "men",
    img: "./img/shirt.jpg"
}

output.innerHTML = `<p>${product.name}</p>
<p>${product.size}</p>
<p>${product.gender}</p>
<img src="${product.img}"></img>`
