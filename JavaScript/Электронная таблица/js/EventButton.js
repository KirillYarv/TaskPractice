// Добавляем события к кнопкам
const tbody = document.querySelector("tbody");
const plusColumnButton = document.querySelector(".plus-column-button");
const minusColumnButton = document.querySelector(".minus-column-button");
const plusRowButton = document.querySelector(".plus-row-button");
const minusRowButton = document.querySelector(".minus-row-button");

plusRowButton.addEventListener("click", () => {
    const existedTr= document.querySelector("tr");
    const tr= document.createElement("tr");
    addId("row");

    let i = 0;
    existedTr.childNodes.forEach(()=> {
        const td= document.createElement("td");
        const id = columns[i]+rows[rows.length-1];

        td.setAttribute('id', id);
        td.innerHTML = localStorage.getItem(id);
        i++;
        
        appendEventTd(td);
        tr.appendChild(td);
    });
    addLastElement();
    tbody.appendChild(tr);
});

minusRowButton.addEventListener("click", () => {
    const tr = tbody.lastChild.childNodes;
    let flag = true;
    const tdsData = [];
    // Проверяем отсутствие данных в какой-либо ячейке
    for (let i = 0; i < tr.length; i++) {
        if (tr[i].innerHTML) {
            flag = confirm("Вы хотите удалить ячейку с данными?");
            break;
        }
    }

    if (tbody.children.length === 1 || !flag) {
        return;
    }
    removeId('row');

    tr.forEach(td => {
        localStorage.removeItem(td.getAttribute("id"));
    });

    addLastElement();

    tbody.lastChild.remove();
});

plusColumnButton.addEventListener("click", () => {
    const trs= document.querySelectorAll("tr");
    addId("column");

    let i = 0;
    trs.forEach(tr => {
        const td= document.createElement("td");
        const id = lastWord+rows[i];
        td.setAttribute('id', id);
        td.innerHTML = localStorage.getItem(id);
        i++;

        appendEventTd(td);
        tr.appendChild(td);
    });
    addLastElement();
});

minusColumnButton.addEventListener("click", () => {
    const trs = document.querySelectorAll("tr");
    let flag = true ;

    // Просверяем отсутствие данных в ячейке
    for (let i = 0; i < trs.length; i++) {
        const childNodes = trs[i].childNodes;
        if (childNodes[childNodes.length - 1].innerHTML) {
            flag = confirm("Вы хотите удалить ячейку с данными?");
            break;
        }
    }

    if (trs[0].children.length === 1 || !flag) {
        return;
    }

    removeId('column');

    addLastElement();

    trs.forEach(tr => {
        localStorage.removeItem(tr.childNodes[tr.childNodes.length - 1].getAttribute("id"));
        tr.lastChild.remove();
    });
});
