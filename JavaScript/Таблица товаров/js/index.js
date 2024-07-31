let productTableFactory;
let productTable;

// Генерация таблицы
async function generateTable()
{
    productTableFactory = new ProductTableFactory();
    productTable = await productTableFactory.getTable();
    await productTable.createTable();
}

generateTable();

// Добавление событий
let lowPrice = 0, highPrice = Infinity;

const lowPriceInput = document.querySelector(".interaction__low-price-input");
const highPriceInput = document.querySelector(".interaction__high-price-input");
const updateFilterButton = document.querySelector(".interaction__update-button");

const p = document.querySelector('.nothing-message');

updateFilterButton.addEventListener('click', async ()=>
    {
        let result = await productTable.createTable();

        if(!result)
        {   
            p.innerHTML = "Нет данных, попадающих под условие фильтра"; 
        }
        else
        {
            p.innerHTML="";
        }
    }
);

lowPriceInput.addEventListener('input', () =>
    {
        lowPrice = Number(event.target.value);
    }
);

highPriceInput.addEventListener('input', () =>
    {
        highPrice = Number(event.target.value);
    }
);