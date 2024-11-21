let parts = [
    { name: "Motor 1", price: 500000, type: 0 },
    { name: "Felfüggesztés 1", price: 500000, type: 1 },
    { name: "Felfüggesztés 2", price: 500000, type: 1 },
    { name: "Kerék 1", price: 100000, type: 2 },
    { name: "Kerék 2", price: 100000, type: 2 },
    { name: "Fék 1", price: 200000, type: 3 },
    { name: "Motor 2", price: 500000, type: 0 },
    { name: "Fék 2", price: 100000, type: 3 },
    { name: "Kipufogó 1", price: 100000, type: 4 },
    { name: "Kipufogó 2", price: 100000, type: 4 },
    { name: "Karosszéria 1", price: 100000, type: 5 },
    { name: "Karosszéria 2", price: 100000, type: 5 },
    { name: "Belsõ tér 1", price: 100000, type: 6 },
    { name: "Belsõ tér 2", price: 100000, type: 6 },
    { name: "Váltó 1", price: 100000, type: 7 },
    { name: "Váltó 2", price: 100000, type: 7 },
    { name: "Elektromos rendszer 1", price: 100000, type: 8 },
    { name: "Elektromos rendszer 2", price: 100000, type: 8 },
    { name: "Hûtõrendszer 1", price: 100000, type: 9 },
    { name: "Hûtõrendszer 2", price: 100000, type: 9 }]

let partTypes = [
    { id: 0, name: "Motor" },
    { id: 1, name: "Felfüggesztés" },
    { id: 2, name: "Kerekek" },
    { id: 3, name: "Fékrendszer" },
    { id: 4, name: "Kipufogórendszer" },
    { id: 5, name: "Karosszéria" },
    { id: 6, name: "Belsõ tér" },
    { id: 7, name: "Váltó" },
    { id: 8, name: "Elektromos rendszer" },
    { id: 9, name: "Hûtõrendszer" }]


document.addEventListener("DOMContentLoaded", () => {
    displayParts();
    console.log("ééé")
})

// Alkatrészek megjelenítése a táblázatban
function displayParts() {
    const tableBody = document.getElementById('zoldsegek-tablazat');
    parts.sort((a, b) => a.type - b.type)
    tableBody.innerHTML = '';
    parts.forEach((part) => {
        const row = `
            <tr>
                <td>${part.name}</td>
                <td>${part.price} Ft</td>
                <td>${partTypes[part.type].name}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}


//A felvétel formhoz a select feltöltése
function displaySelectForForm() {
    const selectBody = document.getElementById("part-type");
    selectBody.innerHTML = '';
    partTypes.forEach((part) => {
        const newOption = `<option value = "${part.id}">${part.name}</option>`
        selectBody.innerHTML += newOption;
        console.log(newOption);
    })
}

//A választható alkatrészek felvétele a táblázatban levõ selectekhez
function displaySelectComponent(idOfSelect, partType) {
    const whichSelect = document.getElementById(idOfSelect)
    whichSelect.innerHTML = '';
    parts.forEach((part) => {
        if (part.type == partType) {
            const option = `<option value = ${part.price}>${part.name} (${part.price} Ft)</option>`;
            whichSelect.innerHTML += option;
        }
        return;
    })
}

//Új alkatrész hozzáadása
document.getElementById('add-part-btn').addEventListener('click', () => {
    const name = document.getElementById('part-name').value;
    const price = parseInt(document.getElementById('part-price').value);
    const type = document.getElementById('part-type').value;

    if (name && price && type) {
        parts.push({ name, price, type });
        displayParts();
    }
    for (var i = 0; i < 10; i++) {
        displaySelectComponent(`part-select-${i}`, i)
    }
});

// Várható ár kiszámítása
document.getElementById('calculate-btn').addEventListener('click', () => {
    let totalPrice = 0;
    for (var i = 0; i < 10; i++) {
        const selected = document.getElementById(`part-select-${i}`);
        console.log(document.getElementById(`part-select-${i}`));
        totalPrice += parseInt(selected.value);
        document.getElementById('expected-price').innerText = `Várható ár: ${totalPrice} Ft`;
    }
});



// Elsõ megjelenítés
displaySelectForForm();
console.log("bazmeg");

for (var i = 0; i < 10; i++) {
    displaySelectComponent(`part-select-${i}`, i)
}