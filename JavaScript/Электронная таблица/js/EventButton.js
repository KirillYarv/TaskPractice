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

    tbody.appendChild(tr);
});

minusRowButton.addEventListener("click", () => {
    const tr = tbody.lastChild.childNodes;
    let flag = true;
    removeId('row');
    // Просверяем отсутствие данных в какой-либо ячейке
    tr.forEach(td => {
        if (td.innerHTML) {
            flag = confirm("Вы хотите удалить ячейку с данными?");

            if (flag) {
                return;
            }

            localStorage.removeItem(td.getAttribute("id"));
        }
    })

    if (tbody.children.length === 1 || !flag) {
        return;
    }

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
    
});

minusColumnButton.addEventListener("click", () => {
    const trs = document.querySelectorAll("tr");
    let flag = true ;
    removeId('column');

    // Просверяем отсутствие данных в ячейке
    for (let i = 0; i < trs.length; i++) {
        const childNodes = trs[i].childNodes;
        if (childNodes[childNodes.length - 1].innerHTML) {
            flag = confirm("Вы хотите удалить ячейку с данными?");

            if (!flag){
                break;
            }

            localStorage.removeItem(childNodes[childNodes.length - 1].getAttribute("id"));
        }
    }

    trs.forEach(tr => {
        if (tr.children.length === 1 || !flag) {
            return;
        }
        tr.lastChild.remove();
    });
});
