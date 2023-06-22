const visitorsContainer = document.querySelector("#visitors-container");
const visitorURL = `http://localhost:3000/visitors`;
const visitorForm = document.querySelector("#visitor-form");
let allVisitors = [];
//read
fetch(`${visitorURL}`)
    .then((response) => response.json())
    .then((visitors) => {
        let out = "";
        for (let visitor of visitors) {
            allVisitors = visitors;
            out += `
<div id="single-visitor">
<h3> ${visitor.firstname}</h3>
<h3> ${visitor.lastname}</h3>
<h3> ${visitor.city}</h3>
<h3> ${visitor.phonenumber}</h3>
<h3> ${visitor.email}</h3>
<button data-id="${visitor.id}" id="delete-${visitor.id}" data-action="delete">Delete</button>
</div>
`;
        }
        visitorsContainer.innerHTML = out;
    });
//create
visitorForm.addEventListener("submit", () => {
    e.preventDefault()
    const firstNameInput = visitorForm.querySelector("#first-name").value;
    const lastNameInput = visitorForm.querySelector("#last-name").value;
    const cityInput = visitorForm.querySelector("#city").value;
    const emailnput = visitorForm.querySelector("#email").value;
    const phoneInput = visitorForm.querySelector("#phone-number").value;
    fetch(`${visitorURL}`, {
        method: 'POST',
        body: JSON.stringify({
            firstname: firstNameInput,
            lastname: lastNameInput,
            city: cityInput,
            email: emailnput,
            phonenumber: phoneInput
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
});
//delete
visitorsContainer.addEventListener("click", (e) => {
e.preventDefault();
if (e.target.dataset.action === 'delete') {
    document.querySelector(`#delete-${e.target.dataset.id}`).remove();
    fetch(`${visitorURL}/${e.target.dataset.id}`, {
       method: 'DELETE',
       headers: { 
        'Content-Type': 'application/json'
       }
    })
}
})
 