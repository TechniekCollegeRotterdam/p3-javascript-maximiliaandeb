let output = document.querySelector(".output");

const book = {
    title: "Harry Potter",
    Athor: "J.K Rowling",
    publisher: "Warner Brothers",
    year: "2002",
    sold: 10000000,
    price: 19.99
};

output.innerHTML = `
<p>${book.title}</p> 
<p>${book.Athor}</p>
<p>${book.publisher}</p>
<p>${book.year}</p>
<p>${book.sold}</p>
<p>${book.price}</p>`