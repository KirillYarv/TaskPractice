class TableFactory
{
    async getTable(){}
}


class ProductTableFactory extends TableFactory
{
    #table;
    async getTable()
    {
        const data = await getDataArray();
        const headElement = ["ID", "название", "Количество", "Цена за единицу", "Сумма"];
        
        return new ProductTable(data, headElement, 
            (count, i)=>
                {
                    return [count, data[i].name, data[i].quantity, data[i].price, data[i].price * data[i].quantity];
                },
            (i) =>
                {
                    return (data[i].price >= lowPrice && data[i].price <= highPrice) 
                    || (highPrice ==0 && lowPrice ==0);
                }
        )
    }
}


class Table
{
    data;
    headElement;
    rowData;
    condition;

    #tbl;
    #tblHead;
    #tblBody;

    constructor(data, headElement, rowData, condition)
    {
        this.data = data;
        this.headElement = headElement;
        this.rowData = rowData;
        this.condition = condition;
    }

    async isStop(){return true;}

    async createTable()
    {
        const table = document.querySelector("table");
        const productTable = document.querySelector(".product-table");

        this.#tbl = document.createElement("table");
        this.#tblHead = document.createElement("thead");
        this.#tblBody = document.createElement("tbody");

        if(table)
            productTable.removeChild(table);
        
        //Если нет данных, то завершаем работу метода
        const isStop = await this.isStop();

        if (isStop) {
            return false;    
        }

        // Создание заголовочной строки
        const rowHead = document.createElement("tr");
        this.headElement.forEach(item => {
            const cellHead = document.createElement("th");
            const cellHeadText = document.createTextNode(item);
            cellHead.appendChild(cellHeadText);
            rowHead.appendChild(cellHead);
        });
        
        this.#tblHead.appendChild(rowHead);

        // Добавление tbody и thead в table
        this.#tbl.appendChild(this.#tblHead);
        this.#tbl.appendChild(this.#tblBody);
        // Добавление table в body
        productTable.appendChild(this.#tbl);

        // Заполнение таблицы данными
        let count = 1;
        for (let i = 0; i < this.data.length; i++) 
        {
            if(this.condition(i))
            {  
                const rowDataItem = this.rowData(count, i);

                // Создание строки с данными
                const row = document.createElement("tr");

                rowDataItem.forEach(item =>{
                    const cell = document.createElement("td");
                    const cellText = document.createTextNode(item);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                });
        
                this.#tblBody.appendChild(row);
        
                count++;
            }
        }
        return true;
    }
}


class ProductTable extends Table
{
    #tbl;
    #tblHead;
    #tblBody;

    async isStop()
    {
        if(!this.data)
            this.data = await getDataArray();

        for (let i = 0; i < this.data.length; i++) 
        {
            if(this.condition(i))
            {
                return false;
            }
        }
        return true;
    }
}