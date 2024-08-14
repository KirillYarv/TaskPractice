const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let countRowId = 0;
let countColumnId = -1;
let lastWord = " ";
const alphabetN = alphabet.length;
let columns = [];
let rows = [];
console.log(localStorage);
//localStorage.clear();

function addLastElement() {
    localStorage.setItem("0", lastWord+rows[rows.length - 1]);
}
function addId(item)
{
    if (item === "row") {
        countRowId++;
        rows.push(countRowId);
    }
    else {
        if (countColumnId >= 25) {
            countColumnId = -1;
            lastWord += " ";
        }
        lastWord = lastWord.slice(0, -1);
        countColumnId++;
        lastWord += alphabet[countColumnId];
        columns.push(lastWord);
    }
}
function removeId(item)
{
    if (item === "row") {
        countRowId--;
        rows.pop();
    }
    else {
        if (countColumnId <= 0) {
            countColumnId = alphabetN - 1;
            lastWord = lastWord.slice(0, -1);
        }
        lastWord = lastWord.slice(0, -1);
        countColumnId--;
        lastWord += alphabet[countColumnId];
        columns.pop();
    }
}

// Создание таблицы
function generateTable()
{
    const table = document.querySelector("table");
    const tbody = document.createElement("tbody");

    if (!localStorage.getItem("0")){
        localStorage.setItem("0","A1");
    }
    const endElement = localStorage.getItem("0");

    let lettersEndElement = "";

    for (let i = 0; !/^\d+$/.test(endElement[i]); i++) {
        lettersEndElement += endElement[i];
    }

    table.appendChild(tbody);

    for (let i = 0; lastWord !== lettersEndElement; i++) {
        addId("columns");
    }

    let i= -1;
    do {
        const tr = document.createElement("tr");
        addId("row");
        tbody.appendChild(tr);
        for (let j = 0; j < columns.length; j++) {
            const td = document.createElement("td");

            appendEventTd(td);

            const id = columns[j]+rows[rows.length - 1];
            td.setAttribute('id', id);
            td.innerHTML = localStorage.getItem(id);
            tr.appendChild(td);
        }
        i++;
    }
    while (lastWord + rows[i] !== endElement )
}

// Добавляем события изменения ячеек по двойному щелчку
function appendEventTd(td) {
    td.addEventListener('dblclick', () => {
        td.contentEditable = true;
    });
    td.addEventListener('blur', () => {
        td.contentEditable = false;
        localStorage.setItem(td.getAttribute('id'), event.target.innerHTML);
    });
}

generateTable();
