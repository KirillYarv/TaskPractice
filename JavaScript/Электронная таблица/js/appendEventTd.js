const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let countId = 0;
let countRowId = 0;
let countColumnId = 1;
let lastWord = " ";
const alphabetN = alphabet.length;
let columns = ['A'];
let rows = [0];
console.log(localStorage);

function addId(item)
{
    let result;

    if (item === "row") {
        
        countRowId++;
        rows.push(countRowId);
    }
    else {
        if (countColumnId>25) {
            countColumnId %= alphabetN;
            lastWord += " ";
        }
        lastWord = lastWord.slice(0,-1);
        lastWord += alphabet[countColumnId];
        countColumnId++;
        columns.push(lastWord);
    }
    result = lastWord + countRowId;
    return result;
}
function removeId(item)
{
    if (item === "row") {
        countRowId--;
        rows.pop();
    }
    else {
        if (countColumnId<0) {
            countColumnId = alphabetN - 1;
            lastWord = lastWord.slice(0, -1);
        }
        lastWord = lastWord.slice(0,-1);
        lastWord += alphabet[countColumnId];
        countColumnId--;
        columns.pop();
    }
}

// Создание таблицы
function generateTable()
{
    const table = document.querySelector("table");
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    for (let i = 0; i < 1; i++) {
        const tr = document.createElement("tr");

        tbody.appendChild(tr);
        for (let j = 0; j < 1; j++) {
            const td = document.createElement("td");
            td.setAttribute('id', "A0");
            td.innerHTML = localStorage.getItem("A0");
            tr.appendChild(td);
        }
    }
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
let tds= document.querySelectorAll("td");

tds.forEach(td => {
    appendEventTd(td);
});




