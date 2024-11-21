let parts = [
    { name: "Motor 1", price: 500000, type: 0 },
    { name: "Felf�ggeszt�s 1", price: 500000, type: 1 },
    { name: "Felf�ggeszt�s 2", price: 500000, type: 1 },
    { name: "Ker�k 1", price: 100000, type: 2 },
    { name: "Ker�k 2", price: 100000, type: 2 },
    { name: "F�k 1", price: 200000, type: 3 },
    { name: "Motor 2", price: 500000, type: 0 },
    { name: "F�k 2", price: 100000, type: 3 },
    { name: "Kipufog� 1", price: 100000, type: 4 },
    { name: "Kipufog� 2", price: 100000, type: 4 },
    { name: "Karossz�ria 1", price: 100000, type: 5 },
    { name: "Karossz�ria 2", price: 100000, type: 5 },
    { name: "Bels� t�r 1", price: 100000, type: 6 },
    { name: "Bels� t�r 2", price: 100000, type: 6 },
    { name: "V�lt� 1", price: 100000, type: 7 },
    { name: "V�lt� 2", price: 100000, type: 7 },
    { name: "Elektromos rendszer 1", price: 100000, type: 8 },
    { name: "Elektromos rendszer 2", price: 100000, type: 8 },
    { name: "H�t�rendszer 1", price: 100000, type: 9 },
    { name: "H�t�rendszer 2", price: 100000, type: 9 }]

let partTypes = [
    { id: 0, name: "Motor" },
    { id: 1, name: "Felf�ggeszt�s" },
    { id: 2, name: "Kerekek" },
    { id: 3, name: "F�krendszer" },
    { id: 4, name: "Kipufog�rendszer" },
    { id: 5, name: "Karossz�ria" },
    { id: 6, name: "Bels� t�r" },
    { id: 7, name: "V�lt�" },
    { id: 8, name: "Elektromos rendszer" },
    { id: 9, name: "H�t�rendszer" }]


document.addEventListener("DOMContentLoaded", () => {
    displayParts();
    console.log("���")
})

// Alkatr�szek megjelen�t�se a t�bl�zatban
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


//A felv�tel formhoz a select felt�lt�se
function displaySelectForForm() {
    const selectBody = document.getElementById("part-type");
    selectBody.innerHTML = '';
    partTypes.forEach((part) => {
        const newOption = `<option value = "${part.id}">${part.name}</option>`
        selectBody.innerHTML += newOption;
        console.log(newOption);
    })
}

//A v�laszthat� alkatr�szek felv�tele a t�bl�zatban lev� selectekhez
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

//�j alkatr�sz hozz�ad�sa
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

// V�rhat� �r kisz�m�t�sa
document.getElementById('calculate-btn').addEventListener('click', () => {
    let totalPrice = 0;
    for (var i = 0; i < 10; i++) {
        const selected = document.getElementById(`part-select-${i}`);
        console.log(document.getElementById(`part-select-${i}`));
        totalPrice += parseInt(selected.value);
        document.getElementById('expected-price').innerText = `V�rhat� �r: ${totalPrice} Ft`;
    }
});



// Els� megjelen�t�s
displaySelectForForm();
console.log("bazmeg");

for (var i = 0; i < 10; i++) {
    displaySelectComponent(`part-select-${i}`, i)
}