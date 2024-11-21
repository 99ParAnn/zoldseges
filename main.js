let veggies = [
    { name: "Brokkoli", price: 1599, amount: 100, image: "broccoli.jpg" },
    { name: "Répa", price: 599, amount: 100, image: "carrot.jpg" },
    { name: "Uborka", price: 1599, amount: 100, image: "cucumber.jpg" },
    { name: "Padlizsán", price: 1120, amount: 100, image: "eggplant.jpg" },
    { name: "Paradicsom", price: 1599, amount: 100, image: "tomato.jpg" },
    { name: "Paprika", price: 1605, amount: 100, image: "broccoli.jpg" },
    { name: "Burgonya", price: 349, amount: 100, image: "potato.jpg" },
    { name: "Cékla", price: 595, amount: 100, image: "beetroot.jpg" },
]

let orderedItems = [{ id: 4, amount: 100, }]

document.addEventListener("DOMContentLoaded", () => {
    console.log("js is in place. áááá")
    addToOrder(2, 200)
    addToOrder(4,1)
    displayCatalogue();

    document.getElementById("submit").addEventListener("click",(event) =>
    {
        event.preventDefault();
        console.log("iurrtreth")
        addToOrder(1, 1)
    })
})

function displayCatalogue() {
    const tableBody = document.getElementById('zoldsegek-tablazat');
    tableBody.innerHTML = '';
    veggies.forEach((veggie) => {
        const row = `
            <tr>
                <td>${veggie.name}</td>
                <td>${veggie.price} Ft</td>
                <td>${veggie.amount} kg</td>                
                <td> <img src ="${veggie.image}"></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function displayOrder() { 

}

function addToOrder(whichVeggie, howMuch) {
    foundIt = false;
    orderedItems.forEach((item) => {
        if (whichVeggie == item.id) {
            item.amount += howMuch;
            foundIt = true;
        }
    })
    if (!foundIt) {
        orderedItems.push({id: whichVeggie, amount:howMuch})
    }
    console.log(orderedItems)

}